const mongoose = require('mongoose');
const IntendedProject = require('../models/intendedprojects.m');

exports.getIntendedProjects = (req, res, next) => {
  IntendedProject.find((err, intendedProjects) => {
    if (err) {
      return res.send(err);
    }
    res.status(200).json(intendedProjects);
  });
};

exports.getIntendedProject = (req, res, next) => {
  IntendedProject.findOne({ _id: req.params.id }, (err, intendedProject) => {
    if (err) {
      return res.send(err);
    }
    if (!intendedProject) {
      return res.status(404).send({ message: 'Intended project not found.' });
    }
    res.status(200).json(intendedProject);
  });
};

exports.createIntendedProject = (req, res, next) => {
  const newIntendedProject = new IntendedProject({
    _id: mongoose.Types.ObjectId(),

    
    ProjectTitle: req.body.ProjectTitle,
    ProjectDescription: req.body.ProjectDescription,
    ProjectBudget: req.body.ProjectBudget,
    ProjectStartDate: req.body. ProjectStartDate,
    ProjectEndDate: req.body. ProjectEndDate,
    ProjectStatus: req.body.ProjectStatus,

    expenditureDate:req.body.expenditureDate,
    totalExpenditure: req.body.totalExpenditure,
    mediaFiles:req.files.map(mediaFiles=>mediaFiles.path)
  });
  
  newIntendedProject.save()
  .then(savedReport => res.send(savedReport))
  .catch(error => console.log(error));
};



exports.updateIntendedProject = function(req, res, next) {
  const id = req.params.update;
  IntendedProject.updateOne( { _id: id },
  {
  $set: {
  
      ProjectDescription: req.body.ProjectDescription,
      ProjectTitle: req.body.ProjectTitle,
      ProjectBudget: req.body.ProjectBudget,
      ProjectStartDate: req.body. ProjectStartDate,
      ProjectEndDate: req.body. ProjectEndDate,
      ProjectStatus: req.body.ProjectStatus,
      expenditureDate:req.body.expenditureDate,
      totalExpenditure: req.body.totalExpenditure,
      commentbox:req.body.commentbox,
  }
  }
  )
  .exec()
  .then(function(dbIntended) {
  res.send(dbIntended);
  })
  .catch(function(err) {
  res.send('Cannot update Intended projects entry.');
  });
  };
  








    exports.deleteIntendedProject = function(req, res, next) {
      console.log('Intended projects ID:', req.params.IPReportID); // log the value here
      IntendedProject.deleteMany({ _id: req.params.IPReportID })
        .exec()
        .then(result => {
          console.log(result);
          res.status(200).json({
            message: 'Intended project report deleted!'
          });
        })
        .catch(err => {
          console.log(err);
          res.status(500).json({
            error: err
          });
        });
};