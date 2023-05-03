const express = require("express");
const moment = require("moment");

const { MongoClient } = require("mongodb");
const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

const app = express();
const port = 3000;

const dbName = "Latihan";

async function main() {
  await client.connect();
  console.log("Berhasil terhubung");
  const db = client.db(dbName);
  const collection = db.collection("Users");

  // the following code examples can be pasted here...

  return "done.";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());

app.listen(port, () =>
  console.log(`Server running at http://localhost:${port}`)
);
