const express = require('express');
const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const streamifier = require('streamifier');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router(); 

require('dotenv').config();

//cloudinary configuration

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

//Multer setup using memory storage
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });


router.post('/upload', protect, upload.single('image'), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: 'No file uploaded' });
        }

            //Function to upload image to Cloudinary
            const streamUpload = (fileBuffer) => {
                return new Promise((resolve, reject) => {
                    const stream = cloudinary.uploader.upload_stream(
                        { resource_type: 'image' },
                        (error, result) => {
                            if (result) {
                                resolve(result);
                            } else {
                                reject(error);
                            }
                        }
                    );
                    streamifier.createReadStream(fileBuffer).pipe(stream);
                });
            };
            
            //call the streamUpload function
            const result=await streamUpload(req.file.buffer);

            // Send the response with the image URL
            res.status(200).json({
                message: 'Image uploaded successfully',
                imageUrl: result.secure_url
            });
        

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
        
        
    }


})

module.exports = router;
