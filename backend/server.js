const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const otpRoutes = require('./routes/otpRoutes');
require('dotenv').config();

const app = express();

// const corsOptions = {
//   origin: 'http://localhost:5173/', // Replace with your frontend URL
//   methods: 'GET,POST',
//   allowedHeaders: 'Content-Type',
// };


app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

app.use('/api', otpRoutes);
// app.get("/health",async (req, res) => {
//   return res.status(200).send('OTP verified')})
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
