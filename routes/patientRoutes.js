const express=require('express');
const router=express.Router();

const {getPatients,getPatient,createPatients,updatePatients,deletePatients}=require('../controllers/patientController');
router.route('/').get(getPatients).post(createPatients).put(updatePatients);

router.route('/:id').get(getPatient).delete(deletePatients);


module.exports=router;