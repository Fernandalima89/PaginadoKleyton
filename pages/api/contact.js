export default function (req, res) {
    // require('dotenv').config()

    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
            user: 'sadetailsendemail@gmail.com',
            pass: 'sadetail%@',
            // pass: process.env.password,
        },
        secure: true,
    });

    const mailData = {
        from: req.body.name + " " + req.body.lastName,
        to: 'hello@sadetail.com',
        subject: `Message From ${req.body.name} ${req.body.lasName}`,
        text: req.body.message + " | Sent from: " + req.body.email,
        html: `<div>${req.body.message}</div>
            <p>Sent from: ${req.body.name} ${req.body.lastName}</p>
            <p>Email: ${req.body.email}</p>
            <p>Phone number: ${req.body.phoneNumber}</p>`
    }

    transporter.sendMail(mailData, function (err, info) {
        if (err)
            console.log(err)
        else
            console.log(info);
    })

    console.log(req.body)
    res.send('success')
}
