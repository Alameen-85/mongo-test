const { MongoClient, ServerApiVersion } = require('mongodb');

// Correct URI with URL-encoded password
const uri = "mongodb+srv://Alameen85_db_user:Damaturu85%21@myfirstcluster.tueykk9.mongodb.net/?retryWrites=true&w=majority&appName=MyFirstCluster";

// Create a MongoClient with options to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server
        await client.connect();

        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("✅ Pinged your deployment. Connected successfully!");
    } finally {
        // Ensures that the client will close when finished/error
        await client.close();
    }
}

run().catch(console.dir);
