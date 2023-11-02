const jwt= require("jsonwebtoken");

const Authorization= (req,res,next)=>{
    const token = req.cookies.access_token;
    console.log(token)
    if (token){
        jwt.verify(token,"RAMDOM_TOKEN_SECRET",(err,decodedtoken)=>{
            if(err){
                console.log(err);
                return res.sendStatus(403);
            }else{
                console.log(decodedtoken);
               return next();
            }
        })
    }else{
        return res.sendStatus(403);
    }
}

module.exports = { Authorization}