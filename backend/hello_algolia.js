// hello_algolia.js
const algoliasearch = require("algoliasearch");
// const connectDB = require('./db/connectDB')
// require('dotenv').config()
const formattedFields = require("./searchableFields");

// Connect and authenticate with your Algolia app
// const client = algoliasearch("E0JXMM1GM9", "18608950a6117d2a51c0c07027bf9d0a");

// Create a new index and add a record
// const index = client.initIndex("test_index");
// const record = fields
// index.saveObject(record).wait();

// Search the index and print the results
// index.search("test_record").then(({ hits }) => console.log(hits[0]));

const uploadData = async () => {
  try {
    // await connectDB(process.env.MONGO_URI)
    const fields = await formattedFields();
    // console.log(fields);
    const client = await algoliasearch(
      "3AVD8CQXQI",
      "1f48791e02c0cf984d71abdf9313cc61"
    );
    console.log("authenticated client");
    const index = await client.initIndex("courses");
    const record = fields;

    console.log("initiated index");
    // const record = fields;
    // console.log(record)
    await index
      .saveObjects(fields, { autoGenerateObjectIDIfNotExist: true })
      .wait();
    console.log("success");
    index.search("development").then(({ hits }) => console.log(hits));
  } catch (error) {
    console.log(error);
  }
};

uploadData();
