import React, { useState } from 'react';


function App() {

  const  [] = useState(0);
  const [email, setEmail] = useState({ mail: false});
  const [validPassword, setValidPassword] = useState({ valid: false});
  const [rememberMe, setRememberMe] = useState({ remember: false});
  const [submitted, setSubmitted] = useState({ submitted: false});
  const [firstname, setFirstname] = useState({ firstName: ''});
  const [lastname, setLastname] = useState({ lastName: ''});

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
    if (/^[\w\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(this.state.email)) {
      setEmail(true)
  }}


  const handlePasswordChange = (e) => {
    setValidPassword(e.target.value)
      if (this.state.password.length >5) {
      setValid(true)
  }}

  
  const handleRememberMeChange = (e) => {
    setRememberMe(true)
  }

  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (mail && valid) {
      setSubmitted(true)
  }}

  
  const handleFirstNameChange = (e) => {
    setFirstname(e.target.value)
  }


  const handleLasttNameChange = (e) => {
    setLastname(e.target.value)
  }
 

  return (

  <div>
    
    {mail ? (
      
      <section >
        <h1 className="border border-success rounded">
          Bienvenue {firstName} {lastName}
        </h1>
        <h2>{mail}</h2>
      </section>
    ) : (
      <form onSubmit={this.handleSubmit}>
      <div className="form-group">
        <label htmlFor="inputFirstName">First Name</label>
        <input type="text" onChange={handleFirstNameChange} className="form-control" id="inputFirstName"  placeholder="Enter your First Name"/>
      </div>
      <div className="form-group">
        <label htmlFor="inputLastName">First Name</label>
        <input type="text" onChange={handleLasttNameChange} className="form-control" id="inputLasttName"  placeholder="Enter your Last Name"/>
      </div>
    )}
      

    {valid ? (

      <div className="form-group">
        <label htmlFor="inputEmail1">Email address</label>
        <input type="email" onChange={handleEmailChange} className="form-control is-valid" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
      </div>
    ) : (
      <div className="form-group">
        <label htmlFor="inputEmail1">Email address</label>
        <input type="email" onChange={handleEmailChange} className="form-control is-invalid" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
      </div>
    )}


    {passwordIsValid ? (
      <div className="form-group">
        <label htmlFor="inputPassword1">Password</label>
        <input type="password" onChange={handlePasswordChange} className="form-control is-valid" id="inputPassword1" placeholder="Password"/>
      </div>
      ) : (
      <div className="form-group">
        <label htmlFor="inputPassword1">Password</label>
        <input type="password" onChange={handlePasswordChange} className="form-control is-invalid" id="inputPassword1" placeholder="Password"/>
      </div>
    )}


      <div className="form-group form-check">
        <input type="checkbox" onChange={handleRememberMeChange} className="form-check-input" id="exampleCheck1"/>
        <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
      </div>

      <button type="submit"  className="btn btn-primary">Submit</button>
      
  </div>
  );
}


export default function App