const router = require('express').Router();
let SignUp = require('../models/riderSignup');


router.route('/').get((req,res) => {
    SignUp.find()
    .then(signUp => res.json(signUp))
    .catch(err => res.status(400).json('Error:' + err));
});

router.route('/add').post((req,res) => {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const dob = Date.parse(req.body.dob);

    const newSignUp = new SignUp({
        firstname,
        lastname,
        email,
        dob,
    });
    newSignUp.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req,res) =>{
    SignUp.findById(req.params.id)
    .then((signUp) => res.json(signUp))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/:id').delete((req,res) =>{
    SignUp.findById(req.params.id)
    .then(() => res.json('Information deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/update/:id').post((req,res) =>{
    SignUp.findById(req.params.id)
    .then((signUp) => {
        signUp.firstname = req.body.firstname;
        signUp.lastname = req.body.lastname;
        signUp.email = req.body.email;
        signUp.dob = Date.parse(req.body.dob);

        signUp.save()
        .then(() => res.json('Information updated!'))
        .catch(err => res.status(400).json('Error: ' +err));
    } 
    )
    .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;