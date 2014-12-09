Meteor.publish('getEntries', function(searchText) {
  if(searchText) {
    return Entries.find({$text: {$search: searchText}}, {limit: 20});
  } else {
    this.ready();
  }
});

Meteor.methods({
  addEntry: function(name, phoneNo) {
    Entries.insert({name: name, phoneNo: phoneNo});
  }
});