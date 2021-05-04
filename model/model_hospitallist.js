const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hospitalList = new Schema({
    sno: {
        type: String,
        required: false
    },
    district: {
        type: String,
        required: false
    },
    institution : {
        type: String,
        required: false
    },
    covid_beds_total: {
        type: Number,
        default: 0
    },
    covid_beds_occupied: {
        type: Number,
        default: 0
    },
    covid_beds_free: {
        type: Number,
        default: 0
    },
    oxygen_supported_beds: {
        type: Number,
        default: 0
    },
    oxygen_supported_occupied: {
        type: Number,
        default: 0
    },
    oxygen_supported_free: {
        type: Number,
        default: 0
    },
    non_oxygen_supported_beds: {
        type: Number,
        default: 0
    },
    non_oxygen_supported_occupied: {
        type: Number,
        default: 0
    },
    non_oxygen_supported_free: {
        type: Number,
        default: 0
    },
    icu_beds_total: {
        type: Number,
        default: 0
    },
    icu_beds_occupied: {
        type: Number,
        default: 0
    },
    icu_beds_free: {
        type: Number,
        default: 0
    },
    ventilator_beds: {
        type: Number,
        default: 0
    },
    ventilator_occupied: {
        type: Number,
        default: 0
    },
    last_updated: {
        type: String,
        default: Date.now()
    },
    contact_number: {
        type: String,
       default: "0000"
    },
    remarks: {
        type: String,
        default: "NA"
    }
});

module.exports = mongoose.model('hospitalList', hospitalList);

