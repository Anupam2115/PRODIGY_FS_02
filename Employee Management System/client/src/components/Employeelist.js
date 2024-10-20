// src/components/EmployeeList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EmployeeList = ({ onEdit }) => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/employees')
            .then(response => setEmployees(response.data))
            .catch(error => console.error(error));
    }, []);

    const handleDelete = (id) => {
        axios.delete(`http://localhost:5000/employees/${id}`)
            .then(() => setEmployees(employees.filter(employee => employee._id !== id)))
            .catch(error => console.error(error));
    };

    return (
        <div>
            <h2>Employee List</h2>
            <ul>
                {employees.map(employee => (
                    <li key={employee._id}>
                        {employee.name} - {employee.position}
                        <button onClick={() => onEdit(employee)}>Edit</button>
                        <button onClick={() => handleDelete(employee._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EmployeeList;
