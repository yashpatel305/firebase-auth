import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { auth } from './firebase'
import { useNavigate, Link } from 'react-router-dom'
import './SignUp.css'

function SignUp() {
    const [email,setemail]=useState('')
    const [password,setpassword]=useState('')

    const navigate=useNavigate()
    
    const handleSubmit=async(e)=>{
      e.preventDefault();
      try{
          await createUserWithEmailAndPassword(auth,email,password)
        navigate("/Home")
      }
      catch(err){
        alert(err)
      }
    }
  return (
    <div className="signup-page">
      <div className="signup-container">
        <h1 className="signup-title">Create account</h1>
        <form className="signup-form" action="" onSubmit={handleSubmit}>
          <input
            className="signup-input"
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e)=>{setemail(e.target.value)}}
            placeholder="Email"
          />

          <input
            className="signup-input"
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e)=>{setpassword(e.target.value)}}
            placeholder="Password"
          />
          <button className="signup-button" type='submit'>Sign up</button>
        </form>
        <div className="signin-row" style={{ marginTop: 12, textAlign: 'center' }}>
          <span className="signin-text">Already have an account?</span>{' '}
          <Link className="signin-link" to="/">Sign in</Link>
        </div>
      </div>
    </div>
  )
}

export default SignUp

