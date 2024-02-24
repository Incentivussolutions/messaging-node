const express=require('express');
const router=express.Router();
const {getInBoundReplys,getInBoundsReplyById,createInBoundsReply,updateInBoundsReply,deleteInBoundsReply}=require('../controllers/inBoundReplyController');
router.route('/').get(getInBoundReplys).post(createInBoundsReply).put(updateInBoundsReply);

router.route('/:id').get(getInBoundsReplyById).delete(deleteInBoundsReply);


module.exports=router;