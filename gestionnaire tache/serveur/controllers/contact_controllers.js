const nodemailer = require("nodemailer");

// const {email,password} = require()

exports.mail = async (req, res, next) => {


const config = {
    service: 'gmail',
    auth: {
      user: "michkathaboudou@gmail.com",
      pass: "ddse mbhl mfsa tnzq"
    }
  }; 

  const {usermail} = req.body;
  let transporter = nodemailer.createTransport(config);


  const info ={
    from: "michkathaboudou@gmail",
    to: usermail,
    subject: "message",
    html: "toto bouge toi"
  };

  transporter.sendMail(info)
  .then(() => res.status(200).json("utilisateur creer" ))
  .catch((error) => res.status(400).json({ error }));
 }