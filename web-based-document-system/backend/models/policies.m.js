const mongoose = require("mongoose");
const policiesSchema = new mongoose.Schema({

_id: mongoose.Schema.Types.ObjectId,



departmentName: {
type: String,
required: true,
},

Purpose: {
type: String,
required: true,
},

Terms: {
type: String,
required: true,
},

Scope: {
type: String,
required: true,
},

Limitations: {
type: String,
required: true,
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


module.exports = mongoose.model("policies", policiesSchema);