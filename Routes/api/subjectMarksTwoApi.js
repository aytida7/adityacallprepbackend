const express= require('express');
const router= express.Router();
const subjectMarksTwoController=require('../../Controllers/subjectMarksTwoController');

router.post('/',subjectMarksTwoController.handleNewUser);

module.exports= router; 