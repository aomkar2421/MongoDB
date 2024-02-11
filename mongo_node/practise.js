const {MongoClient} = require("mongodb")

const uri = "mongodb://127.0.0.1"

const client = new MongoClient(uri)

const main = async() =>{
    await client.connect();
    const db  = client.db("dummy1");
    const collection = db.collection("products")
    const data = await collection.find({ price : { $gt : 500 } }).toArray();
    console.log(data);
    return "done"
}

main()
.then(console.log("doneeeeeeeee"))
.catch(console.log("error") )
.finally(() => client.close() )