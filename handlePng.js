var pngparse = require('pngparse')
var ndarray = require('ndarray')

module.exports = function handlePNG(data, cb) {
  pngparse.parse(data, function(err, img_data) {
    if(err) {
      cb(err)
      return
    }
    cb(undefined, ndarray(new Uint8Array(img_data.data),
      [img_data.height|0, img_data.width|0, 4],
      [4*img_data.width|0, 4, 1],
      0))
  })
}