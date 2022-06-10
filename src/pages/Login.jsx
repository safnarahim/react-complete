import React,{ useState } from 'react'


  function Login(){


const [Email, setEmail] = useState('')
const [Password,setPassword] = useState('')
async function loginUser(event)
  {
      event.preventDefault()

      const response = await fetch('http://localhost:3001/api/Login', {

      method:'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body:JSON.stringify({
          Email,
          Password,
      }),
     })

const data = await response.json()
if (data.user) {
localStorage.setItem('token', data,user)
alert('login successful')
window.location.href = "//localhost:3001/"

}
else{
    alert('Please check your username and password ')
}
  }


return(

    <React.Fragment>
       

    <div className="container" style={{backgroundColor:"#c4d70f",height:"620px", clipPath: "polygon(0 0,100% 0,100% 75%,0 100%)"}}>
<h1 style={{paddingTop:"80px"}} >Hello..</h1>
<h4><br>Login</br></h4>
<form onSubmit={loginUser}>

<label><br/>Email</label><br/>
<input type="Email" autoComplete='off' name='Email' value={Email} onChange={(e) => setEmail(e.target.value)} placeholder="" style={{borderColor:"white"}}/><br/>
<label><br/>Password</label><br/>
<input type="Password" autocomplete='off' name='Password' value={Password} onChange={(e) => setPassword(e.target.value)} placeholder="" style={{borderColor:"white"}}/><br/>
<div><button style={{borderColor:"white"}}>Sign In</button></div>
</form>
<p>
    <br/>
    If you doesn't have an account then < Link to="/signup">Sign Up</Link> <br/>
    <a href="/"> Terms and Conditions </a> and <a href="/">Policy Privacy</a>

</p>

   </div>
    </React.Fragment>

);

}
export default Login;