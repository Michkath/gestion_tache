const jwt= require("jsonwebtoken");

// const Authorization= (req,res,next)=>{
//     const token = req.cookies.access_token;
//     console.log(token)
//     if (token){
//         jwt.verify(token,"RAMDOM_TOKEN_SECRET",(err,decodedtoken)=>{
//             if(err){
//                 console.log(err);
//                 return res.sendStatus(403);
//             }else{
//                 console.log(decodedtoken);
//                return next();
//             }
//         })
//     }else{
//         return res.sendStatus(403);
//     }
// }

  
module.exports = (req, res, next) => {
  try {
      const token = req.headers.authorization.split(' ')[1];   
      const decodedToken = jwt.verify(token, 'RAMDOM_TOKEN_SECRET');

      // if (decodedToken.user_i){
      //   next();
      // }
     
      const userId = decodedToken.userId;
      req.auth = {
          userId: userId,
      };
      next();

  } catch(error) {
      res.status(401).json({ error });
  }
};
