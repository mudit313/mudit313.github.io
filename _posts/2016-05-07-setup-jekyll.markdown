---
title: Setup Jekyll for my Github Page
date: 2016-05-07 15:04:23 Z
categories:
- installation
tags:
- jekyll
---

To build my Github's page, I forked [jekyll-uno][jekyll-gh]. It's  easy to write posts with markdown and is integrated with Github Pages [name.github.io].

During installation, I have encountered some issues, which extremely frustrating and take much time to find out what is wrong.
  
1. To make jekyll run locally, I must install all gem locally, which end up with some strange error, that libxml2 could not be found on my mac 

``` ruby
$ bundle install --path vendor/bundle
Using i18n 0.7.0
Using json 1.8.3
...
Using nokogiri-1.6.7.5

Gem::Installer::ExtensionBuildError: ERROR: Failed to build gem native extension.
libxml2 is missing.  Please locate mkmf.log to investigate how it is failing.
```

I use brew, so the solution is

``` ruby
$ bundle install
brew install libxml2 libxslt
brew link libxml2 libxslt --force
bundle config build.nokogiri --use-system-libraries --with-xml2-include=/usr/local/include/libxml2 --with-xml2-lib=/usr/lib/
bundle install
```

2. The first time I tried to run locally, I got hit with the following:

``` ruby
$ gem install jekyll-paginate
$ jekyll serve --watch
It looks like you don't have jekyll-paginate....

==> jekyll did not come up with some incorrect versions installed

$ bundle update
$ bundle exec jekyll serve --watch

==> It works
```



[jekyll-gh]:  https://github.com/joshgerdes/jekyll-uno
