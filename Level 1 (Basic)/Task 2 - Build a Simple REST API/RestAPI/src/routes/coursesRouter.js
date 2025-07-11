const express = require("express");
const {
  getAllCourses,
  getCourseById,
  deleteCourse,
  postCourse,
  editCourse,
} = require("../controllers/courseController");
const courseValidation = require("../middlewares/courseValidation");
const router = express.Router();

router.get("/", getAllCourses);
router.get("/:id", getCourseById);
router.delete("/:id", deleteCourse);
router.post("/", courseValidation, postCourse);
router.put("/:id", editCourse);

module.exports = router;
