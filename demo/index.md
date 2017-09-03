---
title: About Alembic
feature_text: |
  ## Alembic
  A Jekyll boilerplate theme designed to be a starting point for any Jekyll website
feature_image: "https://unsplash.it/1300/400?image=971"
excerpt: "Alembic is a starting point for [Jekyll](https://jekyllrb.com/) projects. Rather than starting from scratch, this boilerplate is designed to get the ball rolling immediately. Install it, configure it, tweak it, push it."
---

Alembic is a starting point for [Jekyll](https://jekyllrb.com/) projects. Rather than starting from scratch, this boilerplate is designed to get the ball rolling immediately. Install it, configure it, tweak it, push it.

{% include button.html text="Fork it" icon="github" link="https://github.com/daviddarnes/alembic" %} {% include button.html text="Tweet it" icon="twitter" link="https://twitter.com/intent/tweet/?url=http://localhost:4000/general/2016/08/29/example-post-three/&text=Alembic%20-%20A%20Jekyll%20boilerplate%20theme&via=DavidDarnes" color="#1DA1F2" %} {% include button.html text="Install Alembic" link="https://github.com/daviddarnes/alembic#installation" %} {% include button.html text="Tip me $5" link="https://www.paypal.me/daviddarnes/5usd" color="#333333" %}

## Features

- Available as a starter kit or as [Jekyll theme gem](http://jekyllrb.com/docs/themes/)
- Simple and elegant design that can be used out of the box or as solid starting point
- Tested in all major browsers, including IE and Edge
- Configurable colours and typography in a single settings file
- Extensive set of shortcodes to include various elements; such as buttons, icons, figure images and more
- Solid typographic framework from [Sassline](https://sassline.com/)
- Configurable navigation via a single file
- Modular Jekyll components
- Post category support in the form of a single post index page grouped by category
- Built in live search using JavaScript
- Contact form built in using [Formspree](https://formspree.io/)
- Works on [GitHub Pages](https://pages.github.com/) out of the box
- Designed with [Siteleaf](http://www.siteleaf.com/) in mind
- Has 9 of the most popular networks as performant sharing buttons
- Has documentation

## Examples

Here are a few examples of Alembic out in the wild being used in a variety of ways:

- [bitpodcast.com](https://bitpodcast.com/)
- [joelcagedesign.com](https://joelcagedesign.com/)
- [bawejakunal.github.io](https://bawejakunal.github.io/)
- [case2111.github.io](http://case2111.github.io/)
- [www.10people.co.uk](http://www.10people.co.uk/)
- [hrkeni.me](http://hrkeni.me/)
- [venuthatikonda.github.io](https://venuthatikonda.github.io/)
- [ccs17.bsc.es](https://ccs17.bsc.es/)
- [karateca.org](http://www.karateca.org/)

## Installation

### As a Boilerplate / Fork

1. [Fork the repo](https://github.com/daviddarnes/alembic#fork-destination-box)
2. Clone down the repo with `$ git clone git@github.com:username/reponame.git`
3. Delete the following unnecessary files/folders: `demo/`, `CODE_OF_CONDUCT.md`, `CONTRIBUTING.md`, `LICENSE`, `screenshot.png` and `alembic-jekyll-theme.gemspec`
4. Change the `logo.svg` and `default-social-image.png` in the `assets/` folder to your own branding
5. Configure your site settings using the `_config.yml`, more info can be found in [Configuration](https://github.com/daviddarnes/alembic#configuration)
5. Change the `CNAME` record to your projects' record
6. Install bundler with `$ gem install bundler`
7. Install gems with `$ bundle install`
8. Run Jekyll with `$ bundle exec jekyll serve --watch`
9. Begin hacking for your project

### As a Jekyll 3.3 theme gem

1. Download the starter `/demo` content, [quick download link](https://minhaskamal.github.io/DownGit/#/home?url=https://github.com/daviddarnes/alembic/tree/master/demo)
2. Configure your site settings using the `_config.yml`, more info can be found in [Configuration](https://github.com/daviddarnes/alembic#configuration)
3. Create a `logo.svg` and `default-social-image.png` in a new `assets/` folder
4. Install bundler with `$ gem install bundler`
5. Install gems with `$ bundle install`
6. Run Jekyll with `$ bundle exec jekyll serve --watch`
7. Begin hacking for your project

### Boilerplate & Theme differences

The boilerplate kit is better for more drastic hacking and changes, a project that's quite different to any other and needs a lot of custom work done. Additionally you'll only be able to use this method if you want to host it on GitHub Pages, as [themes can't be submitted](https://pages.github.com/themes/)... yet.

Using the theme will allow you to receive updates made and will be more programmatic. To make your own changes you'll need to overwrite the files with your own. For example: If I want to change the colours and typography of my site I'll need to copy the [`_settings.scss`](https://github.com/daviddarnes/alembic/blob/master/_sass/_settings.scss) file and create my own in `_sass/_settings.scss` with my own changes. This is the same for all files within the theme, which means your own project will be more lean than if you were to use the boilerplate.
