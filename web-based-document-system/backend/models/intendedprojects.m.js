const mongoose = require("mongoose");

const IntendedProjectsSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
 
  ProjectTitle: {
    type: String,
    required: true,
  },
  ProjectDescription: {
    type: String,
    required: true,
  },
  ProjectBudget: {
    type: String,
    required: true,
  },
  ProjectStartDate: {
    type: String,
    required: true,
  },
  ProjectEndDate: {
    type: String,
    required: true,
  },
  ProjectStatus: {
    type: String,
    required: true,
  },

  expenditureDate: {
    type: String,
    required: true,
  },
  totalExpenditure: {
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

module.exports = mongoose.model("intendedprojects", IntendedProjectsSchema);
