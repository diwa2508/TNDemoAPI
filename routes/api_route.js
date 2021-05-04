const express = require('express');
const router = express.Router();
const hospitalcontroller = require('../controller/hospitallist_controller');




router.get('/showHospitals', hospitalcontroller.showHospitals); //lsit all hospitals
router.get('/showHospitalbyId/:id', hospitalcontroller.showHospitalbyId); //list hospital by id


//routes for hospital management
router.post('/add-hospital', hospitalcontroller.addhospital);
router.post('/updateHospitalById/:id', hospitalcontroller.updateHospitalById); // list one hospital by contact number


module.exports = router;