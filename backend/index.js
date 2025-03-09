const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config();
const port = process.env.PORT || 7000;

const app = express();
app.use(cors());
app.use(express.json());
console.log(process.env.DB_USER);
console.log(process.env.DB_PASS);



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.lsdr1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;


const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
   
        await client.connect();
        const  teaCollection=client.db("teaStore").collection("tea");


        app.get('/tea/:id',async(req,res)=>{
            const id=req.params.id;
            const query={_id: new ObjectId(id)};
            const tea=await teaCollection.findOne(query);
            res.send(tea);
        })
        app.get('/tea',async(req,res)=>{
            const cursor=teaCollection.find();
            const tea=await cursor.toArray();
            res.send(tea);
        })

        app.post('/addtea',async(req,res)=>{
            const tea=req.body;
            console.log('tea collection',tea);
            const result=await teaCollection.insertOne(tea);
            res.send(result);
        })
        app.put('/updatetea/:id',async(req,res)=>{
            const id=req.params.id;
            const tea=req.body;
            const query={_id: new ObjectId(id)};
            const updateDoc={
                $set:{
                    name:tea.name,
                    price:tea.price,
                    quantity:tea.quantity
                }
            }
            const result=await teaCollection.updateOne(query,updateDoc);
            res.send(result);
        })

        app.delete('/tea/:id',async(req,res)=>{
            const id=req.params.id;
            const query={_id: new ObjectId(id)};
            console.log('delete',id);
            const result=await teaCollection.deleteOne(query);
            res.send(result);
        })
     
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
       
        // await client.close();
    }
}
run().catch(console.dir);



app.get('/', (req, res) => {
    res.send('Hello World');
})


app.listen(port, () => {
    console.log(`server is running at http://localhost:${port}`);
})