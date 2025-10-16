// file to test mongoose connection
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config({path: '../.env'});
console.log(process.env.MONGO_URI);
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected successfully');
    })
  .catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });