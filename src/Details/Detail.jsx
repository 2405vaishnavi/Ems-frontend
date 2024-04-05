import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import './detail.css'

export default function Detail() {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        loadUsers();
    },[]);

    const loadUsers = async() => {
        const result = await axios.get("http://localhost:8002/api/employee");
        setEmployees(result.data);
    }

    const deleteUser = async(id)=>{
        await axios.delete(`http://localhost:8002/api/employee/${id}`)
        loadUsers();
     }

    return (
        <div className="container">
            <Link to="/addEmp" ><button className="add-emp">Add New Employee</button></Link>
            <div className="card">
                <div className="card-body">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Employee ID</th>
                                <th scope="col">Employee Name</th>
                                <th scope="col">Employee Date of Joining</th>
                                <th scope="col">Employee Status</th>
                                <th scope="col">Employee Salary</th>
                                <th scope="col">Options</th>
                            </tr>
                        </thead>
                        <tbody>
                            {employees.map((employee, index) => (
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{employee.name}</td>
                                    <td>{employee.doj}</td>
                                    <td>
                                        <span className={`badge rounded-pill ${employee.status === 1 ? 'bg-success' : 'bg-secondary'}`}>
                                            {employee.status === 1 ? 'Active' : 'Retired'}
                                        </span>
                                    </td>
                                    <td>{employee.salary}</td>
                                    <td>
                                        <Link to={`/viewEmp/${employee.id}`}><button className="btn-view mx-2">View</button></Link>
                                        <Link to={`/editEmp/${employee.id}`}><button className="btn-edit mx-2">Edit</button></Link>
                                        <button className="btn-del mx-2" onClick={()=>deleteUser(employee.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
