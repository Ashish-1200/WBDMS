const express = require('express');
const router = express.Router();
//const checkAuth= require('../middleware/authcheck')
const IntendedProjectController = require('../controllers/intendedprojects');
const multer = require('multer');
//const Intendedprojects = require('../models/intendedprojects.m');

const storage = multer.diskStorage({
  destination:(req,file,cb) =>{
    cb(null,'../uploads');
  
  },
  filename:function(req,file,cb){
    cb(null,file.originalname)

  }

});




const fileFilter =(req,file,cb)=>{
  //reject a file
  if(file.mimetype === 'image/jpg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpeg' || file.mimetype === 'application/pdf' || file.mimetype === 'application/msword' || file.mimetype === 'video/mp4'|| file.mimetype === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
    cb(null,true);
  }else
  { cb(null,false);}

}; 



 //Set up multer middleware
const upload = multer({
  storage: storage,
  
  limits: {
    fileSize: 1024 * 1024 * 5 // Limit file size to 5 MB
  },
  fileFilter: fileFilter
});



// Get a list of all intended projects
router.get('/list', IntendedProjectController.getIntendedProjects);

// Get a specific intended project by ID
router.get('/:id', IntendedProjectController.getIntendedProject);

// Create a new intended project
router.post('/create', upload.array('mediaFiles') , IntendedProjectController.createIntendedProject);

// Update an intended project by ID
router.put('/:update', IntendedProjectController.updateIntendedProject);

// Delete an intended project by ID
router.delete('/:IPReportID', IntendedProjectController.deleteIntendedProject);

module.exports = router;