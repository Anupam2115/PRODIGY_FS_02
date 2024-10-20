// src/App.js
import React, { useState } from 'react';
import EmployeeList from './components/Employeelist';
import EmployeeForm from './components/EmployeeForm';

const App = () => {
    const [selectedEmployee, setSelectedEmployee] = useState(null);

    const handleEdit = (employee) => {
        setSelectedEmployee(employee);
    };

    const clearSelection = () => {
        setSelectedEmployee(null);
    };

    return (
        <div>
            <h1>Employee Management System</h1>
            <EmployeeForm selectedEmployee={selectedEmployee} clearSelection={clearSelection} />
            <EmployeeList onEdit={handleEdit} />
        </div>
    );
};

export default App;
