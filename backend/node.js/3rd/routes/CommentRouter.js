const express = require('express');

const app = express.Router();
const {index,getById,store,updateById,deleteById} = require('../controller/CommentController');
const upload = require('../config/CommentMulter');


app.get('/', index);
app.get('/:id', getById);
app.post('/store',upload.single('img') ,store);
app.post('/update/:id', upload.single('img'),updateById);
app.delete('/delete/:id', deleteById);


module.exports = app;
