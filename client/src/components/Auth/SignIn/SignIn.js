import React, { useState } from 'react';
import { Avatar, Button, CssBaseline, TextField, Grid, Typography,Container } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
 
import './SignIn.css';

const SignIn = (props) => {
  const [formData, setFormData] = useState({
    email: '',
    password:''
  });
  const { email, password } = formData;
  // const [error, setError] = useState(false)
  
  const onChange = event => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  }
    

  const onSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/users/login', formData)
      .then(res => {
        localStorage.setItem("token", res.data.token);
        if(res.data.isAdmin){
          props.history.push(`/admin`)
          
        } else {
          props.history.push(`/products`)
        }
      } )
      .catch(err=> {
        alert("username or password is invalid")
      })
  };

  
  return (
    <Container component="main" maxWidth="xs" style={{marginBottom:'20px'}}>
      <CssBaseline />
      <div className="paper">
        <Avatar className="avatar">
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className="form" noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={onChange}
            // error={error}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={onChange}
            // error={error}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className="submit"
            onClick={onSubmit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item>
              <NavLink to="/users">
                {"Don't have an account? Sign Up"}
              </NavLink>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}


export default SignIn;