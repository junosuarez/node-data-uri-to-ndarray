# data-uri-to-ndarray
decode an image into an ndarray

[ndarray](https://npm.im/ndarray) is a data structure useful for manipulating bitmap images.

## usage
```js
var dataUriToNdarray = require('data-uri-to-ndarray')

var dataUri = 'data:image/jpeg;base64,231231...'

dataUriToNdarray(dataUri, function (err, array) {
  // do whatever you like
})

```


## api

###`dataUriToNdarray : (String, Callback<NDArray>) => void`
convert a dataUri string to an [ndarray](https://npm.im/ndarray)

**Returns** An ndarray of pixels in raster order having shape equal to `[rows, columns, channels]`.

**Note** For animated GIFs, a 4D array is returned with shape `[numFrames, height, width, 4]`, where each frame is a slice of the final array.


## installation

    $ npm install data-uri-to-ndarray


## running the tests

From package root:

    $ npm install
    $ npm test

Inspired by get-pixels by @mikolalysenko (and all of his work)

## contributors

- jden <jason@denizac.org>


## license

ISC. (c) MMXIV Mikola Lysenko with modifications by jden. See LICENSE.md
