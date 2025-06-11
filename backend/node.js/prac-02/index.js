const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const port = process.env.PORT || 4920;
const categoryRouter = require('./routes/categoryRoute');
const brandRouter = require('./routes/brandRoute');
const ProductRouter = require('./routes/ProductRouter');

app.use(express.json());


app.use('/category', categoryRouter);
app.use('/brand', brandRouter);
app.use('/product', ProductRouter);


app.listen(port, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`Server is running on port ${port}`);
    }});