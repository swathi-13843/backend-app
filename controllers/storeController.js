<<<<<<< HEAD
import productModel from "../models/productModel.js";

const showProducts = async (req,res) => {
    const products = await productModel.find();
    

    res.render("store/products",{products});
}

=======
import productModel from "../models/productModel.js";

const showProducts = async (req,res) => {
    const products = await productModel.find();
    

    res.render("store/products",{products});
}

>>>>>>> dc3db8719a2fef1dbcd15cab215eb9aec4a6a66f
export {showProducts}