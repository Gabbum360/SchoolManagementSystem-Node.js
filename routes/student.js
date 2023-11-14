const express = require('express');

const { getStudent,
getStudents,
addStudent,
updateStudent,
deleteStudent} = require('../controllers/studentController')

const router = express.Router(); //initialize the router to express.

//map all the controller(logic) methods as interface to the url route:
router.route('/')
.get(getStudents)
.post(addStudent);

//map all the controller(logic) methods as interface to the url route:
//because these ones require extra params like "id", it has to be grouped together seperately:
router.route('/:id')
.get(getStudent)
.put(updateStudent)
.delete(deleteStudent);

// //we can have the routes have single URL as:

// //temporal data storage...
// const data = [
//     {id: 1, name: 'Zoey', country: 'Canada'},
//         {id: 2, name: 'John', country: 'Nigeria'}
// ]

// //get all students:
// router.get('/', (req, res) => {
//     res.status(200).json({success: true, body: data})
// });
// //post new student:
// router.post('/', (req, res) => {
//     res.status(200).json({success: true, msg:"hello world!"});
//     // if(!res === success){
//     //     res.statusCode(500);
//     // }
// });
// //get by id:
// router.get('/:id', (req, res) => {
//     res.status(200).json({success: true, msg: req.params.id})
// });
// //get by name:
// router.get('/{name}', (req, res) => {
//     res.status(200).json({success: true, msg: `show student with ${req.params.name}`})
// });
// //update student:
// router.put('/:id', (req, res) => {
//     res.status(200).json({success: true, msg: `student with ${req.params.id}`})
// });
// //delete student:
// router.delete('/:id', (req, res) => {
//     res.status(200).json({success: true, msg: `deleted student with ${req.params.id}`})
// });

module.exports = router;