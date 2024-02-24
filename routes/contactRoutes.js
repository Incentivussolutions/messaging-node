const express=require('express');
const router=express.Router();
const {getContacts,createContacts,updateContacts,deleteContacts,getContact}=require('../controllers/contactController');
router.route('/').get(getContacts).post(createContacts).put(updateContacts);

router.route('/:id').get(getContact).delete(deleteContacts);


module.exports=router;