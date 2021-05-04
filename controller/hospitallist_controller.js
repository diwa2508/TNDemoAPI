const hospital = require('../model/model_hospitallist');

exports.addhospital = (req, res, next) => {
  const newhospital = new hospital({
    sno: req.body.sno,
    district: req.body.district,
    institution: req.body.institution,
    covid_beds_total: req.body.covid_beds_total,
    covid_beds_occupied: req.body.covid_beds_occupied,
    covid_beds_free: req.body.covid_beds_free,
    oxygen_supported_beds: req.body.oxygen_supported_beds,
    oxygen_supported_occupied: req.body.oxygen_supported_occupied,
    oxygen_supported_free: req.body.oxygen_supported_free,
    non_oxygen_supported_beds: req.body.non_oxygen_supported_beds,
    non_oxygen_supported_occupied: req.body.non_oxygen_supported_occupied,
    non_oxygen_supported_free: req.body.non_oxygen_supported_free,
    icu_beds_total: req.body.icu_beds_total,
    icu_beds_occupied: req.body.icu_beds_occupied,
    icu_beds_free: req.body.icu_beds_free,
    ventilator_beds: req.body.ventilator_beds,
    ventilator_occupied: req.body.ventilator_occupied,
    ventilator_free: req.body.ventilator_free,
    last_updated: req.body.last_updated,
    contact_number: req.body.contact_number,
    remarks: req.body.remarks,
  });
  newhospital
    .save()
    .then(() => {
      console.log(req.body.district);
      res.send('Hospital added successfully');
    })
    .catch(err => {
      res.status(400).send(err);
    });
};

exports.updateHospitalById = (req, res, next) => {
  console.log(req.params.id);
  hospital.findById(req.params.id).then(result => {
    result.sno = req.body.sno;
    result.district = req.body.district;
    result.institution = req.body.institution;
    result.covid_beds_total = req.body.covid_beds_total;
    result.covid_beds_occupied = req.body.covid_beds_occupied;
    result.covid_beds_free = req.body.covid_beds_free;
    result.oxygen_supported_beds = req.body.oxygen_supported_beds;
    result.oxygen_supported_occupied = req.body.oxygen_supported_occupied;
    result.oxygen_supported_free = req.body.oxygen_supported_free;
    result.non_oxygen_supported_beds = req.body.non_oxygen_supported_beds;
    result.non_oxygen_supported_occupied = req.body.non_oxygen_supported_occupied;
    result.non_oxygen_supported_free = req.body.non_oxygen_supported_free;
    result.icu_beds_total = req.body.icu_beds_total;
    result.icu_beds_occupied = req.body.icu_beds_occupied;
    result.icu_beds_free = req.body.icu_beds_free;
    result.ventilator_beds = req.body.ventilator_beds;
    result.ventilator_occupied = req.body.ventilator_occupied;
    result.ventilator_free = req.body.ventilator_free;
    result.last_updated = req.body.last_updated;
    result.contact_number = req.body.contact_number;
    result.remarks = req.body.remarks;


    return result.save();
  }).then(post => {
    res.send('post updated successfully');
  }).catch(err => res.status(400).send(err));
};

exports.showHospitals = (req, res, next) => {
  hospital.find()
    .then(result => {
      res.send(result);
    })
    .catch(err => res.status(400).send(err));
};


exports.showHospitalbyId = (req, res, next) => {
  console.log(req.params.id);
  hospital.findById(req.params.id)
    .then(result => {
      res.send(result);
    })
    .catch(err => res.status(400).send(err));
};

