var mochi = require('mochi')
var ndarray = require('ndarray')
var testGif = require('fs').readFileSync(__dirname + '/testGif.datauri').toString()
var testJpeg = require('fs').readFileSync(__dirname + '/testJpeg.datauri').toString()
var testPng = require('fs').readFileSync(__dirname + '/testPng.datauri').toString()
var assert = require('assert')

describe('data-uri-to-ndarray', function () {
  var dataUriToNdarray = require('../')
  
  it('parses gifs', function (done) {
    dataUriToNdarray(testGif, function (er, array) {
      assert(er == null)
      array.shape.slice().length.should.equal(3)
      done()
    })
  })
  it('parses jpegs', function (done) {
    dataUriToNdarray(testJpeg, function (er, array) {
      assert(!er, er)
      array.shape.slice().length.should.equal(3)
      done()
    })
  })
  it('parses pngs', function (done) {
    dataUriToNdarray(testPng, function (er, array) {
      assert(!er, er)
      array.shape.slice().length.should.equal(3)
      done()
    })
  })
})