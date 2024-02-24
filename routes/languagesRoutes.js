const express=require('express');
const router=express.Router();
const {getlanguages,getlanguageById,createlanguage,updatelanguage,deletelanguage}=require('../controllers/languagesController');
router.route('/').get(getlanguages).post(createlanguage).put(updatelanguage);

router.route('/:id').get(getlanguageById).delete(deletelanguage);


module.exports=router;