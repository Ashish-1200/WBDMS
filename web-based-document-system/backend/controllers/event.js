const mongoose = require ('mongoose')
const EventModel = require('../models/event.m')

exports.getEventList = (req, res) => {
  EventModel.find({})
    .then(docs => res.status(200).json(docs))
    .catch(error => console.log(error));
};


  exports.getEvent = (req, res) => {
    EventModel.findOne({ _id: req.params.id })
      .then(doc => res.send(doc))
      .catch(error => console.log(error));
  };


exports.createEvent = (req, res) => {
  const newEventReport = new EventModel({
    _id: mongoose.Types.ObjectId(),
    
        eventName: req.body.eventName,
        eventDes: req.body.eventDes,
        eventDate: req.body.eventDate,
        department: req.body.department,
        mediaFiles:req.files.map(mediaFiles=>mediaFiles.path)
  });
  
  newEventReport.save()
    .then(savedReport => res.send(savedReport))
    .catch(error => console.log(error));
};










exports.deleteEvent = function(req, res, next) {
    console.log('Event Report ID:', req.params.eventID); // log the value here
    EventModel.deleteMany({ _id: req.params.eventID })
      .exec()
      .then(result => {
        console.log(result);
        res.status(200).json({
          message: 'Event report deleted!'
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
  };







exports.updateEvent = function(req, res, next) {
    const id = req.params.update;
    EventModel.updateOne(  { _id: id },
    {
    $set: {
        department:req.body.department,
        eventName:req.body.eventName,
        eventDes:req.body.eventDes,
        eventDate:req.body.eventDate,
        commentbox:req.body.commentbox,
    }
    }
    )
    .exec()
    .then(function(dbEvent) {
    return res.send(dbEvent);
    })
    .catch(function(err) {
    return res.send('Cannot update event report');
    });
    };
    