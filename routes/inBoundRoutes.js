const express=require('express');
const router=express.Router();
const {getInBounds,createInBounds,updateInBounds,deleteInBounds,getInBoundsById}=require('../controllers/inBoundController');
router.route('/').get(getInBounds).post(createInBounds).put(updateInBounds);

router.route('/:id').get(getInBoundsById).delete(deleteInBounds);


module.exports=router;