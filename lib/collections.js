Entries = new Mongo.Collection('entries');
if(Meteor.isServer) {
  Entries._ensureIndex({ name: "text" });
}