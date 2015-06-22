'use strict';

var Command = require('ember-cli/lib/models/command');

module.exports = Command.extend({
  name: 'extract-translations',
  description: 'Extracts translatable strings from templates and js files.',
  works: 'everywhere',

  availableOptions: [
    { output: 'Output file', type: String, name: 'output file', default: 'locale/en.po' }
  ],

  aliases: ['xtrans'],
  run: function(options) {
    console.log('Extracting....');
  }
});


