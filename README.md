# ScottyLabs-Website

This is the source for [scottylabs.org](http://scottylabs.org). It is compiled using [jekyll](https://github.com/mojombo/jekyll), and served on [GitHub Pages](https://pages.github.com).

## Development

You will need to install ruby (and jekyll) if you want to preview your changes locally. If you have never installed ruby before, I recommend installing it using [RVM](https://rvm.io) (Ruby Version Manager). Their [installation documentation](https://rvm.io/rvm/install/) may be useful. Make sure you install ruby version 1.9.3 (or greater). I also recommend creating a [gemset](https://rvm.io/gemsets/basics/) to ensure a development environment as close to production as possible.

Jekyll is a ruby gem (library). In ruby, gems are managed using [Bundler](http://gembundler.com/). To install bundler, run the command `gem install bundler` from your terminal after installing ruby. After this finishes, just run `bundle install` to install the rest of the gems.

To live preview your changes, run `jekyll --server` from the command line, and go to [http://localhost:4000/](http://localhost:4000/), where the site should be running locally. (It may take a minute or two for the server to start up, so wait until it says something like: [TIMESTAMP] INFO WEBrick::HTTPServer#start: pid=xxxx port=4000.)
