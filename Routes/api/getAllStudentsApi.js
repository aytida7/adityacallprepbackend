const express= require('express');
const router= express.Router();
const getAllController=require('../../Controllers/getAllController');

router.get('/',getAllController.getStudentsController);

module.exports= router; 