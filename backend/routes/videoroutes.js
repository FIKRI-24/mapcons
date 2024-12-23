const express = require('express');
const router = express.Router();
const videoController = require('../controller/videocontroller.js'); // Pastikan path sesuai
const upload = require('../midelwares/uploads.js'); 

// Menambahkan video baru
router.post('/videos', upload.fields([
    { name: 'sampul_video', maxCount: 1 }, 
    { name: 'video_file', maxCount: 10 }
]), videoController.createVideo);

// Mendapatkan semua video
router.get('/videos', videoController.getAllVideos);

// Mendapatkan video berdasarkan ID
router.get('/videos/:id_video', videoController.getDetailVideo);

// Mengedit video
router.put('/videos/:id_video', upload.fields([
    { name: 'sampul_video', maxCount: 1 }, 
    { name: 'video_file', maxCount: 10 }
]), videoController.updateVideo);

// Menghapus video
router.delete('/videos/:id_video', videoController.deleteVideo);

router.post('/videos/:id_video/videoFiles', upload.single('video_file'), videoController.addVideoFile);


module.exports = router;
