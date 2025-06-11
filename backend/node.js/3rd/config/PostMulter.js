const multer = require('multer');
const path = require('path');


// Set storage config
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/post'); // folder to store uploads
    },
    filename: (req, file, cb) => {
        const customname = req.body.user_id +Date.now() + path.extname(file.originalname);
        cb(null, customname); // timestamp + extension
        req.body.img = customname; // save the filename in the request body for later use
    }
});

// Init upload middleware
const upload = multer({ storage: storage ,
    limits: { fileSize: 5000000 }
});


module.exports = upload; 


