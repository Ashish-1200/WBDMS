const mongoose = require('mongoose');
const IncidentReport = require('../models/incidentreports.m');

exports.incidentreport_list = function(req, res, next) {   //gets a list of all the documents in incident report 
  IncidentReport.find(function(err, incidentReports) {
    if (err) res.send(err);
    else res.status(200).json(incidentReports);
  });
};

exports.get_single_incident_report = function(req, res, next) {
  IncidentReport.findOne({ _id: req.params.id})
    .then(function(incidentReports) {
      console.log(incidentReports);
      return res.send(incidentReports);
    })
    .catch(function(err) {
      console.log(err);
      return res.send('Cannot find incident report.');
    });
};



exports.create_incident_report = function(req, res, next) {
  console.log(req.file);
  const incidentReport = new IncidentReport({
    _id: mongoose.Types.ObjectId(),
    UserID: req.body.UserID,
    //volunteerID: req.body.volunteerID,
    department: req.body.department,
    //publicID: req.body.publicID,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    gender: req.body.gender,
    age: req.body.age,
    address: req.body.address,
    dateOfIncident: req.body.dateOfIncident,
    location: req.body.location,
    description: req.body.description,
    //commentbox:req.body.commentbox,
    mediaFiles:req.files.map(mediaFiles=>mediaFiles.path)
  });

  
  incidentReport
    .save()
    .then(function(dbuser) {
      res.send(dbuser);
    })
    .catch(function(err) {
      res.send('Cannot create form');
    });
};









exports.update_incident_report = function(req, res, next) {
    const id = req.params.update;
    IncidentReport.updateOne({ _id: id },
    {
    
    $set: {
    firstName:req.body.firstName,
    lastName:req.body.lastName,
    department: req.body.department,
    gender:req.body.gender,
    age:req.body.age,
    address:req.body.address,
    dateOfIncident:req.body.dateOfIncident,
    location:req.body.location,
    description:req.body.description,
   dateuploaded:req.body.dateuploaded,
   commentbox:req.body.commentbox,

    }
    }
    )
    .exec()
    .then(function(incidentReport) {
    return res.send(incidentReport);
    })
    .catch(function(err) {
    return res.send('Cannot update incident report');
    });
    };
    
    

    exports.incidentreport_delete_one = function(req, res, next) {
      console.log('Incident Report ID:', req.params.incidentReportID); // log the value here
      IncidentReport.deleteMany({ _id: req.params.incidentReportID })
        .exec()
        .then(result => {
          console.log(result);
          res.status(200).json({
            message: 'Incident report deleted!'
          });
        })
        .catch(err => {
          console.log(err);
          res.status(500).json({
            error: err
          });
        });
    };
    
    exports.updateform = async (req, res) => {
      const id = req.params.id;
      const version = req.body.version;
      const newIncidentReport = new IncidentReport({
        ...req.body,
        _id: mongoose.Types.ObjectId(),
        version: version + 1,
        lastEditedBy: req.user.username, // assuming you have authentication middleware that sets the user object on the request
      });
      try {
        const originalIncidentReport = await IncidentReport.findOne({ _id: id, version: version });
        if (!originalIncidentReport) {
          return res.status(404).send('Incident report not found');
        }
        await newIncidentReport.save();
        res.send('Incident report updated');
      } catch (error) {
        console.error(error);
        res.status(500).send('Internal server error');
      }
    };
    