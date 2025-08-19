const mongoose = require('mongoose');

const main =async () =>{
    await mongoose.connect('mongodb://localhost:27017/e_commorce');
    
    // for one schema
    // schema of mongoose
    // const ProductSchema = new mongoose.Schema({
    //     name : String
    // })

    // // model of mongoose
    // const ProductModel = mongoose.model('product', ProductSchema);
    // let data = new ProductModel({name : "m10"});


    // multiple schema
    const ProductSchema = new mongoose.Schema({
        name : String,
        brand : String,
        price : Number
    });
    const ProductModel = mongoose.model('product', ProductSchema);
    let data = new ProductModel({name : "iPhone 15", brand : "Apple", price : 150000});
    
    let result = await data.save();
    console.log(result);
}

// main();

const updateInDB = async () => {
    const ProductModel = mongoose.model('product', ProductSchema);
    let result = await ProductModel.updateOne(
        { name: "iPhone 15" }, // filter    
        { $set: { price: 140000 } } // update operation
    );
    console.log(result);
}

// updateInDB().catch(err => console.error(err));


const deleteFromDB = async () => {
    const ProductModel = mongoose.model('product', ProductSchema);
    let result = await ProductModel.deleteOne(
        { name: "iPhone 15" } // filter
    );
    console.log(result);
}
// deleteFromDB().catch(err => console.error(err)); 



const findInDB = async () => {
    const ProductModel = mongoose.model('product' );
    let result = await ProductModel.find({name : "iphone 15"}); // find all products
    console.log(result);
}

findInDB().catch(err => console.error(err));