const Users = require("../models/users_models");
const bcrypt = require("bcrypt");
const jwt= require("jsonwebtoken");

exports.signin = (req, res, next) => {
    // console.log(...req.body)
    const {Name,email,password} = req.body
  bcrypt
    .hash(password, 10)
    .then((hash) => {
      const user = new Users({
        Name: Name,
        email: email,
        password: hash,
      });
      user
        .save()
        .then(() => res.status(200).json("utilisateur creer" ))
        .catch((error) => res.status(400).json({ error }));
    })
    .catch((error) => res.status(500).json({ error }));
};


exports.login = (req, res, next)=>{
    const{email,password} = req.body
    Users.findOne({email:email})
   
        .then((user)=>{
            if(!user){
               return res.status(401).json("email introuver")
            }
            bcrypt.compare(password,user.password)
                .then(valid=>{
                    if(!valid){
                        return res.status(500).json("mot de passe incorect")
                    }
                    res.status(200).json({
                        user_id: user._id,
                        token: jwt.sign(
                            {user_id: user._id },
                            "RAMDOM_TOKEN_SECRET",
                            { expiresIn: '24h' }
                            )
                    })
                })
                .catch(error=> res.status(500).json({error}))
        })
        .catch(error=> res.status(500).json({error}))
} ;


exports.getall = (req,res,next)=>{
    Users
        .find()
        .then((users)=>res.status(200).json({users}))
        .catch(error=> res.status(500).json({error}))
}

exports.delete = (req,res,next)=>{
    Users
        .deleteOne({_id: req.params.id})
        .then(res.status(200).json("delete"))
        .catch(error=> res.status(500).json({error}))
}