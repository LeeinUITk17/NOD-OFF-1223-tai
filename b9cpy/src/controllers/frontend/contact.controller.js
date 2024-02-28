const nodemailer = require("nodemailer");

class ContactController {
    constructor() {
        this.transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'mrtaivietbac@gmail.com',
                pass: 'wxuh ffky dcfo edqh'
            }
        });
    }

    getAll = async (req, res, next) => {
        res.render('frontend/contact');
    }

    sendContactMail = async (req, res, next) => {
        try {
            const { cName, cEmail, cMessage } = req.body;
            console.log(cName, cEmail, cMessage);
            const mailOptions = {
                from: 'mrtaivietbac@gmail.com',
                to: cEmail,
                subject: cName,
                text: cMessage
            };
            await this.transporter.sendMail(mailOptions);
            res.redirect('/home');
        } catch (error) {
            console.error('Error sending email:', error);
            res.status(500).send('Error sending email');
        } 
    }
}

module.exports = new ContactController();
