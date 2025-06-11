const express = require('express');//import express
const app = express.Router(); //crreate a route obj using express
const upload = require('../config/ProductMulter');
const {index,store, getById,updateById,deleteById} = require('./../controllers/ProductController');


app.get('/', index);
app.post('/store',upload.single('img') ,store);
app.get('/:id', getById);
app.post('/update/:id',upload.single('img'),updateById);
app.delete('/delete/:id', deleteById);


module.exports = app;




