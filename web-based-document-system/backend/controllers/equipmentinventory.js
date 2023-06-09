const mongoose = require('mongoose');
const EquipmentInventory = require('../models/equipmentinventory.m');

exports.equipmentInventory_list = function(req, res, next) {
EquipmentInventory.find(function(err, equipmentInventoryResponse) {
if (err) res.send(err);
else res.status(200).send(equipmentInventoryResponse);
});
};

exports.equipmentInventory_get_one = function(req, res, next) {
EquipmentInventory.findOne({ _id: req.params.id })
.then(function(dbEquipment) {
res.send(dbEquipment);
})
.catch(function(err) {
res.send('Cannot find equipment information.');
});
};

exports.equipmentInventory_create = function(req, res, next) {
    console.log(req.file);
const equipmentinventory = new EquipmentInventory({
_id: mongoose.Types.ObjectId(),

DepartmentName: req.body.DepartmentName,
Project: req.body.Project,
DateOfProject: req.body.DateOfProject,
EquipmentDescription: req.body.EquipmentDescription,
SerialNo: req.body.SerialNo,
DateAcquired: req.body.DateAcquired,
CostOfEquipment: req.body.CostOfEquipment,
description: req.body.description,
    //commentbox:req.body.commentbox,
    mediaFiles:req.files.map(mediaFiles=>mediaFiles.path)
});

equipmentinventory.save().then(function(dbuser) {
res.send(dbuser);
})
.catch(function(err) {
res.send('Cannot create equipment entry.');
});
};


exports.equipmentInventory_update = function(req, res, next) {
const id = req.params.update;
EquipmentInventory.updateOne( { _id: id },
{
$set: {

  DepartmentName: req.body.DepartmentName,
  Project: req.body.Project,
  DateOfProject: req.body.DateOfProject,
  EquipmentDescription: req.body.EquipmentDescription,
  SerialNo: req.body.SerialNo,
  DateAcquired: req.body.DateAcquired,
  CostOfEquipment: req.body.CostOfEquipment,
  description: req.body.description,
commentbox:req.body.commentbox,
}
}
)
.exec()
.then(function(dbEquipment) {
res.send(dbEquipment);
})
.catch(function(err) {
res.send('Cannot update equipment entry.');
});
};



exports.equipmentInventory_delete_one = function(req, res, next) {
    console.log('EquipmentinventoryID:', req.params.equipmentID ); // log the value here
    EquipmentInventory.deleteMany({ _id: req.params.equipmentID  })
      .exec()
      .then(result => {
        console.log(result);
        res.status(200).json({
          message: 'Equipment Inventory report deleted!'
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
  };

