import express from 'express';
import mongoose from 'mongoose';



const app = express();
const port = process.env.PORT || 8001;
const uri = process.env.ATLAS_URI;

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

app.listen(port,() => console.log(`listening ${port}`));