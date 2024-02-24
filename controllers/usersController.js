const asyncHandler=require("express-async-handler");
const usersServices=require("../services/usersServices");
const tokenService=require("../middleware/tokenHandler");


//Get all the patients
const getUsers=asyncHandler(async(req,res)=>{
    const validateToken=await tokenService.validationToken(req);
    if(validateToken.success)
    {
        const result=await usersServices.getUsers();
        res.status(200).json({Operation:"Get all the Users",result:result});
    }
    else
    {
        res.status(401).json({Operation:"Invalid Token"});
    }
});

//Get Patient By Id
const getUsersById=asyncHandler(async(req,res)=>{
    const validateToken = await tokenService.validationToken(req);
    if (validateToken.success) {
        const result = await usersServices.getUsersById(req.body.UsersId);
        res.status(200).json({ Operation: `Get the Users`, result: result });
    }
    else {
        res.status(401).json({ Operation: "Invalid Token" });
    }
});

//Create patient
const createUsers=asyncHandler(async(req,res)=>{
    try {
        if(req.body.Id)
        { 
            const result=await usersServices.createUsers(req.body);
            res.status(200).json({Operation:"Create Users",Message:"Users created successfully"});
          
        }
        else{
            res.status(400);
            throw new Error("All fields are mandatory");
        }
    } catch (error) {
        console.error(error);
    }
   
  
});
//Update Patients 
const updateUsers = asyncHandler(async (req, res) => {
    const validateToken = await tokenService.validationToken(req);
    if (validateToken.success) {
        inBoundDetails = req.body;
        const result = await usersServices.updateUsers(inBoundDetails);
        res.status(200).json({ message: `Update the Users ${inBoundDetails.Id}` });
    }
    else {
        res.status(401).json({ Operation: "Invalid Token" });
    }
});

const deleteUsers=asyncHandler(async(req,res)=>{
 const validateToken = await tokenService.validationToken(req);
    if (validateToken.success) {
    console.log(req.params.id);
    const result=await usersServices.deleteUsers(req.params.id);
    res.status(200).json({message:`Delete the Users ${req.params.id}`});
    }
    else {
        res.status(401).json({ Operation: "Invalid Token" });
    }
});

//Get Patient By Id
const login=asyncHandler(async(req,res)=>{
    console.log("Username"+req.body.userName);
    const result=await usersServices.login(req.body);
   res.status(result.Status).json({Operation:`Login`,result:result});
});
module.exports={getUsers,getUsersById,createUsers,updateUsers,deleteUsers,login};