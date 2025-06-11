const express = require('express');
const app = express();
const dotenv= require('dotenv').config();
const port= process.env.PORT || 3000;
const userRouter= require('./routes/UserRouter');
const commentRouter= require('./routes/CommentRouter');
const postRouter= require('./routes/PostRouter');
const reactionRouter= require('./routes/ReactionRouter');

app.use(express.json());

app.use('/user', userRouter);
app.use('/comment', commentRouter);
app.use('/post', postRouter);
app.use('/reaction', reactionRouter);





app.listen(port, (err) => {
    if (err) 
    console.log(err);
    else {
        console.log(`Server is running on port ${port}`);
    }
}
);