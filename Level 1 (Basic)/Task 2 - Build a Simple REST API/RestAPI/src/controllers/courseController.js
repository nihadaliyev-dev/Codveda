const Course = require("../models/courseModel");

const getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.status(200).json({
      message: "Success",
      data: courses,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error: error,
    });
  }
};

const getCourseById = async (req, res) => {
  const { id } = req.params;
  try {
    const course = await Course.findById(id);
    if (!course) {
      return res.status(404).json({
        message: "Course Not Found",
      });
    }
    res.status(200).json({
      message: "Success",
      data: course,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error: error,
    });
  }
};

const deleteCourse = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedCourse = await Course.findByIdAndDelete(id);

    if (!deletedCourse) {
      return res.status(404).json({
        message: "Course Not Found",
      });

      const updatedCourses = await Course.find();

      return res.status(200).json({
        message: "Succesfully Deleted Course",
        deletedCourse,
        updatedCourses,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error: error,
    });
  }
};

const postCourse = async (req, res) => {
  try {
    const newCourse = new Course({ ...req.body });

    await newCourse.save();
    console.log(newCourse);

    res.status(201).json({
      message: "Course Created",
      data: newCourse,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error",
      error: error,
    });
  }
};

const editCourse = async (req, res) => {
  const { id } = req.params;

  try {
    const updatedCourse = await Course.findByIdAndUpdate(id, {
      ...req.body,
    });

    console.log(updatedCourse);

    if (!updatedCourse) {
      return res.status(404).json({
        message: "Course Not Found",
      });
    }

    res.status(200).json({
      message: "Course Updated",
      data: updatedCourse,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error",
      error: error,
    });
  }
};

module.exports = {
  getAllCourses,
  getCourseById,
  deleteCourse,
  postCourse,
  editCourse,
};
