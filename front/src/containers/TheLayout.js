import React, { useState,useEffect } from 'react'
import TheContent from './TheContent'
import TheFooter from './TheFooter'
import TheHeader from './TheHeader'
import TheHeaderDropdown from './TheHeaderDropdown'
import TheHeaderDropdownMssg from './TheHeaderDropdownMssg'
import TheHeaderDropdownNotif from './TheHeaderDropdownNotif'
import TheHeaderDropdownTasks from './TheHeaderDropdownTasks'
import Login from '../views/pages/login/Login';

import TheSidebar from './TheSidebar'

import {Redirect} from "react-router-dom";
import fire from '../firebase';
import jwtDecode from "jwt-decode";
import { CButton } from '@coreui/react'


const TheLayout = ({is_admin ,store}) => {


  const [user,setUser]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [emailError,setEmailError]=useState("");
  const [passwordError,setPasswordError]=useState("");
  const [hasAccount,setHasAccount]=useState(false);

const clearInputs=()=>{
  setEmail('');
  setPassword('');
}

const clearErrors =()=>{
  setEmailError('');
  setPasswordError('');

}



  const handlelogin = () =>{
    
    clearErrors();
    fire
    .auth()
    .signInWithEmailAndPassword(email,password)
    .catch((err)=>{
      switch(err.code){
        case "auth/invalid-email":
        case "auth/user-disabled":
        case "auth/user-not-found":
          setEmailError(err.message);
          break;
        case "auth/wrong-password":
          setPasswordError(err.message);
          break;
      }
      
    });
  };

  const handleSignup=()=>{
    clearErrors();

    fire
    .auth()
    .createUserWithEmailAndPassword(email,password)
    .catch((err)=>{
    
      switch(err.code){
        case "auth/email-already-in-use":
        case "auth/INVALID_EMAIL":
          setEmailError(err.message);
          break;
        case "auth/weak-password":
          setPasswordError(err.message);
          break;
      }
      
    });
  };

  const handlelogout=()=>{
    fire.auth().signOut();
  };

  const authListener =()=>{
    fire.auth().onAuthStateChanged((user)=>{
      if(user){
        clearInputs();
        setUser(user);
      }else{
        setUser("");
      }
    });
  };
  useEffect(()=>{
    authListener();
  }, []);



 

  return (
    <div>
    {
      user ? (
        <div>
    
        <div className="c-app c-default-layout">
          <TheSidebar store={store} email={email}/>
          <div className="c-wrapper">
            <TheHeader email={email} handlelogout={handlelogout}/>
            <div className="c-body">
              <TheContent store={store}/>
            </div>
          </div>
        </div>
    
    </div>
      ):(
        <Login 

   
    email={email} 
    setEmail={setEmail} 
    password={password} 
    setPassword={setPassword} 
    handlelogin={handlelogin}
    handleSignup={handleSignup}
    handlelogout={handlelogout}
    setHasAccount={setHasAccount}
    hasAccount={hasAccount}
    emailError={emailError}
    passwordError={passwordError}
    />
      )
    }
    </div>
 
  
  )
}

export default TheLayout
