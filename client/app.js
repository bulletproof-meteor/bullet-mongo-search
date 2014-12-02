AddEntry = function(name, phoneNo) {
  Meteor.call('addEntry', name, phoneNo);
};

Template.app.events({
  "click #search-button": function(event) {
    var searchText = $('#search-box').val();
    Session.set('searchText', searchText);
  },

  "keyup #search-box": _.throttle(function(ev) {
    var searchText = $('#search-box').val();
    Session.set('searchText', searchText);
  }, 1000)
});

Template.app.helpers({
  entries: function() {
    return Entries.find();
  },

  entryCount: function() {
    return Entries.find().count();
  }
});

Template.app.rendered = function() {
  Session.set('searchText', '');
};

Tracker.autorun(function() {
  var searchText = Session.get('searchText');
  Meteor.subscribe('getEntries', searchText);
});