const express=require('express');
const router=express.Router();
const {createResponseLog,deleteResponseLog,getResponseLog,getResponseLogById,updateResponseLog}=require('../controllers/responseLogController');
router.route('/').get(getResponseLog).post(createResponseLog).put(updateResponseLog);

router.route('/:id').get(getResponseLogById).delete(deleteResponseLog);


module.exports=router;