Meteor.publish('getEntries', function(searchText) {
  return Entries.find({}, {sort: {name: 1}, limit:20});
});

Meteor.methods({
  addEntry: function(name, phoneNo) {
    Entries.insert({name: name, phoneNo: phoneNo});
  }
});