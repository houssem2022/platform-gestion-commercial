import React from 'react'
import {
  CBadge,
  CButton,
  CCard,
  CCardHeader,
  CCol,
  CDataTable,
  CCardBody,
  CCardFooter,
  CCollapse,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CFade,
  CForm,
  CFormGroup,
  CFormText,
  CValidFeedback,
  CInvalidFeedback,
  CTextarea,
  CInput,
  CInputFile,
  CInputCheckbox,
  CInputRadio,
  CInputGroup,
  CInputGroupAppend,
  CInputGroupPrepend,
  CDropdown,
  CInputGroupText,
  CLabel,
  CSelect,
  CRow,
  CImg,
  CSwitch,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { DocsLink } from 'src/reusable'
import axios from "axios"
import  { useState, useEffect } from 'react';

const fields = ['nom','email', 'Num_tel','ville'];



const BasicForms = () => {
  const [collapsed, setCollapsed] = React.useState(true)
  const [showElements, setShowElements] = React.useState(true)
 
  const [modal, setModal] = useState(true)
  const [large, setLarge] = useState(false)
  const [small, setSmall] = useState(false)
  const [primary, setPrimary] = useState(false)
  const [success, setSuccess] = useState(false)
  const [warning, setWarning] = useState(false)
  const [danger, setDanger] = useState(false)
  const [info, setInfo] = useState(false)

  const [listfour,setlistfour]=useState({
    fournisseur:[]
  })
  
  const update=()=>{
      axios.get("http://localhost:3001/client")
      .then(response =>{
        setlistfour({
          fournisseur:response.data
        })
      })
      .catch((err)=>{
        //alert("Hello! I am an alert box!");
        setDanger(!danger)
      })
  }
  
  function recuperer_gender()
  {
    var total = [];
    var ChoixCd = document.getElementById("gender");
    for(let i=0;i<ChoixCd.options.length;i++)
    { 
      if (ChoixCd.options[i].selected)
      { 
        total = [ChoixCd.options[i].value] + total;
      }
    }
  
    return total;
  }

const reset=()=>{
  document.getElementById("nom").value="";
  document.getElementById("email").value="";
  document.getElementById("adresse").value="";
}
const valider=()=>{
  var nom=document.getElementById("nom").value;
  var email=document.getElementById("email").value;
  var adresse=document.getElementById("adresse").value;
  var num_tel=document.getElementById('tel').value;

  var expressionReguliere = /^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;
  
  if(nom.replace(/ /g, "")==""){
    alert("nom n'est pas valide");
    document.getElementById('nom').value="";
    return false;
  };
  if (!(expressionReguliere.test(email)))
  {
    alert("email invalide!!!!")
    document.getElementById('email').value="";
    return false;
  }
  if(adresse.replace(/ /g, "")==""){
    alert("adresse n'est pas valide");
    document.getElementById('adresse').value="";
    return false;
  };
  if(isNaN(num_tel) == true){
    alert("num tel n'est pas valide");
    return false;
  };



return true

} 

  const handleSubmit  = () => {
    if(valider()==true){
  
      
      var num_tel=document.getElementById('tel').value;
      var nom=document.getElementById("nom").value;
      var email=document.getElementById("email").value;
      var adresse=document.getElementById("adresse").value;
 
      axios.post("http://localhost:3001/client",{
        nom:nom,
        email:email,
        Num_tel:num_tel,
        ville :adresse,
      }).then((res)=>{
        
          alert("enregister avec succée");

        
      }).catch((res)=>{
       if(res.response.data.nom){
          alert(res.response.data.nom);      
        }
        if(res.response.data.email){
          alert(res.response.data.email);      
        }
     

      })
    }
  }

 
  return (
    <>
  
   
      <CRow>
        <CCol xs="12" md="6">
          <CCard>
            <CCardHeader>
              Ajouter Client 
            
            </CCardHeader>
            
            <CCardBody>
              <CForm  method="post" encType="multipart/form-data" className="form-horizontal">
               
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="text-input">Nom et Prenom</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput id="nom" name="text-input" placeholder="Nom et Prenom" />
                    <CFormText className="help-block">Please enter your name</CFormText>

                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="email-input">Email Input</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput type="email" id="email" name="email-input" placeholder="Enter Email" autoComplete="email"/>
                    <CFormText className="help-block">Please enter your email</CFormText>
                  </CCol>
                </CFormGroup>

                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="address-input">Address</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput type="text" id="adresse" name="address-input" placeholder="Enter Address" />
                    <CFormText className="help-block">Please enter your address</CFormText>
                  </CCol>
                </CFormGroup>

               
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="text-input">Num tel</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput id="tel" name="text-input" placeholder="Enter tel" />
                    <CFormText className="help-block">Please enter tel</CFormText>

                  </CCol>
                </CFormGroup>

                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="textarea-input">Description</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CTextarea 
                      name="textarea-input" 
                      id="description" 
                      rows="4"
                      placeholder="Content..." 
                    />
                  </CCol>
                </CFormGroup>
               
              </CForm>
            </CCardBody>
            <CCardFooter >
              <CButton type="submit" size="sm" color="primary" onClick={handleSubmit}><CIcon name="cil-scrubber" /> Submit</CButton>
              <CButton type="reset" size="sm" color="danger" onClick={reset}><CIcon name="cil-ban" /> Reset</CButton>
            </CCardFooter>
          </CCard>
          
        </CCol>
        <CCol xs="12" md="6">
          <CCard>
            <CCardHeader>
              <CButton type="submit" size="sm" color="primary" onClick={update}>afficher les liste des factures</CButton>

            </CCardHeader>
            <CCardBody>
            <CDataTable
              items={listfour.fournisseur}
              fields={fields}
              hover
              striped
              bordered
              size="sm"
              itemsPerPage={10}
              pagination
             
            />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <CModal 
              show={danger} 
              onClose={() => setDanger(!danger)}
              color="danger"
            >
              <CModalHeader closeButton>
                <CModalTitle>connection failed</CModalTitle>
              </CModalHeader>
              <CModalBody>
               Data base server is curently down for maintenance
              </CModalBody>
            
      </CModal>
   
    </>
  )
}

export default BasicForms
