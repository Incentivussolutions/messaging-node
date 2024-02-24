const express=require('express');
const router=express.Router();
const {createTargetQueue,getTargetQueue,getTargetQueueById,updateTargetQueue,deleteTargetQueue}=require('../controllers/targetQueueController');
router.route('/').get(getTargetQueue).post(createTargetQueue).put(updateTargetQueue);

router.route('/:id').get(getTargetQueueById).delete(deleteTargetQueue);


module.exports=router;