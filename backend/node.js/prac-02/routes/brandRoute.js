const express = require('express');//import express
const app = express.Router(); //crreate a route obj using express
const upload = require('../config/brandMulter');
const {index,store, getById,updateById,deleteById} = require('./../controllers/brandController');


app.get('/', index);
app.post('/store',upload.single('logo') ,store);
app.get('/:id', getById);
app.post('/update/:id',upload.single('logo'),updateById);
app.delete('/delete/:id', deleteById);


module.exports = app;




