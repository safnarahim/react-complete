import React, { useState } from "react";
import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom'
function Signup() {
  let navigate = useNavigate()
  const [Name, setName] = useState('')
  const [Email, setEmail] = useState('')
  const [Password, setPassword] = useState('')
  async function registerUser(event) {
    event.preventDefault()
    const response = await fetch('http://localhost:3001/api/Signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        Name,
        Email,
        Password                                      
      }),
    })
    const data = await response.json()
    if (data.status === 'ok') {
      navigate("/Login")
    }
    else {
      alert('This email already in use. Use a different email !!')
    }
  }

  return(

    <React.Fragment>
       

    <div className="container" style={{backgroundColor:"#c4d70f",height:"620px", clipPath: "polygon(0 0,100% 0,100% 75%,0 100%)"}}>
<h1 >Sign up.</h1>
<h4><br>Its free and only takes a minute</br></h4>
<form onSubmit={registerUser}>
<label><br/>Name</label><br/>
<input type="Name" autoComplete='off' name='Name' value={Name} onChange={(e) => setName(e.target.value)} placeholder="" style={{borderColor:"white"}}/><br/>
<label><br/>Email</label><br/>
<input type="Email" autoComplete='off' name='Email' value={Email} onChange={(e) => setEmail(e.target.value)} placeholder="" style={{borderColor:"white"}}/><br/>
<label><br/>Password</label><br/>
<input type="Password" autocomplete='off' name='Password' value={Password} onChange={(e) => setPassword(e.target.value)} placeholder="" style={{borderColor:"white"}}/><br/><br/>
<div><button style={{borderColor:"white"}}>Sign In</button></div>
<button type="submit" style={{borderColor:"white"}}>Submit</button>
</form>
<p>
    <br/>
  By clicking the Sign Up button, you agree to our<br/> 
  <a href="/">Terms and Conditions</a> and <a href="/">Policy Privacy</a>
  Already have an account?  < Link to="/Login" style={{textDecoration:"none",paddingLeft:"10px"}}>Login</Link>
</p>

   </div>
    </React.Fragment>

);

}
export default Signup;