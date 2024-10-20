// src/components/EmployeeForm.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EmployeeForm = ({ selectedEmployee, clearSelection }) => {
    const [employee, setEmployee] = useState({
        name: '',
        position: '',
        department: '',
        salary: ''
    });

    useEffect(() => {
        if (selectedEmployee) {
            setEmployee(selectedEmployee);
        } else {
            setEmployee({
                name: '',
                position: '',
                department: '',
                salary: ''
            });
        }
    }, [selectedEmployee]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployee(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (employee._id) {
            axios.put(`http://localhost:5000/employees/${employee._id}`, employee)
                .then(clearSelection)
                .catch(error => console.error(error));
        } else {
            axios.post('http://localhost:5000/employees', employee)
                .then(clearSelection)
                .catch(error => console.error(error));
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>{employee._id ? 'Edit Employee' : 'Add Employee'}</h2>
            <label>
                Name:
                <input type="text" name="name" value={employee.name} onChange={handleChange} required />
            </label>
            <label>
                Position:
                <input type="text" name="position" value={employee.position} onChange={handleChange} required />
            </label>
            <label>
                Department:
                <input type="text" name="department" value={employee.department} onChange={handleChange} required />
            </label>
            <label>
                Salary:
                <input type="number" name="salary" value={employee.salary} onChange={handleChange} required />
            </label>
            <button type="submit">{employee._id ? 'Update' : 'Add'} Employee</button>
        </form>
    );
};

export default EmployeeForm;
