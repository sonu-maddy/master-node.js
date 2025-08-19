// NodeJS/mongo.js
// This code snippet demonstrates how to import the MongoDB client in Node.js.
//const {MongoClient} = require('mongodb');
const MongoClient = require('mongodb').MongoClient;

const databaseName = 'e_commorce'; // Database name
const collectionName = 'product'; // Collection name

 
const url = 'mongodb://localhost:27017'; // Connection URL

const client = new MongoClient(url);
async function connectToMongoDB() {
    let result = await client.connect();

    // let db =result.db('e-commorce');
    // let collection = db.collection('products');

    let db = result.db(databaseName);
    return db.collection(collectionName);

    // let collection = db.collection(collectionName);
    // console.log('Connected to MongoDB');
    // console.log(collection.find({}).toArray()); ----here return the promise
    // let response = await collection.find({}).toArray(); // -- handle the promise using await
    // console.log(response);
}

// connectToMongoDB();

// console.warn(connectToMongoDB());

 module.exports = connectToMongoDB; // Export the function to use it in other files -- insert.js file

 // this code connects to a MongoDB database using the MongoDB Node.js driver. and call in this fuction..
 connectToMongoDB().then((resp) => {
        // console.log(resp.find({}).toArray()); ------ return promicse again becouse find() returns a cursor and toArray() returns a promise

        // now we can use await to handle the promise or use then() to handle the promise
        resp.find({}).toArray().then((data) => {
          //  console.log(data); // Print the retrieved documents
        })
    });

    // .catch(err => console.error('Connection failed', err))
    // .finally(() => client.close()); 


    // -------------------------same thing using async/await-------------------//
    const main = async () => {
        let data = await connectToMongoDB();
        data = await data.find().toArray();
        console.log(data); 

    }
    main().catch(err => console.error('Error:', err))

    

// Ensure the client is closed after operations
// Note: Make sure MongoDB is running on your local machine or adjust the URL accordingly.
// This code connects to a MongoDB database, retrieves all documents from a specified collection, and
// prints them to the console. It also handles connection errors and ensures the client is closed after operations.
// You can run this code using Node.js to see the output of the documents in the specified
// collection.
