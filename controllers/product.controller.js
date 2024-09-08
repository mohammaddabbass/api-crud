import Product from "../models/product.model.js";

const addProducts = async (req, res) => {
    try{
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

const getProducts = async (req, res) => {
    try{
        const products = await Product.find({});
        res.status(200).json(products);

    } catch(error) {
        res.status(404).send("No products are found")
    }
}

const getProduct = async (req, res) => {
    try{
        const{ id } = req.params;
        const product = await Product.findById(id);
        res.status(200).send(product);
    } catch (error) {
        res.status(404).send("No products are found")
    }
};

const editProduct = async (req, res) => {
    try{
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);

        if(!product) {
            returnres.status(404).send("Product not found");
        }

        const updatedProduct = await Product.findById(id);

        res.status(200).send(product);
    } catch (error) {
        console.log(error);
        res.status(404).send("Product not found");
    }
};

const deleteProduct = async (req, res) => {
    try{
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id);
        
        if(!product) {
            res.status(404).send("Product not found");
        }

        const products = Product.find();

        res.status(200).json({message: "Product deleted succefully"});

    } catch (error) {
        console.log(error);
        res.status(500).send({message: error.message});
    }
};

export {addProducts, getProducts, getProduct, editProduct, deleteProduct};