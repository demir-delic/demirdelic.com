# Lumen

Lumen is a minimal, lightweight and mobile-first starter for creating blogs that uses [Gatsby](https://github.com/gatsbyjs/gatsby).

## Features

+ Lost Grid ([peterramsing/lost](https://github.com/peterramsing/lost))
+ Beautiful typography inspired by [matejlatin/Gutenberg](https://github.com/matejlatin/Gutenberg)
+ [Mobile-First](https://medium.com/@mrmrs_/mobile-first-css-48bc4cc3f60f) approach in development
+ Stylesheet built using SASS and [BEM](http://getbem.com/naming/)-Style naming
+ Syntax highlighting in code blocks
+ Sidebar menu built using a configuration block
+ Archive organized by tags and categories
+ Automatic RSS generation
+ Automatic Sitemap generation
+ Offline support

## Folder Structure

```
└── src
    ├── assets
    │   ├── fonts
    │   │   └── fontello-771c82e0
    │   │       ├── css
    │   │       └── font
    │   └── scss
    │       ├── base
    │       ├── mixins
    │       └── pages
    ├── components
    │   ├── CategoryTemplateDetails
    │   ├── Disqus
    │   ├── Links
    │   ├── Menu
    │   ├── PageTemplateDetails
    │   ├── Post
    │   ├── PostTemplateDetails
    │   ├── Sidebar
    │   └── TagTemplateDetails
    ├── layouts
    ├── pages
    │   ├── articles
    │   │   ├── 2016-01-09---Perfecting-the-Art-of-Perfection
    │   │   ├── 2016-01-12---The-Origins-of-Social-Stationery-Lettering
    │   │   ├── 2016-02-02---A-Brief-History-of-Typography
    │   │   ├── 2017-18-08---The-Birth-of-Movable-Type
    │   │   └── 2017-19-08---Humane-Typography-in-the-Digital-Age
    │   └── pages
    │       ├── 2015-05-01---about
    │       └── 2015-05-01---contact
    └── templates
```

## Getting Started

#### Install Gatsby

`npm install -g gatsby-cli`

#### Install the Lumen starter

`gatsby new lumen https://github.com/alxshelepenok/gatsby-starter-lumen`

#### Run development environment

`gatsby develop`

#### Create and serve production build

`gatsby build`

`gatsby serve`

## Screenshot (base Lumen install)

![Lumen screenshot](http://i.imgur.com/422y5GV.png)

## License

The MIT License (MIT)

Copyright (c) 2016-2018 Alexander Shelepenok

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.