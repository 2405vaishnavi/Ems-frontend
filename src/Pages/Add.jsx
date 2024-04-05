import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './pages.css';

export default function Add() {
  const [employee, setEmployee] = useState({
    name: '',
    doj: '',
    status: '',
    dept: '',
    salary: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8002/api/employee', employee);
      console.log('Employee saved successfully:', response.data);
    } catch (error) {
      console.error('Error saving employee:', error);
    }
  };

  return (
    <div className='signup'>
      <div className='cont-add'>
        <div className='card-add'>
          <h1>Add Employee</h1>
          <form onSubmit={handleSubmit}>
            <div className='form-group'>
              <label>Name:</label>
              <input type="text" className="form-control" name="name" value={employee.name} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Date of Joining:</label>
              <input type="date" className="form-control" name="doj" value={employee.doj} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Status:</label>
              <input type="text" className="form-control" name="status" value={employee.status} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Department:</label>
              <input type="text" className="form-control" name="dept" value={employee.dept} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Salary:</label>
              <input type="text" className="form-control" name="salary" value={employee.salary} onChange={handleChange} />
            </div>
            <button type="submit" className="add-btn">Save</button>
            <Link to='/detail'><button className="return">Back To Detail Page</button></Link>
          </form>
        </div>
      </div>
    </div>
  );
}
