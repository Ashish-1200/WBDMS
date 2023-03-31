const mongoose = require ('mongoose');
const insuranceReports = require('../models/insurancereports.m');


exports.getInsuranceReports = (req, res) => {
    insuranceReports.find({})
      .then(docs => res.status(200).json(docs))
      .catch(error => console.log(error));
  };


exports.getInsuranceReport = (req, res) => {
    insuranceReports.findOne({ _id: req.params.id })
      .then(doc => res.send(doc))
      .catch(error => console.log(error));
  };
  

exports.createInsuranceReport = (req, res, next) => {
const newInsuranceReport = new insuranceReports({
_id: mongoose.Types.ObjectId(),

departmentName: req.body.departmentName,
period: req.body.period,
projectDescription: req.body.projectDescription,
projectDate: req.body.projectDate,
insuranceDate: req.body.insuranceDate
});

newInsuranceReport
.save()
.then((savedInsuranceReport) => {
res.status(200).json(savedInsuranceReport);
})
.catch((error) => {
res.status(500).send({ message: 'Failed to create insurance report.' });
});
};

exports.updateInsuranceReport = (req, res, next) => {
insuranceReports.updateOne(
{ _id: req.params.id },
{
$set: {

departmentName: req.body.departmentName,
period: req.body.period,
projectDescription: req.body.projectDescription,
projectDate: req.body.projectDate,
insuranceDate: req.body.insuranceDate,
commentbox:req.body.commentbox,
}
}
)
.exec()
  .then(function(dbinsurance) {
  res.send(dbinsurance);
  })
  .catch(function(err) {
  res.send('Cannot update insurance entry.');
  });
  };

exports.deleteInsuranceReport = (req, res, next) => {
  console.log('Insurance Report ID:', req.params.IRReportID); // log the value here
insuranceReports.deleteOne({ _id: req.params.IRReportID })
.exec()
.then(() => {
res.status(200).send({ message: 'Insurance report deleted.' });
})
.catch((error) => {
res.status(500).send({ message: 'Failed to delete insurance report.' });
});
};