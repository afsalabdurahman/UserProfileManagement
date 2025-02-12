const express = require('express');
const app = express();

const adminRouter=require("./routes/adminRouter")
const userRouter=require("./routes/userRouter")
require("dotenv").config()
const cors = require('cors')
const port = 3000;

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', userRouter);
// app.use("/admin", adminRouter);





app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
