# [Alembic](https://alembic.darn.es/)
⚗ A theme designed to be a starting point for any Jekyll website.

## Contents
- [About](#about)
- [Installation](#installation)
- [Configuration](#configuration)
- [Gem settings](#gem-settings)
- [Site settings](#site-settings)
- [Site navigation](#site-navigation)
- [Using includes](#using-includes)
- [Page layouts](#page-layouts)
- [Page and Post options](#page-and-post-options)

## About

Alembic is partly a passion project, partly an effort to bundle everything I tend to build when creating a site. The plan is to make this easily forkable and set up with your system of choice. For me, that will be [Siteleaf](http://www.siteleaf.com/), so some of the configuration has been created with that platform in mind.

## Installation

1. Fork the repo
2. Clone down the repo with `$ git clone git@github.com:username/reponame.git`
3. Open the `/_config.yml` file and change details to your own project details
4. Install GitHub Pages locally with `$ gem install github-pages`
5. Run Jekyll from inside the the root of the repo using `$ jekyll serve --watch`
6. Begin hacking for your project

## Configuration

There's a number of settings you'll need to change before you can start hacking away at files. Here's a run down of what you'll need to change:

### Gem settings
`twitter`, `author` and `social` values will need to be changed to the projects' social information or removed. Look for the `Gem settings` comment within the `/_config.yml` file. These values are for the [jekyll-seo-tag](https://github.com/jekyll/jekyll-seo-tag) - follow the link to find out more.

### Site settings
You'll need to change the `description`, `title` and `url` to match with the project. You'll also need to replace the `/_uploads/logo.png` with the project logo. The `email` needs to be changed to the email you want to receive contact form enquires with. The `disqus` value should be changed to your project username on [Disqus](https://disqus.com). Look for the `Site settings` comment within the `/_config.yml` file. The `repo` setting is optional, for now, and can be removed entirely, if you wish.

### Site navigation
There are 3 different navigation types: one for the header, one for the footer and one for a set of social links shown in the aside (or sidebar). If the header or footer navigation are removed, they will fallback to a list of pages within the site. The `social_navigation` properties should either be one that is already in the list (so `Twitter` or `Facebook`) or simply `link`, This is so an icon can be set for the link. Look for the `Site navigation` comment within the `/_config.yml` file.

## Using includes

There are 2 main types of includes: ones designed for the site and ones that are designed as shortcodes. Here are a list of the shortcode includes:

### `button.html`
A button that can link to a page of any kind.

Example usage: `{% include button.html text="I'm a button" link="https://daviddarnes.com" %}`

Available options:
- `text`: The text of the button _required_
- `link`: The link that the button goes to _required_
- `icon`: The icon that is added to the end of the button text

### `figure.html`
An image with optional caption.

Example usage: `{% include figure.html image="/uploads/feature-image.jpg" caption="Check out my photo" %}`

Available options:
- `image`: The image shown _required_
- `caption`: A caption to explain the image
- `position`: The position of the image. `left`, `right` or `full`

### `icon.html`
An icon.

Example usage: `{% include icon.html id="twitter" %}`

Available options:
- `id`: The reference for the icon _required_
- `title`: The accessible label for the icon
- `color`: The desired colour of the icon

### `video.html`
A YouTube video.

Example usage: `{% include video.html id="zrkcGL5H3MU" %}`

Available options:
- `id`: The YouTube ID for the video _required_

### `map.html`
A Google map. _See Google [My Maps](https://www.google.com/mymaps)_

Example usage: `{% include map.html id="1UT-2Z-Vg_MG_TrS5X2p8SthsJhc" %}`

Available options:
- `id`: The map ID for the video _required_

### `site-form.html`
Adds a contact form to the page.

Example usage: `{% include site-form.html %}`

This include has no options. Use the `email` option in the `/_config.yml` to change to the desired email.

## Page layouts

As well as `page`, `post`, `blog`, there are a few alternative layouts that can be used on pages:

- `page-aside-left`: Places the aside (sidebar) to the left of the content
- `page-full`: Removes the aside entirely, leaving the full width for the main content

## Page and Post options

There are some more specific options you can apply when creating a page or a post:

- `comments: false`: Turns off comments for that post
- `feature_image: "/uploads/feature-image.jpg"`: Adds a full width feature image at the top of the page
- `feature_text: "Example text"`: Adds text to the top of the page as a full width feature with solid colour; supports markdown. This can be used in conjunction with the `feature_image` option to create a feature image with text over it
- `indexing: false`: Adds a `noindex` meta element to the `<head>` to stop crawler bots from indexing the page, used on the 404 page
