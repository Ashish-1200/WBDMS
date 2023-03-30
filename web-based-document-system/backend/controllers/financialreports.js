const mongoose = require('mongoose');
const financialReports = require('../models/financialreports.m');

exports.getAllFinancialReports = (req, res) => {
  financialReports.find({})
    .then(docs => res.status(200).json(docs))
    .catch(error => console.log(error));
};

exports.getSingleFinancialReport = (req, res) => {
  financialReports.findOne({ _id: req.params.id })
    .then(doc => res.send(doc))
    .catch(error => console.log(error));
};

exports.createFinancialReport = (req, res) => {
  const newFinancialReport = new financialReports({
    _id: mongoose.Types.ObjectId(),
    
    departmentName: req.body.departmentName,
    period: req.body.period,
    incomeSection: req.body.incomeSection,
    incomeDate: req.body.incomeDate,
    totalIncome: req.body.totalIncome,
    expenditureSection: req.body.expenditureSection,
    expenditureDate: req.body.expenditureDate,
    totalExpenditure: req.body.totalExpenditure,
    productImage:req.files.map(productImage=>productImage.path)
  });
  
  newFinancialReport.save()
    .then(savedReport => res.send(savedReport))
    .catch(error => console.log(error));
};




exports.updateFinancialReport = function(req, res, next) {
  const id = req.params.update;
  financialReports.updateOne( { _id: id },
  {
  $set: {
  
    departmentName: req.body.departmentName,
    period: req.body.period,
    incomeSection: req.body.incomeSection,
    incomeDate: req.body.incomeDate,
    totalIncome: req.body.totalIncome,
    expenditureSection: req.body.expenditureSection,
    expenditureDate: req.body.expenditureDate,
    totalExpenditure: req.body.totalExpenditure,
    //dateuploaded:req.body.dateuploaded,
   commentbox:req.body.commentbox,
  }
  }
  )
  .exec()
  .then(function(dbEquipment) {
  res.send(dbEquipment);
  })
  .catch(function(err) {
  res.send('Cannot update equipment entry.');
  });
  };
  










    

exports.deleteFinancialReport = function(req, res, next) {
  console.log('Incident Report ID:', req.params.FRReportID); // log the value here
  financialReports.deleteMany({ _id: req.params.FRReportID })
    .exec()
    .then(result => {
      console.log(result);
      res.status(200).json({
        message: 'Finincial report deleted!'
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
};