const express=require('express');
const router=express.Router();
const {createWhatsappConfigure,getWhatsappConfigure,getWhatsappConfigureById,updateWhatsappConfigure,
        deleteWhatsappConfigure}=require('../controllers/whatsappController');
router.route('/').get(getWhatsappConfigure).post(createWhatsappConfigure).put(updateWhatsappConfigure);

router.route('/:id').get(getWhatsappConfigureById).delete(deleteWhatsappConfigure);


module.exports=router;