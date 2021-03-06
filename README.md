# SUSY-Editor

Editor talking to [data.transformap.co](https://github.com/TransforMap/data.transformap.co) API.

Its live instance is here: https://susy-partners.github.io/transformap-editor/

It is a fork from the [TransforMap Editor](https://github.com/transformap/transformap-editor).

## Usage

You can do the following things:

* Edit an existing place: call it with the `?place=UUID` parameter, see example:
https://susy-partners.github.io/transformap-editor/?place=e98fb9126657fd09e8c7e43217000e20
* Add a new place: leave the UUID out, it will generate one on upload.

To move the coordinates on the map, click “Edit Layers” in the bottom left corner, and drag the pin.

To initially set coordinates, click “Draw a marker” in the bottom left corner.


## Installation

* clone this repository.
* npm install

    git clone https://github.com/susy-partners/transformap-editor.git
    npm install

## Development

git checkout master
start the watching daemon: `brunch watch --server -n`

# deployment to gh-pages

* save the contents of the 'public' - folder
* git checkout gh-pages
* cp -ra public/\* .
* git add
* git push

## Development

Start a watching daemon with `npm run watch`

### Isolation mode

The development server instance can be started in an "isolated mode" where certain AJAX calls (See /app/test/intercept_ajax.js) are mocked for testing purposes.

In order to start the daemon in isolation mode specify the `local` environment: `brunch watch --server --env local`

### Lint

Please run the linter after developing a feature:

`npm run lint`

If you want to automatically fix the most common things:

`npm install standard --global`

and run it:

    cd app/
    standard --fix

# Deployment

## Production environment

* save the contents of the 'public' - folder
* git checkout gh-pages
* cp -ra public/\* .
* in the index.html, change the absolute links ("/app.css", …) to relative ones, remove the slash.
* git add
* git push

## Staging environment

If you are integrating feature branches into `staging`, run:

  `npm run deploy transformap-editor.apps.allmende.io` or `npm run deploy transformap-editor.apps.allmende.io <name_of_branch>`

If you intend to push another branch, feel free to invoke the deploy script manually as follows:

  `./scripts/deploy $upstream $branch $repo`

### Unit & Integration tests

A series of test files can be found under /test as well as some fixtures used for testing purposes.

Run `npm test`
