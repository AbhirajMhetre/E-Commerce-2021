import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import "./Auth.css";
import axios from 'axios';

const Login = (props) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
   

  const onSubmit = e => {
    e.preventDefault();
    axios.post('/api/users/login',formData).then(res => {
     props.history.push('/products')
    }).catch(err => {
      console.log(err)
    })
  };

  // if (isAuthenticated) {
  //   return <Redirect to="/" />;
  // }

  return (
    <Fragment>
      <h1 className="large text-primary">Sign In</h1>
      <p className="lead">
        <i className="fas fa-user" /> Sign Into Your Account
      </p>
      <form className="form" onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            id="email"
            value={email}
            onChange={onChange}
            required
          />
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
        <input type="submit" className="btn btn-primary" value="Login" />
      </form>
      <p className="my-1">
        Don't have an account? <Link to="/users">Sign Up</Link>
      </p>
    </Fragment>
  );
};


export default Login;




// Login.propTypes = {
//   login: PropTypes.func.isRequired,
//   isAuthenticated: PropTypes.bool
// };

// const mapStateToProps = state => ({
//   isAuthenticated: state.auth.isAuthenticated
// });

// export default connect(mapStateToProps, { login })(Login);