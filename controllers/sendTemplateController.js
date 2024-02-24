const asyncHandler=require("express-async-handler");
const tokenService=require("../middleware/tokenHandler");
const sendtemplate=require("../services/Custom/sendTemplate");

const sendTemplate=asyncHandler(async(req,res)=>{
    const validateToken=await tokenService.validationToken(req);
    if(validateToken.success)
    {
        var request=req.body;
        const result=await sendtemplate.sendWhatsappMessage(request);
        res.status(200).json({Operation:"Send whatsapp with template",result:result});
    }
    else
    {
        res.status(401).json({Operation:"Invalid Token"});
    }
});
module.exports={sendTemplate};