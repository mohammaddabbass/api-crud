import express from 'express';
import mongoose from 'mongoose';
import Product from './models/product.model.js';
import bodyParser from 'body-parser';
import productRoute from './routes/product.route.js';
const app = express();

const port = process.env.PORT || 3000;

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// routes
app.use('/api/products', productRoute)


app.get('/', (req, res) => {
    res.send("hello from node api server");
});


mongoose
.connect('mongodb+srv://mohammadabbass0701:Xyj2dqGYeSkKxwcd@backenddb.kwrmu.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB')
.then(() => {
    console.log("Connected to database");
    app.listen(port, () => {
        console.log(`Running on port ${port}`)
    });
})
.catch(() => {
    console.log("Connection failed");
})