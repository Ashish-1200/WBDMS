const mongoose = require("mongoose");
const eventSchema = new mongoose.Schema({

_id: mongoose.Schema.Types.ObjectId,

department: {
    type: String,
    required: null
    },


eventName: {
type: String,
required: true,
},

eventDes: {
type: String,
required: true,
},

eventDate: {
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
    productImage:{
      type:[String]
},

version: {
    type: Number,
    default: 1
  },

  lastEditedBy: {
    type: String,
    required: false
  },
})
  eventSchema.pre('save', function(next) {
    this.version++;
    next();
  });

module.exports = mongoose.model("event", eventSchema);