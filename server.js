const express = require(`express`);
const dotenv = require(`dotenv`);

//import Route files from the specific folder down to this place:
const studentRoutes = require('./routes/student'); 
const teacherRoutes = require('./routes/teacher');

//load env variables from config.env...
dotenv.config({path: './Config/config.env'});

//initialise our app with express...
const app = express();

//this line mounts the studentRoutes in line 5 above so we don't specify the 
//full url name on the student route file.  :
app.use('/api/v1/students', studentRoutes);//define this once and call it using just "/" or with ":id". 
app.use('/api/v1/teachers', teacherRoutes);
// //temporal data storage...
// const data = [
//     {id: 1, name: 'Zoey', country: 'Canada'},
//         {id: 2, name: 'John', country: 'Nigeria'}
// ]
// app.get('/api/v1/getStudents', (req, res) => {
//     res.status(200).json({success: true, body: data})
// });

// app.post('/api/v1/addStudent', (req, res) => {
//     res.status(200).json({success: true, msg:"hello world!"});
//     // if(!res === success){
//     //     res.statusCode(500);
//     // }
// });

// app.post('/api/v1/addStudent', (req, res) => {
//     const body = req.
// });


const PORT = process.env.PORT || 6000;
app.listen(PORT, console.log(`server running in ${process.env.NODE_ENV} mode on ${PORT}`));
