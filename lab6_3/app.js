const express = require('express')
const app = express()
app.use(express.json())

const students = [
    {id:1, name: 'Nguyen Van A', email: 'vana@example.com', phone: '123456789', gpa: 3.5, status: 'Active'},
    {id:2, name: 'Tran Thi B', email: 'thib@example.com', phone: '0987654321', gpa: 3.2, status: 'nactive'},
]
// lấy danh sách sinh viên
app.get('/api/students', (req, res) => res.json(students))
//lấy thông tin sinh viên theo id
app.get('/api/student/:id',(req,res) => {
    const student = students.find(student => student.id == parseInt(req.params.id))
      if(!student) {
        return res.status(410).json({error: "id của sinh viên không tồn tại"})
      }
    res.json(student)
}
)
// thêm sinh viên mới 
app.post('/api/student', (req, res)=> {
    const student = students.find(student => student.id == parseInt(req.body.id))
      if(student) {
        return res.status(410).json({error: "id của sinh viên đã tồn tại"})
      }

    const newStudent = {}
    if (req.body.id) newStudent.id = req.body.id
    if (req.body.name) newStudent.name = req.body.name
    if (req.body.email) newStudent.email = req.body.email
    if (req.body.phone) newStudent.phone = req.body.phone
    if (req.body.gpa) newStudent.gpa = req.body.gpa
    if (req.body.status) newStudent.status = req.body.status
    students.unshift(newStudent)

    res.json({success: "true"})
    
})
// cập nhập thông tin sinh viên
app.put('/api/student/:id', (req, res) => {
    const student = students.find(student => student.id == parseInt(req.params.id))
      if(!student) {
        return res.status(410).json({error: "id của sinh viên không tồn tại"})
      }
      if (req.body.name) student.name = req.body.name;
      if (req.body.email) student.email = req.body.email;
      if (req.body.phone) student.phone = req.body.phone;
      if (req.body.gpa) student.gpa = req.body.gpa;
      if (req.body.status) student.status = req.body.status;
      res.json({success: "true"})

})
// xóa sinh viên
app.delete('/api/student/:id', (req, res)=> {
    const idx = students.findIndex(student => student.id === parseInt(req.params.id))
    if(idx < 0){
        return res.json({error: "sinh vien khong ton tai"})
    }
    students.splice(idx, 1)
    res.json({success: "đã xóa thành công"})
})



app.use('*', (req, res) => res.send('List students <a href="/api/students">/api/students</a>!'))

const port = process.env.PORT || 3000
app.listen(port, ()=> console.log(`\nnavigate to http://localhost:${port}\n`))