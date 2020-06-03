// Imports
const lowdb = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("database.json");
const db = lowdb(adapter);


exports.initDatabase = () => {
  const dbInitiated = db.has("products").value();
  if (!dbInitiated) {
    db.defaults({ products: [], cart: [] }).write();
  }
};
