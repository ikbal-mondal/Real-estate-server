const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;
// middle were
// app.use(cors());
const corsConfig = {
    origin: '*',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}
app.use(cors(corsConfig))
app.options("", cors(corsConfig))
app.use(express.json());



const { MongoClient, ServerApiVersion } = require('mongodb');
const uri =`mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0.2hvvjbz.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });




async function run(){
      
   

    try{
  
      

    }
    finally{

    }

}
run().catch(error => console.log(error));


app.get('/', async(req,res) => {
    res.send('Real estate server is running');
    
})

app.listen(port, () => {
    console.log('Real estate running on ' + port);
})



module.exports = app;