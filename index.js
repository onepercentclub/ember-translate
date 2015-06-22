/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-translate'
};


includedCommands: function() {
  return {
    'extract-translations': require('./lib/cli')
  }
}
