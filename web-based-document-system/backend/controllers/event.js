const mongoose = require ('mongoose')
const EventModel = require('../models/event.m')

exports.getEventList = function(req, res, next) {
EventModel.find(function(error, eventList) {
if(error) {
res.send(error);
} else {
res.send({ status: 200, count: eventList.length, eventList: eventList });
}
});
}



exports.createEvent = function(req, res) {
    
    const newEvent = new EventModel({

        _id: mongoose.Types.ObjectId(),
        eventName: req.body.eventName,
        eventDes: req.body.eventDes,
        eventDate: req.body.eventDate,
        department: req.body.department,
        mediaFiles:req.files.map(mediaFiles=>mediaFiles.path)

    });
newEvent.save()
.then(savedReport => res.send(savedReport))
.catch(error => console.log(error));
};




exports.getEvent = function(req, res, next) {
EventModel.findOne({ _id: req.params.id })
.then(function(foundEvent) {
res.send(foundEvent);
})
.catch(function(error) {
res.send("Event not found.");
});
}



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
    EventModel.updateOne(
    { _id: id },
    {
    $set: {
        
        eventName:req.body.eventName,
        eventDes:req.body.eventDes,
        eventDate:req.body.eventDate,
        commentbox:req.body.commentbox,
    }
    }
    )
    .exec()
    .then(function(EventModel) {
    return res.send(EventModel);
    })
    .catch(function(err) {
    return res.send('Cannot update event report');
    });
    };
    