//temporal data store:
const data = [
    {id: 1, name: 'Zoey', country: 'Canada'},
        {id: 2, name: 'John', country: 'Nigeria'}
]

//controller now is the main file holding the logics/methods for routes.
//route file no longer have the logics
//route depends on controller files as it has the implementation for APIs.

//@desc     Get All Students
//@route    GET     /api/v1/students
//@access       Public
exports.getStudents = (req, res, Next) => {
    res.status(200).json({success: true, body: data});
}

//@desc     Create/Add new Students
//@route    POST     /api/v1/students
//@access       private
exports.addStudent = (req, res, Next) => {
    res.status(200).json({success: true, msg:"hello world!"});
}

//@desc     Get single Students
//@route    GET     /api/v1/students/:id
//@access       Public
exports.getStudent = (req, res, Next) => {
    res.status(200).json({success: true, msg: req.params.id});
}

//@desc     Update full Student Record
//@route    PUT     /api/v1/students/:id
//@access       private
exports.updateStudent = (req, res, Next) => {
    res.status(200).json({success: true, msg: `student with ${req.params.id} 
    has been updated successfully`});
}

//@desc     DeleteStudent Record
//@route    Delete     /api/v1/students/:id
//@access       private
exports.deleteStudent = (req, res, Next) => {
    res.status(200).json({success: true, msg: `deleted student with ${req.params.id}`});
}