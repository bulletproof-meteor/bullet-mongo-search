Entries = new Mongo.Collection('entries');
Entries._ensureIndex({ name: "text" });