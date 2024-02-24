const express=require('express');
const router=express.Router();
const {getProviders,getProvidersById,createProviders,updateProviders,deleteProviders}=require('../controllers/providersController');
router.route('/').get(getProviders).post(createProviders).put(updateProviders);

router.route('/:id').get(getProvidersById).delete(deleteProviders);


module.exports=router;