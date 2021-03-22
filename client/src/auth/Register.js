import React, { Fragment, useState } from 'react';
import axios from 'axios';

import { Link, Redirect } from 'react-router-dom';
// import { setAlert } from '../../actions/alert';
// import { register } from '../../actions/auth';


const Register = (props) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2:''
   
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.id]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== password2) {
      alert('Passwords do not match', 'danger');
    } else {
      axios.post('/api/users',formData).then(res => {
        console.log(res)
        props.history.push('/users/login')
      }).catch(err => {
        console.log(err)
        alert(err)
      })
      console.log(formData)
    }
  };

  return (
    <Fragment>
      <h1 className="large text-primary">Sign Up</h1>
      <p className="lead">
        <i className="fas fa-user" /> Create Your Account
      </p>
      <form className="form" onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Name"
            name="name"
            id="name"
            value={name}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            id="email"
            value={email}
            onChange={onChange}
          />
          <small className="form-text">
            
          </small>
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            id="password"
            value={password}
            onChange={onChange}
          />
        </div>

        <div className="form-group">
          <input
            type="password"
            placeholder="Confirm Password"
            name="password2"
            id="password2"
            value={password2}
            onChange={onChange}
          />
        </div>
     
        <input type="submit" className="btn btn-primary" value="Register" />
      </form>
      <p className="my-1">
        Already have an account? <Link to="/users/login">Sign In</Link>
      </p>
    </Fragment>
  );
};



export default Register;


