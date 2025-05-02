const express = require('express');
   const mongoose = require('mongoose');
   const cors = require('cors');
   const bodyParser = require('body-parser');

   require('dotenv').config();

   const app = express();
   const PORT = process.env.PORT || 56477;

   const dbUser = process.env.MONGODB_USER;
   const dbPassword = process.env.MONGODB_PASSWORD;

   mongoose
       .connect('mongodb://localhost:27017/backend', { useNewUrlParser: true, useUnifiedTopology: true })
       .then(() => {
           console.log('Connected to MongoDB database!');
       })
       .catch(() => {
           console.log('Connection failed!');
       });

   app.use(cors({ origin: '*' }));
   app.use(bodyParser.json());
   app.use(bodyParser.urlencoded({ extended: true }));
   app.use(express.static('public'));
   app.use(express.json());

   app.use('/api', require('./routes/contacts'));

   app.use(function (err, req, res, next) {
       res.status(422).send({ error: err.message });
   });

   app.listen(PORT, () => {
       console.log(`Server started on port ${PORT}`);
   });