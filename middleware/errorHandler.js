const {errorConstants}=require("../constants");
const errorHandler=(err,req,res,next)=>{
    const statusCode=res.statusCode?res.statusCode:500;
    console.log(`Error Code ${statusCode}`);
    switch(statusCode)
    {
        case errorConstants.VALIDATION_ERROR:
            res.json({title:"Validation Error",
            message:err.message,
            stackTrace:err.stack});
        case errorConstants.UNAUTHORIZED:
            res.json({title:"UnAuthorized",
            message:err.message,
            stackTrace:err.stack});
        case errorConstants.FORBIDDEN:
            res.json({title:"Forbidden",
            message:err.message,
            stackTrace:err.stack});
        case errorConstants.NOT_FOUND:
            res.json({title:"Not Found",
            message:err.message,
            stackTrace:err.stack});
        case errorConstants.SERVER_ERROR:
            res.json({title:"Internal Server Error",
            message:err.message,
            stackTrace:err.stack});
        case errorConstants.UNKNOWN:
            res.json({title:"Internal Server Error",
            message:err.message,
            stackTrace:err.stack});
default:
    console.log("No error"+ err.message);
    
    break;
    } 

};

module.exports=errorHandler;