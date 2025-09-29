import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useState } from 'react'
import {auth,googleProvider} from "./firebase"
import "./Login.css"
function Login() {
    const [email,setemail]=useState('')
    const [password,setpassword]=useState('')

    const navigate=useNavigate()

    const handleSubmit=async(e)=>{
       e.preventDefault();
        try{
            await signInWithEmailAndPassword(auth,email,password)

            navigate("/Home")
        }
        catch(err){
            alert(err)
        }
    }
    const handleGoogleLogin=async(e)=>{
        e.preventDefault();
        try {
           await signInWithPopup(auth,googleProvider)
           navigate("/Home")
        } catch (error) {
            console.log(error);
            
        }
    }
  return (
    <div className="login-page">
      <div className="login-container">
        <h1 className="login-title">Login</h1>
        <form className="login-form" action="" onSubmit={handleSubmit}>
          <input
            className="login-input"
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e)=>{setemail(e.target.value)}}
            placeholder="Email"
          />
          <input
            className="login-input"
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e)=>{setpassword(e.target.value)}}
            placeholder="Password"
          />
          <button className="login-button" type='submit'>Submit</button>
        </form>
        <div style={{ marginTop: 12 }}>
          <button className="google-button" onClick={handleGoogleLogin}>Sign in with Google</button>
        </div>
      <div className="signup-row">
        <span className="signup-text">Don't have an account?</span>{' '}
        <Link className="signup-link" to="/SignUp">Create one</Link>
      </div>
      </div>
    </div>
  )
}

export default Login