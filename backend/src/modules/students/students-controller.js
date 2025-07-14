const asyncHandler = require("express-async-handler");
const { getAllStudents, addNewStudent, getStudentDetail, setStudentStatus, updateStudent } = require("./students-service");

const handleGetAllStudents = asyncHandler(async (req, res) => {
    const { userId, roleId, name } = req.query;
	const students = await getAllStudents({ userId, roleId, name });
	res.json({ students });
});

const handleAddStudent = asyncHandler(async (req, res) => {
    const payload = req.body;
    const message = await addNewStudent(payload);
    res.json(message);
});

const handleUpdateStudent = asyncHandler(async (req, res) => {
    const { id: userId } = req.params;
    const payload = req.body;
    const message = await updateStudent({ ...payload, userId });
    res.json(message);
});

const handleGetStudentDetail = asyncHandler(async (req, res) => {
    const { id: userId} = req.params;
	const student = await getStudentDetail(userId);
	res.json(student);
});

const handleStudentStatus = asyncHandler(async (req, res) => {
    const { userId, reviewerId, status } = req.body;
	const message = await setStudentStatus({ userId, reviewerId, status });
	res.json(message);
});

module.exports = {
    handleGetAllStudents,
    handleGetStudentDetail,
    handleAddStudent,
    handleStudentStatus,
    handleUpdateStudent,
};
