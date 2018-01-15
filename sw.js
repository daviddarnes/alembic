---
---
const version = '{{ site.time | date: '%Y%m%d%H%M%S' }}';
const cacheName = `static::${version}`;

const buildContentBlob = () => {
  return [
    {%- for post in site.posts limit: 10 -%}
      "{{ post.url }}",
    {%- endfor -%}
    {%- for page in site.pages -%}
      {%- unless page.url contains 'sw.js' -%}
        "{{ page.url }}",
      {%- endunless -%}
    {%- endfor -%}
      "/assets/logo.svg","/assets/styles.css"
  ]
}

const updateStaticCache = () => {
  return caches.open(cacheName).then(cache => {
    return cache.addAll(buildContentBlob());
  });
};

const clearOldCache = () => {
  return caches.keys().then(keys => {
    // Remove caches whose name is no longer valid.
    return Promise.all(
      keys
        .filter(key => {
          return key !== cacheName;
        })
        .map(key => {
          console.log(`Service Worker: removing cache ${key}`);
          return caches.delete(key);
        })
    );
  });
};

self.addEventListener("install", event => {
  event.waitUntil(
    updateStaticCache().then(() => {
      console.log(`Service Worker: cache updated to version: ${cacheName}`);
    })
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(clearOldCache());
});

self.addEventListener("fetch", event => {
  let request = event.request;
  let url = new URL(request.url);

  // Only deal with requests from the same domain.
  if (url.origin !== location.origin) {
    return;
  }

  // Always fetch non-GET requests from the network.
  if (request.method !== "GET") {
    event.respondWith(fetch(request));
    return;
  }

  // For HTML requests, try the network first else fall back to the offline page.
  if (request.headers.get("Accept").indexOf("text/html") !== -1) {
    event.respondWith(fetch(request).catch(() => caches.match(event.request)));
    return;
  }

  // For non-HTML requests, look in the cache first else fall back to the network.
  event.respondWith(
    caches.match(request).then(response => {
      if (response) {
        console.log("Serving cached: ", event.request.url);
        return response;
      }
      console.log("Fetching: ", event.request.url);
      return fetch(request);
    })
  );
});
