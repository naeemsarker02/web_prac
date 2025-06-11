const db = require('../models'); //import database models
const Category = db.Category; //extract Category model from db
const Product = db.Product;

const index = async(req, res)=>{
    try{
        const data = await Category.findAll(    ); //fetches all categories from the database
        res.json(data);
    }catch(err){
        console.error(err);
        res.status(500).json({massage:'internal server error!!!'});
    }
};


const store = async(req, res)=>{
    try{
        const data = await Category.create(req.body); //creates a new Category and take data from req body
        res.json(data);
    }catch(err){
        console.error(err);
        res.status(500).json({massage:'internal server error!!!'});
    }
};

const getById = async(req, res)=>{
    try{
        const {id} = req.params;
        const data = await Category.findByPk(id);

        if(data){
            res.json(data);
        }else{
            res.status(404).json({massage: 'category not found'});
        }
    }catch(err){
        console.error(err);
        res.status(500).json({massage: 'internal server error'});
    }
};



const updateById = async(req, res)=>{
    try{
        const {id} = req.params;
        const data = await Category.findByPk(id);

        if(data){
            const updatedData = await data.update(req.body);
            res.json(updatedData);
        }else{
            res.status(404).json({massage: 'category not found!!'});
        }
    }catch(err){
        console.error(err);
        res.status(500).json({massage: 'internal server error'});
    }
};

const deleteById = async(req, res)=>{
    try{
        const {id} = req.params;
        const data = await Category.findByPk(id);

        if(data){
            await data.destroy();
            res.json({massage:'category deleted sucessfully!!'});
        }else{
            res.status(404).json({massage: 'category not found !!'});
        }
    }catch(err){
        console.error(err);
        res.status(500).json({massage: 'internal server error!'});
    }
}


module.exports = {index, store, getById, updateById, deleteById}; //exprots all func to use in routes







