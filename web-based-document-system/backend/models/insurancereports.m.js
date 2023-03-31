const mongoose = require("mongoose");

const insurancereportsSchema = new mongoose.Schema({

_id: mongoose.Schema.Types.ObjectId,



departmentName: {
type: String,
required: true
},

period: {
type: String,
required: true
},

projectDescription: {
type: String,
required: true
},



insuranceDate: {
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
 
 
 IncidentPicture:Buffer,
     mediaFiles:{
       type:[String]
 },
 
 version: {
     type: Number,
     default: 1
   },

   
});


module.exports = mongoose.model("insurancereports", insurancereportsSchema);