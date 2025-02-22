const express = require('express');
const app = express();
const dbConnection = require('./dbConfig/dbconnect')
const adminRouter = require("./routes/adminRouter")
const userRouter = require("./routes/userRouter")
const bodyParser = require('body-parser');
app.use('/uploads', express.static('uploads'));

const session = require('express-session');
require("dotenv").config()
const cors = require('cors')
const port = process.env.PORT;

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,                // Prevent session from being saved if unmodified
  saveUninitialized: true,      // Save session even if it is uninitialized
  cookie: {
    secure: false,              // Set to true in production (HTTPS)
    httpOnly: true,             // Prevent JavaScript from accessing the session cookie
    maxAge: 1000 * 60 * 30      // Session expires after 30 minutes (30 * 60 * 1000 ms)
  }
}));


dbConnection()



// .......................................

app.use('/', userRouter);
app.use('/admin', adminRouter);



app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
