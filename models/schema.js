// #### **Student Schema**

// - name

//   - Type: String
//   - Required: true
//   - Purpose: Student’s full name

// - email

//   - Type: String
//   - Required: true
//   - Unique: true
//   - Purpose: Used for student login and communication

// - enrollmentDate

//   - Type: Date
//   - Default: current date
//   - Purpose: Tracks when the student registered

// - courses

//   - Type: Array of ObjectIds
//   - Ref: 'Course'
//   - Purpose: Stores list of enrolled course IDs

// #### **Course Schema**

// - title

//   - Type: String
//   - Required: true
//   - Purpose: Course title

// - description

//   - Type: String
//   - Purpose: Short course description

// - durationWeeks

//   - Type: Number
//   - Required: true
//   - Purpose: Course length in weeks

// - instructor

//   - Type: String
//   - Required: true
//   - Purpose: Name of the course instructor


const mongoose = require('mongoose');
const { Schema } = mongoose;
// Student Schema
const studentSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  enrollmentDate: {
    type: Date,
    default: Date.now
  },
  courses: [{
    type: Schema.Types.ObjectId,
    ref: 'Course'
  }]
});
// Course Schema
const courseSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  durationWeeks: {
    type: Number,
    required: true
  },
  instructor: {
    type: String,
    required: true
  }
});
// Exporting the models
const Student = mongoose.model('Student', studentSchema);
const Course = mongoose.model('Course', courseSchema);
module.exports = {
  Student,
  Course
};
