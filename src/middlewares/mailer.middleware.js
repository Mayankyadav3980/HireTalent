import nodemailer from 'nodemailer';

//function to send confirmation mail

 export async function sendMail(req, res){
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "codingninjas2k16@gmail.com",
        pass: "slwvvlczduktvhdj",
      },
    });

    let mailOptions = {
      from: "codingninjas2k16@gmail.com",
      to: req.body.email,
      subject: "Application confirmation email",
      text: "You have successfully applied for the Job at HireTalent.",
    };

    try {
        await transporter.sendMail(mailOptions);
    } catch (error) {
        console.log('error is: ' + error);
    }

    res.redirect("/jobs/" + req.params.id);
}

 
    

    