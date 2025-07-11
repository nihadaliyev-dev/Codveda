const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CourseSchema = new Schema(
  {
    category: { type: String, required: true },
    title: { type: String, required: true },
    author: { type: String, required: true },
    price: { type: String, required: true },
    duration: { type: String, required: true },
    isDiscounted: { type: Boolean, required: false },
  },
  { versionKey: false, timestamps: true }
);

const Course = mongoose.model("Course", CourseSchema);

module.exports = Course;
