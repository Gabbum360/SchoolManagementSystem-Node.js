const express = require('express');

const {addTeacher,
getTeacher,
getTeachers,
updateTeacher,
deleteTeacher } = require('../controllers/teacherController');

const router = express.Router();

router.route('/')
.get(getTeachers)
.post(addTeacher);

router.route("/:id")
.get(getTeacher)
.patch(updateTeacher)
.delete(deleteTeacher);

module.exports = router;