import express from 'express';
import mongoose from 'mongoose';
import Cors from 'cors';
import cards from './dpCard.js'



const app = express();
const port = process.env.PORT || 8001;
const uri = process.env.ATLAS_URI;

app.use(express.json())
app.use(Cors());

mongoose.connect(connection_url, {
    useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true 
})
const connection = mongoose.connection;
connection.once('open',() =>{
    console.log("MongoDB database connection established succcessfully");
})


app.get('/',(req, res) =>{
    res.status(200).send("Hellooo");
});
app.post('/tinder/card',(req,res) =>{
    const dbCard = req.body;

    cards.create(dbCard,(err,data) =>{
        if(err){
            res.status(500).send(err)
        }else {
            res.status(201).send(data)
        }
    })
});

app.get('/tinder/card',(req,res) =>{


    cards.find((err,data) =>{
        if(err){
            res.status(500).send(err)
        }else {
            res.status(200).send(data)
        }
    })
});

 

app.listen(port,() => console.log(`listening ${port}`));