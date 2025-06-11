const db = require('../models'); //import database models
const Product = db.Product; //extract Product model from db
const Category = db.Category;
const Brand = db.Brand;

const index = async(req, res)=>{
    try{
        const data = await Product.findAll({
            include:[
                {model:Category, as:'category'},
                {model:Brand, as:'brand'}
            ]
        }); //fetches all categories from the database
        res.json(data);
    }catch(err){
        console.error(err);
        res.status(500).json({massage:'internal server error!!!'});
    }
};


const store = async(req, res)=>{
    try{
        const data = await Product.create(req.body); //creates a new Product and take data from req body
        res.json(data);
    }catch(err){
        console.error(err);
        res.status(500).json({massage:'internal server error!!!'});
    }
};

const getById = async(req, res)=>{
    try{
        const {id} = req.params;
        const data = await Product.findByPk(id);

        if(data){
            res.json(data);
        }else{
            res.status(404).json({massage: 'Product not found'});
        }
    }catch(err){
        console.error(err);
        res.status(500).json({massage: 'internal server error'});
    }
};



const updateById = async(req, res)=>{
    try{
        const {id} = req.params;
        const data = await Product.findByPk(id);

        if(data){
            const updatedData = await data.update(req.body);
            res.json(updatedData);
        }else{
            res.status(404).json({massage: 'Product not found!!'});
        }
    }catch(err){
        console.error(err);
        res.status(500).json({massage: 'internal server error'});
    }
};

const deleteById = async(req, res)=>{
    try{
        const {id} = req.params;
        const data = await Product.findByPk(id);

        if(data){
            await data.destroy();
            res.json({massage:'Product deleted sucessfully!!'});
        }else{
            res.status(404).json({massage: 'Product not found !!'});
        }
    }catch(err){
        console.error(err);
        res.status(500).json({massage: 'internal server error!'});
    }
}


module.exports = {index, store, getById, updateById, deleteById}; //exprots all func to use in routes







