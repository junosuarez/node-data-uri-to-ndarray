var parseDataUri = require('parse-data-uri')
var ndarray = require('ndarray')
var handleGif = require('./handleGif')
var handleJpeg = require('./handleJpeg')
var handlePng = require('./handlePng')

function dataUriToNdarray (dataUri, cb) {

  var parsed = parseDataUri(dataUri)

  switch (parsed.mimeType) {
    case "image/gif":
      return handleGif(parsed.data, cb)
    case "image/jpeg":
      return handleJpeg(parsed.data, cb)
    case "image/png":
      return handlePng(parsed.data, cb)
    case "image/bmp":
    default:
      setImmediate(function () {
        cb(new Error('unsupported format'))
      })
  }

}


module.exports = dataUriToNdarray