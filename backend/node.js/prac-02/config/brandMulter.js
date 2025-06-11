const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/brand'); 
    },
    filename: function (req, file, cb) {
        console.log(req.body.name);
        
        const customname = req.body.name + Date.now() + path.extname(file.originalname);
        cb(null, customname);
        req.body.logo = customname; 
    }
});

const upload = multer({
    storage: storage,
    limits: { fileSize: 5000000 },
});


module.exports = upload; 