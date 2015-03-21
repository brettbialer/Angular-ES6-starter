var Builder = require('systemjs-builder'),
 path = require('path');

// load SystemJS config from file
var builder = new Builder();
builder.loadConfig('../client/src/app/system.config.js')
 .then(function() {
  // Change baseURL to match the file system
  builder.config({ baseURL: path.resolve('../client/src/app/') });

  // Build a self-executing bundle (ie. Has SystemJS built in and auto-imports the 'app' module)
  return builder.buildSFX('app', '../dist/bundle.js', { minify: false, sourceMaps: true});
 }).catch(function(err) {
  console.error(err);
 });