const express = require('express');
const router = express.Router();
const multer = require('multer');
const checkAuth= require('../middleware/authcheck')
const PoliciesController = require('../controllers/Policies');


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




router.get('/list', PoliciesController.getAllPolicies);
router.get('/:id', PoliciesController.getPolicy);
router.post('/create', upload.array('mediaFiles'), upload.single('policiesDocument'), PoliciesController.createPolicy);
router.patch('/:updater',  PoliciesController.updatePolicy);
router.delete('/:PReportID', PoliciesController.deletePolicy);

module.exports = router;