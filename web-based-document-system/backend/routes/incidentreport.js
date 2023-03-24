const express = require('express');
const router = express.Router();
const multer = require('multer');
const checkAuth= require('../middleware/authcheck');
const IncidentReportController = require('../controllers/Incidentreport');
const IncidentReport = require('../models/incidentreports.m');
const cors = require('cors');
const  application  = require('express');
const path = require("path");

const fs = require("fs");
//const incidentreport = require('../models/incidentreports.m');

// Set up multer storage for file uploads
/* const storage = multer.diskStorage({
   destination: (req, file, cb) => {
    cb(null, './web-based-document-system/uploads');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});*/

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
  if(file.mimetype === 'productImage/jpg' || file.mimetype === 'productImage/png'| file.mimetype === 'productImage/.jpeg'){
    cb(null,true);
  }else
  { cb(null,false);}

}; 

/*const fileFilter=(req, file, cb)=>{
  if(file.mimetype ==='image/jpeg' || file.mimetype ==='image/jpg' || file.mimetype ==='image/png' || file.mimetype === 'application/pdf'|| file.mimetype === 'application/msword'){
      cb(null,true);
  }else{
      cb(null, false);
  }
 } 
*/

 //Set up multer middleware
const upload = multer({
  storage: storage,
  
  limits: {
    fileSize: 1024 * 1024 * 5 // Limit file size to 5 MB
  },
  fileFilter: fileFilter
});


//const upload = multer({ storage: storage, fileFilter: fileFilter });





// Define routes for incident reports
router.get('/list', IncidentReportController.incidentreport_list);                 //Get incident reports

router.get("/:id", IncidentReportController.get_single_incident_report);
router.put("/:update", IncidentReportController.update_incident_report);
router.delete('/:id', checkAuth,IncidentReportController.incidentreport_delete_one);    // Delete reports
router.post('/create',multer({storage:storage}).array('productImage'), IncidentReportController.create_incident_report);


module.exports = router;
//module.exports = upload;

