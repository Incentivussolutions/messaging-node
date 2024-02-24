const express=require('express');
const router=express.Router();
const {createStatusLog,getStatusLog,getStatusLogById,updateStatusLog,deleteStatusLog}=require('../controllers/statusLogController');
router.route('/').get(getStatusLog).post(createStatusLog).put(updateStatusLog);

router.route('/:id').get(getStatusLogById).delete(deleteStatusLog);


module.exports=router;