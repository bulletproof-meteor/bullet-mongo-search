Meteor.publish('getEntries', function(searchText) {
  if(searchText) {
    return Entries.find({$text: {$search: searchText}}, {limit: 20});
  } else {
    return Entries.find({}, {sort: {name: 1}, limit:20});
  }
});

Meteor.methods({
  addEntry: function(name, phoneNo) {
    Entries.insert({name: name, phoneNo: phoneNo});
  }
});