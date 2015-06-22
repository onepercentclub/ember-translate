module.exports = {
  name: 'ember-translate',
  includedCommands: function() {
    return {
      'extract-translations': require('./lib/commands/extract-translations')
    }
  }
};

