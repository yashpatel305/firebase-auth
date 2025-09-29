import { useEffect, useState } from 'react'
import { BrowserRouter as Router,Routes, Route, Navigate } from 'react-router-dom'
import SignUp from './components/SignUp'
import Login from './components/Login'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './components/firebase'
import Home from './Home'
function App() {
 
  const [user,setuser]=useState(null)

    // onAuthStateChanged check that user exist or not

    useEffect(()=>{
      
      onAuthStateChanged(auth,(x)=>{
        setuser(x)
        console.log(x);
        
      });
    },[])
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}></Route>
          <Route path="/SignUp" element={<SignUp/>}></Route>
          <Route path="/Home" element={user ? <Home/> : <Login/>}></Route>
          <Route path="/dashboard" element={<Navigate to={user ? "/Home" : "/"} replace />} />
          <Route path="*" element={<Navigate to={user ? "/Home" : "/"} replace />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
