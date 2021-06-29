require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const condidateRouter = require('./routes/condidate')

mongoose.connect(process.env.DATABASE_URL,  { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Connected to Database");
});

app.use(express.json());
app.use('/api/condidate', condidateRouter )


app.listen(3000, () => console.log('Server Started'))