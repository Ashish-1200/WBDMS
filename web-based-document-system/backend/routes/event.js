const express = require('express');
const router = express.Router();
const mongoose = require ('mongoose');
const EventModel = require('../models/event.m');
const EventController = require('../controllers/event');
const multer = require('multer');


//const incidentreport = require('../models/incidentreports.m');



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





//Get List of event reports
router.get('/list', EventController.getEventList);

//Creating  a new document within the collection
router.post('/create',upload.array('mediaFiles'), EventController.createEvent);

//Get event file
router.get('/:id', EventController.getEvent);

//Delete event
router.delete('/:eventID', EventController.deleteEvent);

router.put('/:update',  EventController.updateEvent);

module.exports = router;



