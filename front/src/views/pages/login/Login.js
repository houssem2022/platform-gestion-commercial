import React, { useState,useEffect } from 'react'
import classes from './Login.css';
import Input from '../../UI/Input/Input';
import Button from '../../UI/Button/Button';
import { Link, Redirect } from 'react-router-dom'
import CIcon from '@coreui/icons-react'

import TheContent from './../../../containers/TheContent'

import TheContent_client from './../../../containers/TheContent_client'
import TheFooter from './../../../containers/TheFooter'
import TheHeader from './../../../containers/TheHeader'
import TheHeaderDropdown from './../../../containers/TheHeaderDropdown'
import TheHeaderDropdownMssg from './../../../containers/TheHeaderDropdownMssg'
import TheHeaderDropdownNotif from './../../../containers/TheHeaderDropdownNotif'
import TheHeaderDropdownTasks from './../../../containers/TheHeaderDropdownTasks'
import TheSidebar from './../../../containers/TheSidebar'
import TheLayout_client from './../../../containers/TheLayout_client'
import TheLayout from './../../../containers/TheLayout'


import {
    CAlert,
    CButton,
    CCard,
    CCardBody,
    CCardGroup,
    CCol,
    CContainer,
    CForm,
    CInput,
    CInputGroup,
    CInputGroupPrepend,
    CInputGroupText,
    CRow,
    CSidebarBrand,
    CImg
  } from '@coreui/react'
  import fire from '../../../firebase';


const Login =()=>{







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



  const handleLogin = () =>{
    
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
     
          <div className="c-app c-default-layout flex-row align-items-center">
          <CContainer>
            <CRow className="justify-content-center">
              <CCol md="8">
                <CCardGroup>
                  <CCard className="p-4">
                    <CCardBody>
                      <CForm>
                        <h1>Login</h1>
                        <p className="text-muted">Sign In to your account</p>
                        <CInputGroup className="mb-3">
                          <CInputGroupPrepend>
                            <CInputGroupText>
                              <CIcon name="cil-user" />
                            </CInputGroupText>
                          </CInputGroupPrepend>
                          <CInput 
                          type="text" 
                          autoFocus
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                           />
                          
                        </CInputGroup>
                          <p className={classes.error}>
                              {emailError}     
                          </p>
                        <CInputGroup className="mb-4">
                          <CInputGroupPrepend>
                            <CInputGroupText>
                              <CIcon name="cil-lock-locked" />
                            </CInputGroupText>
                          </CInputGroupPrepend>
                          <CInput 
                          type="password" 
                          required
                          value={password}
                          onChange={(e)=>setPassword(e.target.value)}
                          />
  
                        </CInputGroup>
                        <p className={classes.error}>{passwordError}</p>
  
                        <CRow>
                            {
                               <>
                               <CCol xs="6">
                               <CButton onClick={handleLogin} color="primary" className="px-4">Sign in</CButton>
                               </CCol>
                              
                           </>
           
                            }
                    
                        </CRow>
                      </CForm>
                    </CCardBody>
                  </CCard>
                  <CCard className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                    <CCardBody className="text-center">
                      <div>
                      <CSidebarBrand className="d-md-down-none"  >
                        <CImg
                                src={'../avatars/logo2.png'}
                                width="100%" height="100%"

                              />
                      
                      </CSidebarBrand>
                        <p><b>La meilleur</b> application web pour la gestion commercial integrant un systéme de <b>recommandation</b> developpé</p>
                        
                       
                      </div>
                    </CCardBody>
                  </CCard>
                </CCardGroup>
              </CCol>
            </CRow>
          </CContainer>
        </div>
    )
};


/*

                             <>
                                 <CCol xs="6">
                                 <CButton onClick={handleSignup} color="primary" className="px-4">register</CButton>
                                 </CCol>
                                 <CCol xs="6" className="text-right">
                                 <CButton onClick={()=>setHasAccount(!hasAccount)} color="link" className="px-0">sign in</CButton>
                                 </CCol>
                              </>   


                                 <>
                             <CCol xs="6">
                             <CButton onClick={handleLogin} color="primary" className="px-4">Sign in</CButton>
                             </CCol>
                             <CCol xs="6" className="text-right">
                             <CButton onClick={()=>setHasAccount(!hasAccount)} color="link" className="px-0">register</CButton>
                             </CCol>
                         </>

*/
export default Login;
