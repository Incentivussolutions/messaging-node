const express=require('express');
const router=express.Router({mergeParams:true});

const {sendTemplate}=require('../controllers/sendTemplateController');
 
router.post('/',sendTemplate);

module.exports=router;