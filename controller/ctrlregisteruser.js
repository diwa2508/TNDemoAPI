const RegisterUser = require('../model/model_registeruser');


//user registration 
exports.registeruser = (req, res, next) => {
   const registeruser = new RegisterUser({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    dob: new Date(req.body.dob),
    phonenumber: req.body.phonenumber,
    emailid: req.body.emailid,
    password: req.body.password,
    set_mpin: req.body.set_mpin,
    set_faceid: req.body.set_faceid,
    set_tnc: req.body.set_tnc
  });
  registeruser
    .save()
    .then(() => {
      // console.log(req.body.title);
      res.send('User Registered Successfully');
    })
    .catch(err => {
      res.status(400).send(err);
    });
};