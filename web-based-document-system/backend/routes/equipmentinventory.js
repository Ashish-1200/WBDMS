const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const EquipmentInventoryController = require('../controllers/Equipmentinventory')
const EquipmentInventory = require('../models/equipmentinventory.m')
const multer = require('multer')
const checkAuth= require('../middleware/authcheck')
const cors = require('cors');
const  application  = require('express');
const path = require("path");
const fs = require("fs");

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




// Get list of equipment
router.get('/list', EquipmentInventoryController.equipmentInventory_list)

// Get a specific equipment information
router.get('/:id', EquipmentInventoryController.equipmentInventory_get_one)

// Create a new equipment
router.post('/create', upload.array('productImage'),EquipmentInventoryController.equipmentInventory_create)

// Update an existing equipment
router.put('/:update', EquipmentInventoryController.equipmentInventory_update)

// Delete an equipment
router.delete('/:equipmentID', EquipmentInventoryController.equipmentInventory_delete_one)

module.exports = router;