# Camo Link CLI

Use this tool to generate links for the Canvas camo server for debugging purposes.

## assumptions

you have node/io.js installed, the heroku command line installed, and access to the app `canvas-camo`
you can change the app name via the env var `APP_NAME`

specifically, if you can get the `CAMO_KEY` of your app via `heroku config:get CAMO_KEY -a $APP_NAME`,
we're in business.

## usage

    node camo-url.js <image url>

### example

    $ node camo-url.js http://i.imgur.com/tZOS8.gif
    https://canvas-camo.herokuapp.com/f2af12647a050df43f060e72225a9aeb50c1f265/?url=http%3A%2F%2Fi.imgur.com%2FtZOS8.gif
    https://canvas-camo.herokuapp.com/f2af12647a050df43f060e72225a9aeb50c1f265/687474703a2f2f692e696d6775722e636f6d2f745a4f53382e676966
