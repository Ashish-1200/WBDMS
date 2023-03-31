const express = require('express');
const router = express.Router();
const multer = require('multer');

const InsuranceController = require('../controllers/insurancereports');



// Set up multer storage for file uploads
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





// Get all insurance reports
router.get('/list', InsuranceController.getInsuranceReports);

// Create a new insurance report
router.post('/create',upload.array('mediaFiles'), InsuranceController.createInsuranceReport);

// Get a specific insurance report by ID
router.get('/:id', InsuranceController.getInsuranceReport);

// Update an existing insurance report by ID
router.put('/:update', InsuranceController.updateInsuranceReport);

// Delete an insurance report by ID
router.delete('/:IRReportID', InsuranceController.deleteInsuranceReport);

module.exports = router;