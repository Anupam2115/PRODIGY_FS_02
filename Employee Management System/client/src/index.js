import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.min.css';



<form className="form-group">
    <label>Name:</label>
    <input type="text" className="form-control" />
    <button type="submit" className="btn btn-primary">Add Employee</button>
</form>


import { TextField, Button, Container } from '@mui/material';

<Container>
    <TextField label="Name" variant="outlined" fullWidth margin="normal" />
    <Button variant="contained" color="primary">Add Employee</Button>
</Container>


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
