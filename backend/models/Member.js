// models/Member.js
const mongoose = require('mongoose');

const MemberSchema = new mongoose.Schema({
  name: { type: String, required: true },
  rollNumber: { type: String, required: true, unique: true },
  year: String,
  degree: String,
  project: String,
  hobbies: [String],       // store as array
  certificate: String,
  internship: String,
  aim: String,
  image: String
});

module.exports = mongoose.model('Member', MemberSchema);
