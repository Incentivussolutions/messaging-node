const express=require('express');
const router=express.Router();
const {createTemplateHeader,getTemplateHeader,getTemplateHeaderById,updateTemplateHeader,
        deleteTemplateHeader}=require('../controllers/templateHeaderController');
router.route('/').get(getTemplateHeader).post(createTemplateHeader).put(updateTemplateHeader);

router.route('/:id').get(getTemplateHeaderById).delete(deleteTemplateHeader);


module.exports=router;