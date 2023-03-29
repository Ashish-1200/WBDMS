const mongoose = require("mongoose");

const incidentreportsSchema = new mongoose.Schema({
   
    
_id: mongoose.Schema.Types.ObjectId,

department: {
    type: String,
    required: null
    },

firstName: {
type: String,
required: true
},

lastName: {
type: String,
required: true
},

gender: {
type: String,
required: true
},

age: {
type: Number,
required: true
},

address: {
type: String,
required: true
},

dateOfIncident: {
type: String,
required: true
},

location: {
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

   IncidentPicture:Buffer,
   productImage:{
     type:[String]
},


version: {
    type: Number,
    default: 1
  },

  
  


  
});


incidentreportsSchema.pre('save', function(next) {
    this.version++;
    next();
  });

module.exports = mongoose.model("incidentreports", incidentreportsSchema);