const dotenv = require('dotenv')
dotenv.config()
const multer = require('multer');
const multerS3 = require('multer-s3');
const s3 = require("../Config/aws-s3")

// // Set up multer and multer-s3
const upload = multer({
    storage: multerS3({
      
        s3: s3,
        acl: 'public-read',
        bucket: process.env.AWS_BUCKET_NAME, 
        key: function (req, file, cb) { 
            cb(null, Date.now().toString() + '-' + file.originalname);
        },
    }),
    limits: { fileSize: 70 * 1024 * 1024 }, // Limit file size to 50 MB,
});
module.exports = upload