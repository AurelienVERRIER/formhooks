import React, { useState } from 'react';


function App() {

  const  [] = useState(0);
  const [email, setEmail] = useState('');
  const [validPassword, setValidPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');

  const handleEmailChange = (e) => {
        if (/^[\w\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
        setEmail(e.target.value)
  }}


  const handlePasswordChange = (e) => {
    setValidPassword(e.target.value)
      if (password.length >5) {
      setValidPassword(true)
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
          Bienvenue {firstname} {lastname}
        </h1>
        <h2>{email}</h2>
      </section>
    ) : (
      <section>
        <form onSubmit={this.handleSubmit}/>
        <div className="form-group">
          <label htmlFor="inputFirstName">First Name</label>
          <input type="text" onChange={handleFirstNameChange} className="form-control" id="inputFirstName"  placeholder="Enter your First Name"/>
        </div>
        <div className="form-group">
          <label htmlFor="inputLastName">First Name</label>
          <input type="text" onChange={handleLasttNameChange} className="form-control" id="inputLasttName"  placeholder="Enter your Last Name"/>
        </div>
      </section>
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

      <button type="submit"  className="btn btn-primary" onClick={handleSubmit}>Submit</button>
      
  </div>
  );
}


export default App