const express = require('express');

const app = express.Router();
const {index,getById,store,updateById,deleteById} = require('../controller/ReactionController');
const multer = require('multer');
const upload = multer();


app.get('/', index);
app.get('/:id', getById);
app.post('/store',upload.none() ,store);
app.post('/update/:id', upload.none(),updateById);
app.delete('/delete/:id', deleteById);


module.exports = app;
