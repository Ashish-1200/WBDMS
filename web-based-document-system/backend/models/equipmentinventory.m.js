const mongoose = require("mongoose");
const equipmentinventorySchema = new mongoose.Schema({

_id: mongoose.Schema.Types.ObjectId,


DepartmentName: {
type: String,
required: true
},

Project: {
type: String,
required: true
},

DateOfProject: {
type: String,
required: true
},

EquipmentDescription: {
type: String,
required: true
},

SerialNo: {
type: String,
required: true
},

DateAcquired: {
type: String,
required: true
},

CostOfEquipment: {
type: String,
required: true
},

description: {
    type: String,
    required: true
    },


    dateuploaded:{
      type:Date,
          default: () => Date.now(),
  },
  
  commentbox: {
      type: String,
       required: null
      },
   
   
      allMedia:Buffer,
       mediaFiles:{
         type:[String]
   },
    version: {
        type: Number,
        default: 1
      },


    });
equipmentinventorySchema.pre('save', function(next) {
    this.version++;
    next();
  });

module.exports = mongoose.model("equipmentinventory", equipmentinventorySchema);