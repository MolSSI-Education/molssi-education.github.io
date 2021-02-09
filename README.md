# 2019 MolSSI Education Website

This repo contains files for a website for MolSSI Education (for summer schools or things like that.)

This website is built with [Jekyll](https://jekyllrb.com/) uses the `minima` theme.

## Getting Started

To run this website locally,
1. Install Jekyll following the [instruction](https://jekyllrb.com/docs/installation/)
2. Command `gem install jekyll bundler` will find all the dependencies in Gemfile and install them. Make sure to run them before build.
3. Run `bundle exec jekyll serve` in terminal. It builds the website and runs it on a local web server at `http://localhost:4000`, rebuilding the site any time you make a change.


## Resources Management

Resources page will automatically retrieve the data from _data folder. Each category (tab) has a `.yml` file. Assuming all the resources links have "https://education.molssi.org/" as domain except for the external resouces, to add a new resource, go to the file accordingly and add a key/value pairs in yml format. Only the relative path needs to be added as link value. For external resource, full link needs to be added as full-link value.

## Events Management

To add a event, find _events folder and create a new file.

For each event, be sure have `title`, `location`, `expires` (YYYY-MM-DD), `event_date` (format doesn't matter, this part is read as text), and boolean value `repeated`