const express= require('express');
const router= express.Router();
const subjectMarksController=require('../../Controllers/subjectMarksController');

router.post('/',subjectMarksController.handleNewUser);
router.get('/',subjectMarksController.giveStudentInfo);

module.exports= router; 