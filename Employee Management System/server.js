const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/employee');

const employeeSchema = new mongoose.Schema({
    name: String,
    position: String,
    department: String,
    salary: Number
});

const Employee = mongoose.model('Employee', employeeSchema);

app.post('/employees', async (req, res) => {
    const employee = new Employee(req.body);
    await employee.save();
    res.send(employee);
});

app.get('/employees', async (req, res) => {
    const employees = await Employee.find();
    res.send(employees);
});

app.put('/employees/:id', async (req, res) => {
    const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(employee);
});

app.delete('/employees/:id', async (req, res) => {
    await Employee.findByIdAndDelete(req.params.id);
    res.send({ message: 'Employee deleted' });
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});


app.get('/', (req, res) => {
    res.send('Server is running!');
});
