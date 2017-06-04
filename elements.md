---
title: Elements
feature_text: |
  A demo of Markdown and HTML includes
feature_image: "https://unsplash.it/1300/400?image=1061"
excerpt: "A demo of Markdown and HTML includes"
aside: true
---

# Heading 1

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

<small>A small element</small>

[A link](https://david.darn.es "A link")

Lorem ipsum dolor sit amet, consectetur adip* isicing elit, sed do eiusmod *tempor incididunt ut labore et dolore magna aliqua.

Duis aute irure dolor in [A link](https://david.darn.es "A link") reprehenderit in voluptate velit esse cillum **bold text** dolore eu fugiat nulla pariatur. Excepteur span element sint occaecat cupidatat non proident, sunt _italicised text_ in culpa qui officia deserunt mollit anim id `some code` est laborum.

* An item
* An item
* An item
* An item
* An item

1. Item one
2. Item two
3. Item three
4. Item four
5. Item five

> A simple blockquote

``` html
<div>
  <span>Some example code</span>
</div>
```

`Single line of code`

## HTML Includes

### Contact form

{% include site-form.html %}

### Demo map embed

{% include map.html id="1UT-2Z-Vg_MG_TrS5X2p8SthsJhc" %}

### Button include

{% include button.html text="A button" link="https://david.darn.es" %}

{% include button.html text="A button with icon" link="https://twitter.com/daviddarnes" icon="twitter" %}

### Icon include

{% include icon.html id="twitter" %} [{% include icon.html id="linkedin" %}](https://www.linkedin.com/in/daviddarnes)

### Video include

{% include video.html id="zrkcGL5H3MU" %}

### Image includes

{% include figure.html image="https://unsplash.it/300/400?image=123" caption="This image has a caption" %}

{% include figure.html image="https://unsplash.it/300/400?image=123" caption="This image has a caption but also alt text" alt="This is the alt text" position="right" %}

{% include figure.html image="https://unsplash.it/800/400?image=123" alt="This image has alt text but no caption" %}
