const response = {success: true};

exports.addTeacher = (req, res, Next) => {
    res.status(200).json(response);
}

exports.getTeachers = (req, res, Next) => {
    res.status(200).json({success: true, msg: "Teachers are displayed!"});
}

exports.getTeacher = (req, res, Next) => {
    res.status(200).json({success: true, msg: `display teacher with ${req.params.id}`});
}

exports.updateTeacher = (req, res, Next) => {
    res.status(200).json({success: true, msg: `teacher with ${req.params.id}\n\t\has been updated!`});
}

exports.deleteTeacher = (req, res, Next) => {
    res.status(200).json({success: true, msg: `teacher with ${req.params.id}\n\t\has been deleted!`});
}