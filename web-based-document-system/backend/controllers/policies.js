const mongoose = require('mongoose');
const Policy = require('../models/policies.m');

exports.getAllPolicies = (req, res) => {
  Policy.find({})
    .then(docs => res.status(200).json(docs))
    .catch(error => console.log(error));
};

exports.getPolicy = (req, res) => {
  Policy.findOne({ _id: req.params.id })
    .then(doc => res.send(doc))
    .catch(error => console.log(error));
};

exports.createPolicy = (req, res) => {
  const newPolicy = new Policy({
    _id: mongoose.Types.ObjectId(),
   
    departmentName: req.body.departmentName,
    Purpose: req.body.Purpose,
    Terms: req.body.Terms,
    Scope: req.body.Scope,
    Limitations: req.body.Limitations,
    
    mediaFiles:req.files.map(mediaFiles=>mediaFiles.path)
  });
  
  newPolicy.save()
    .then(savedPolicy => res.send(savedPolicy))
    .catch(error => console.log(error));
};


exports.updatePolicy = function(req, res, next) {
  const id = req.params.update;
  Policy.updateOne( { _id: id },
  {
  $set: {
  
    departmentName: req.body.departmentName,
    purpose: req.body.purpose,
    terms: req.body.terms,
    scope: req.body.scope,
    limitations: req.body.limitations,
    period: req.body.period,
    commentbox:req.body.commentbox
  }
  }
  )
  .exec()
  .then(function(dbPolicy) {
  res.send(dbPolicy);
  })
  .catch(function(err) {
  res.send('Cannot update Policy entry.');
  });
  };

exports.deletePolicy = function(req, res, next) {
  console.log('Policy ID:', req.params.PReportID); // log the value here
  Policy.deleteMany({ _id: req.params.PReportID })
    .exec()
    .then(result => {
      console.log(result);
      res.status(200).json({
        message: 'Policy report deleted!'
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
  };