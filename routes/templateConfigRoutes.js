const express=require('express');
const router=express.Router();
const {createTemplateConfig,getTemplateConfig,getTemplateConfigById,updateTemplateConfig,deleteTemplateConfig}=require('../controllers/templateConfigController');
router.route('/').get(getTemplateConfig).post(createTemplateConfig).put(updateTemplateConfig);

router.route('/:id').get(getTemplateConfigById).delete(deleteTemplateConfig);


module.exports=router;