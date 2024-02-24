const express=require('express');
const router=express.Router({mergeParams:true});

const {createUsers,getUsers,getUsersById,updateUsers,
        deleteUsers,login}=require('../controllers/usersController');
 
router.get('/',getUsersById);
router.get('/all',getUsers);

router.get("/login",login);

router.post('/create',createUsers);
router.put('/update',updateUsers);

router.delete('/delete',deleteUsers);

module.exports=router;