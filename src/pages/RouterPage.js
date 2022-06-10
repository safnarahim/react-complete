import React from 'react'
import{BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Signup from './Signup'

export default function RouterPage()
{

    return(

        <div>
<Router>

    <Routes>

<Route path="/" element={<Home/>}exact />
<Route path="/Signup" element={<Signup/>} />
<Route path="/Login" element={<Login/>}
 />

    </Routes>

</Router>

        </div>
    )
}