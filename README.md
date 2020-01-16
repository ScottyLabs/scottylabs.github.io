# The Scottylabs.org website.
<br>
<img width="419" alt="Screen Shot 2020-01-08 at 4 32 34 PM" src="https://user-images.githubusercontent.com/56605721/72017908-aa980880-3234-11ea-9641-af8887c3b929.png">
<br>

This is the main website of Scotty Labs. We're
using Jekyll on GitHub Pages.


## Installation

Make sure you have a recent version of Ruby installed and run

```console
$ gem install bundler
$ bundle install
```

If that failed, and you're on OS X, you might have to run this:

```
gem install nokogiri -- --with-xml2-include=/Applications/Xcode.app/Contents/Developer/Platforms/MacOSX.platform/Developer/SDKs/MacOSX10.11.sdk/usr/include/libxml2 --use-system-libraries
```

and then re-run `bundle install`.

Once you've done that, you can preview the site locally by running

```console
$ jekyll serve
```
If the above doesn't work, try running
```console
$ bundle exec jekyll serve
```

This will compile the static files, including all Sass assets. Then, in your
browser, navigate to <http://localhost:4000/> to view the generated site.


## I want to...

This is a typical Jekyll project. The [Jekyll documentation][jekyll] online is
really well put together; you should give it a skim. In the mean time, here's a
list of points where you might want to look:

### ... change the style of the site.

Since this is a Jekyll site, the repetitive content is pulled out into
_templates_. These files are located in `_includes/` and `_layouts/`. Altering
these files will alter all files based off of them. You can tell if a file is
based off another file if it includes the line `layout: <something>` or `{%
include <something> %}` somewhere inside it.

To change the stylesheets, you should look in `assets/css/`. Here' you'll see
that we're using Sass, which is a CSS preprocessor. This just means we're using
a language that compiles to CSS, instead of writing CSS directly. Look it up
online for more information. The `main.scss` file `@import`s the files which are
located in the folder `_sass/`. To change the styles, you'll want to change
the files located in there.

### ... add content to the site.

Any file or folder that doesn't start with an underscore will end up being a
web page visible to users. To add content, simply create a file that doesn't
have a leading underscore.

Jekyll allows you to write content using Markdown, a language that compiles to
HTML. You should probably use Markdown, not HTML, to create content. For an
example of how this is done, see the `frontend/` folder, which contains numerous
examples of using Markdown files to generate content. Feel free to use these
files as starting points for generating your own content.


## License

MIT License. See LICENSE. (c) 2015 ScottyLabs



[jekyll]: http://jekyllrb.com/
