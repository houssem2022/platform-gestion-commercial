import React,{ useState,useEffect } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow,
  CSelect
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import fire from '../../../firebase'
import axios from "axios"
import classes from './register.css';

const Register = () => {

  const [username,setUsername]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [emailError,setEmailError]=useState("");
  const [passwordError,setPasswordError]=useState("");
  const [num_tel,setNum_tel]=useState("");
  const [adresse,setAdresse]=useState("");
  const [ville,setVille]=useState("");
  const [register,setRegister]=useState(false);
  var Verified=true;

  
  const clearInputs=()=>{
    setUsername('');
    setEmail('');
    setPassword('');
    setNum_tel('');
    setAdresse('');
    setVille('');
  }
  
  const clearErrors =()=>{
    setEmailError('');
  }

  const handleSignup=()=>{
    clearErrors();
    fire
    .auth()
    .createUserWithEmailAndPassword(email,password)
    .catch((err)=>{

      Verified=false;
      console.log(Verified);
      
      var err_Code = err.code;
      var errorMessage = err.message
      setEmailError(errorMessage);
      console.log(errorMessage); 

      }    
    ); 
    enregistrer();
    clearInputs();
  };

  const enregistrer=()=>{
    if (Verified == true){
        console.log("registred in mongodb");
    
        axios.post("http://localhost:3001/api/v1/users",{
          username:username,
          email:email,
          tel:num_tel,
          adresse:adresse,
          ville:ville
        
            })
          
        Verified=false;
        setRegister(true);  
        alert("registrer avec succée  ")
    }
  
  }

  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
       
          
        <CRow className="justify-content-center">
          <CCol md="9" lg="7" xl="6">
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm>
                { register ? (
                    <>
                    <p className={classes.error} >
                         
                    </p>
                    </>
                  ):(
                    <p></p>
                  )
                  

                  }
                  <h1>Register</h1>
                  <p className="text-muted">Créez votre compte</p>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-user" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput id="username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" autoComplete="username" />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>@</CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput id="email" type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" autoComplete="email" />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-lock-locked" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" autoComplete="new-password" />
                  </CInputGroup>
                  
                  <CInputGroup className="mb-4">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-lock-locked" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput id="password_repeat" type="password"  placeholder="Repeat password" autoComplete="new-password" />
                  </CInputGroup>
                  
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-phone" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CSelect custom name="role" id="role">
                      <option value="admin">admin</option>     
                      <option value="resp_achat">resp achat</option>     
                      <option value="resp_vente">resp vente</option>     
                      <option value="gerer_stock">gerer stock</option>     

                    </CSelect>
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-phone" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput id="tel" type="text" value={num_tel} onChange={(e) => setNum_tel(e.target.value)} placeholder="num_tel" autoComplete="num télephone" />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-home" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput id="adresse" type="text" value={adresse} onChange={(e) => setAdresse(e.target.value)} placeholder="adresse" autoComplete="adresse actuelle" />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-location-pin" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput id="ville" type="text" value={ville} onChange={(e) => setVille(e.target.value)} placeholder="ville" autoComplete="ville" />
                  </CInputGroup>
                  <CButton onClick={handleSignup} color="success" block>Create Account</CButton>
                </CForm>
              </CCardBody>
              
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Register
