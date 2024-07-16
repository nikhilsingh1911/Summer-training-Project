const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");

//middleware
app.use(cors());
app.use(express.json());

// qyXUGQ4k8BoaNgAi

//mongodb config
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri =
  "mongodb+srv://book-store-app:qyXUGQ4k8BoaNgAi@cluster0.elzknoi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    //create a collection for the data of documents
    const booksCollect = client.db("BookInventoryCollect").collection("book");

    //insert a new book to the database.
    // using post method
    //post method

    app.post("/upload-book", async (req, res) => {
      const data = req.body;
      const result = await booksCollect.insertOne(data);
      res.send(result);
    });

    // get all the books from the data base
    app.get("/all-books", async (req, res) => {
      const books = booksCollect.find();
      const result = await books.toArray();
      res.send(result);
    });

    // update a book data: patch or update methods
    app.patch("/book/:id", async (req, res) => {
      const id = req.params.id;

      console.log(id);

      const updateBkData = req.body;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };

      const updateDoc = {
        $set: {
          ...updateBkData,
        },
      };

      //update

      const result = await booksCollect.updateOne(filter, updateDoc, options);

      res.send(result);
    });

    //delete a book data
    app.delete("/book/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = await booksCollect.deleteOne(id);

      res.send(result);
    });

    //find data by filtering it
    app.get("/all-books", async (req, res) => {
      let query = {};
      if (req.query?.category) {
        query = { category: req.query.category };
      }

      const result = await booksCollect.find(query).toArray();
      res.send(result);
    });

    //to get single book data
    app.get("/book/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = await booksCollect.findOne(filter);

      res.send(result);
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    //  await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Hello World! This is nikhil");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
