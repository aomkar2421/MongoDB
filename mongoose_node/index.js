const mongoose =  require("mongoose")

// const uri = "mongodb://127.0.0.1/dummy1"

const uri = "mongodb+srv://omkar1651:AOmkar1651@cluster0.vgolvbk.mongodb.net/dummy"

mongoose.connect(uri)

const sampleSchema = new mongoose.Schema({
    name : String,
    language : String,
    id : String,
    bio : String,
    version : Number,
})

const sample = new mongoose.model('sample' , sampleSchema);

const data1 = {
    "name": "Afzal Ghaffar",
    "language": "Sindhi",
    "id": "ENTOCR13RSCLZ6KU",
    "bio": "Aliquam sollicitudin ante ligula, eget malesuada nibh efficitur et. Pellentesque massa sem, scelerisque sit amet odio id, cursus tempor urna. Etiam congue dignissim volutpat. Vestibulum pharetra libero et velit gravida euismod.",
    "version": 1.88
  }

const main = async() =>{
    try {

        // // insert
        // await sample.create(data1);
        // console.log("Document inserted successfully!");

        //update
        // const upquery = await sample.findOneAndUpdate(
        //     {name : "Adeel Solangi"} , {$set :{version: 99}}
        // )

        //delete
        const dltquery = await sample.findOneAndDelete(
            {name : "Adeel Solangi"}
        )

        // display
        const data = await sample.find()
        console.log(data)
        
    } catch (e) {
        console.log(e)
    }
    finally{
        mongoose.connection.close();
    }
}

main();


