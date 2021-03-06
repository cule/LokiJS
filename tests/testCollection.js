// var Loki = require('../src/lokijs.js'),
//   gordian = require('gordian'),
//   suite = new gordian('testCollection');

describe('collection', function() {
  it('works', function() {
      function SubclassedCollection() {
        loki.Collection.apply(this, Array.prototype.slice.call(arguments));
      }
      SubclassedCollection.prototype = new loki.Collection;
      SubclassedCollection.prototype.extendedMethod = function () {
        return this.name.toUpperCase();
      }
      var coll = new SubclassedCollection('users', {});

      suite.assertEqual('Exposed Collection is not null', true, coll != null);
      suite.assertEqual('Exposed Collection methods work normally', 'users'.toUpperCase(), coll.extendedMethod());
      coll.insert({
        name: 'joe'
      });
      suite.assertEqual('Exposed Collection operations work normally', coll.data.length, 1);
  })
})

// suite.report();
