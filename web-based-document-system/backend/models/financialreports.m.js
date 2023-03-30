const mongoose = require("mongoose");

const financialreportsSchema = new mongoose.Schema({
_id: mongoose.Schema.Types.ObjectId,


departmentName: {
type: String,
required: true,
},

period: {
type: String,
required: true,
},

incomeSection: {
type: String,
required: true,
},

incomeDate: {
    type: String,
    required: true,
    },

totalIncome: {
type: String,
required: true,
},

expenditureSection: {
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


financialreportsSchema.pre('save', function(next) {
    this.version++;
    next();
  });

module.exports = mongoose.model("financialreports", financialreportsSchema)