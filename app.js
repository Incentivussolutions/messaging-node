const express=require('express');
const path=require('path');
const sequelize=require('sequelize');
const errorHandler = require('./middleware/errorHandler');
const { connectDB } = require('./Helpers/dbConnection');
const dotenv=require("dotenv").config();
const jwt=require('jsonwebtoken');
const { verifySignature } = require('@vonage/jwt');
const app=express();

const port=process.env.PORT || 5500; 
console.log(`My User ${process.env.PORT}`);

const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

//Body Parser
app.use(express.json());

app.use("/api/patient",require('./routes/patientRoutes'));
app.use("/api/contact",require('./routes/contactRoutes'));
app.use("/api/inbound",require('./routes/inBoundRoutes'));
app.use("/api/inboundReply",require('./routes/inBoundReplyRoutes'));
app.use("/api/language",require('./routes/languagesRoutes'));
app.use("/api/providers",require('./routes/providersRoutes'));
app.use("/api/responseLog",require('./routes/responseLogRoutes'));
app.use("/api/statusLog",require('./routes/statusLogRoutes'));

app.use("/api/targetQueue",require('./routes/targetQueueRoutes'));
app.use("/api/templateConfig",require('./routes/templateConfigRoutes'));
app.use("/api/templateFooter",require('./routes/templateFooterRoutes'));
app.use("/api/templateHeader",require('./routes/templateHeaderRoutes'));
app.use("/api/users",require('./routes/usersRoutes'));
app.use("/api/whatsappConfig",require('./routes/whatsappConfigureRoutes'));
app.use("/api/sendTemplate",require('./routes/sendTemplateRoutes'));
//ErrorHandler
app.use(errorHandler);
// app.use(sendWhatsappMessage);
app.listen(port,()=>{
    console.log(`App Started and Listening portal ${port}`)
});

const db=require("./Helpers/ormConnection");

app.post('https://acumensoftwares.com/social/public/api/inbound', (req, res) => {
    console.log(req.body);
    res.status(200).end();
  });
  
  app.post('https://acumensoftwares.com/social/public/api/status', (req, res) => {
    console.log(req.body);
    res.status(200).end();
  });

//Sync DB
// db.sequelize.sync().then(()=>{console.log("Sync Success")}).catch((err)=>{
//     console.log(`Failed to connect `+err.message)
// });
