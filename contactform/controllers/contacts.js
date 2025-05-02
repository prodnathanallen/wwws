const Contact = require('../models/contact.js');
const nodemailer = require('nodemailer');

   exports.submitForm = async (req, res, next) => {
       try {
           const { name, email, message } = req.body;

           // Basic validations
           if (!name || !email || !message) {
               return res.status(400).json({ message: 'Name, email, and message are required fields' });
           }

           // Create a new contact instance
           const newContact = new Contact({
               name: name,
               email: email,
               message: message,
           });

           // Save the contact to the database
           await newContact.save();
    
            let transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASS
                }
            });

            // email items
            let mailOptions = {
                from: 'prodnathanallen@gmail.com',
                to: 'prodnathanallen@gmail.com',
                subject: 'New Contact Form Submission',
                text: `New submission from:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`
            };

            // email sent
            await transporter.sendMail(mailOptions);

           res.status(201).json({ message: 'Contact form submitted successfully' });
       } catch (error) {
           console.error(error);
           res.status(500).json({ message: 'Internal server error' });
       }
   };