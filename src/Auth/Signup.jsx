import {  useState } from "react";
import axios from "axios";
import './auth.css';
import React from 'react'
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function save(event) {
        event.preventDefault();
        try {
          await axios.post("http://localhost:8002/api/auth/save", {
          username:username,
          email: email,
          password: password,
          });
          alert("User Registation Successfully");
          navigate('/detail');

        } catch (err) {
          alert(err);
        }
      }
  
    return (
    <div className="signup">
    <div className="cont" >
    <div className="card1">
            <h1>Registation Form</h1>
    <form>
        <div className="form-group">
          <label>User name</label>
          <input type="text"  className="form-control" id="username" placeholder="Enter Name"
          
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
          />

        </div>

        <div className="form-group">
          <label>Email</label>
          <input type="email"  className="form-control" id="email" placeholder="Enter Email"
          
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          
          /> 
        </div>
        <div className="form-group">
            <label>Password</label>
            <input type="password"  className="form-control" id="password" placeholder="Enter password"
            
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            />
          </div>
        <button type="submit" className="sign-btn" onClick={save} >Save</button>
        <Link to='/login' ><button className="login">Login</button></Link>
      </form>
    </div>
    </div>
     </div>
    );
  }
  

