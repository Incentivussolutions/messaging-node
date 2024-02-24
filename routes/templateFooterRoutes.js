const express=require('express');
const router=express.Router();
const {createTemplateFooter,getTemplateFooter,getTemplateFooterById,updateTemplateFooter,
        deleteTemplateFooter}=require('../controllers/templateFooterController');
router.route('/').get(getTemplateFooter).post(createTemplateFooter).put(updateTemplateFooter);

router.route('/:id').get(getTemplateFooterById).delete(deleteTemplateFooter);


module.exports=router;