const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require('nodemailer');

// these here are the servers used to send emails to well.. ME
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server running is good"));

const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "lucaswyski01@gmail.com",
        pass: "qmnsusyhcbwhprno"
    },
});

contactEmail.verify((error) =>{
    if(error){
        console.log(error);
    }else{
        console.log("Ready to Send Mail");
    }
});

router.post("/contact", (req, res) => {
    const name = req.body.firstName + req.body.lastName;
    const email = req.body.email;
    const message = req.body.message;
    const phone = req.body.phone;
    const mail = {
      from: name,
      to: "lucaswyski01@gmail.com",
      subject: "Contact Form Submission - Portfolio",
      html: `<p>Name: ${name}</p>
             <p>Email: ${email}</p>
             <p>Phone: ${phone}</p>
             <p>Message: ${message}</p>`,
    };
    contactEmail.sendMail(mail, (error) => {
      if (error) {
        res.json(error);
      } else {
        res.json({ code: 200, status: "Message Sent" });
      }
    });
  });