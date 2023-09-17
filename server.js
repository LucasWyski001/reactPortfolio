const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);

const port = process.env.PORT || 5000;

const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send Mail");
  }
});

router.post("/contact", (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;

  const name = `${firstName} ${lastName}`;

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
      console.error(error);
      res.status(500).json({ error: "An error occurred while sending the email." });
    } else {
      res.status(200).json({ status: "Message Sent" });
    }
  });
});

app.listen(port, () => console.log(`Server is running on port ${port}`));