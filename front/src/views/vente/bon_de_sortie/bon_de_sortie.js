import React from 'react'
import html2pdf from 'react'
import jsPDF from 'jspdf'
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
import { DocsLink } from '../../../reusable'

import axios from "axios"
import  { useState, useEffect } from 'react';

const fields = ['name','image', 'countInStock'];










const BasicForms = () => {
  const [collapsed, setCollapsed] = React.useState(true)
  const [showElements, setShowElements] = React.useState(true)


const [listfour,setlistfour]=useState({
  fournisseur:[]
})

var id=1;

const update=()=>{
    axios.get("http://localhost:3001/api/v1/products")
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

const calculertotal=()=>{
  var tot=0;
  for (let index = 1; index <= id; index++) {
    if( document.getElementById(index+"4").value != NaN){
      tot+= document.getElementById(index+"4").value;
    }
    
  }
  return tot


}

const enregistrer=()=>{
  axios.post("http://localhost:3001/api/v1/products",{
name:document.getElementById("fournisseur").value,
image:document.getElementById("date-input").value,
countInStock:calculertotal()
  })

}



  const generatePDF = () => {
    var doc = new jsPDF('p', 'pt');
    var magasinier=document.getElementById('magasinier')
    var date=document.getElementById('date')
    var destinataire=document.getElementById('destinataire')
    var adresse=document.getElementById('adresse')




    doc.setTextColor(160, 160, 168);
    doc.text(300,100,'BON DE SORTIE');
    doc.setTextColor(61, 61, 61);
    doc.setFontSize(13)
    doc.setLineWidth(3); 


    doc.line(60, 130, 500, 130);

    doc.text(80, 150, "Magasinier                             "+magasinier.value)
    doc.text(80, 180, "Destinataire                           "+destinataire.value)
    doc.text(80, 210, "Adresse                                "+adresse.value)
    doc.text(80, 240, "Date de document                 "+date.value)
    doc.text(80, 270, "N° Document           ")
   
    doc.line(60, 310, 500, 310);

   
    doc.text(180, 330, "Designetion")
    doc.text(380, 330, "Quantité ")
  

doc.setFontSize(10)
var marginleft=180;
var margintop=350
var array=[]
var list=[]
var id_sec=""
for (let index1 = 1; index1 <= id; index1++) {
    
    for (let index0 = 1; index0 < 3; index0++) {
        id_sec=index1+""+index0;
        doc.text(marginleft, margintop, document.getElementById(id_sec).value);
    
        marginleft+=200;
    }
    margintop+=30
    marginleft-=400
}

doc.line(60, margintop, 500, margintop);
doc.text(80, margintop+50, "Signature du magasinier :")


doc.save('demo.pdf')
}   



  const ajouter_ligne  = () => {
    if(id<6){
        id=id+1;
        var x = document.getElementById(id);
    
        x.style.display = "inline-block";
       
    }
  }
  const supprimer_ligne  = () => {
    if(id>1){
        var x = document.getElementById(id);
    
        x.style.display = "none";
        id=id-1;
    }
  }
 


  const [modal, setModal] = useState(true)
  const [large, setLarge] = useState(false)
  const [small, setSmall] = useState(false)
  const [primary, setPrimary] = useState(false)
  const [success, setSuccess] = useState(false)
  const [warning, setWarning] = useState(false)
  const [danger, setDanger] = useState(false)
  const [info, setInfo] = useState(false)

  const reset=()=>{
    document.getElementById("magasinier").value="";
    document.getElementById("date").value="";
    document.getElementById("destinataire").value="";
    document.getElementById("adresse").value="";

  }
  const valider=()=>{
    var magasinier=document.getElementById("magasinier").value;
    var date=document.getElementById("date").value;
    var destinataire=document.getElementById("destinataire").value;
    var adresse=document.getElementById("adresse").value;

    var listproduit=[];
    var listvide=[["",""],["",""],["",""],["",""],["",""],["",""]]
    for (let i = 1; i < 7; i++) {
      var list=[document.getElementById(i+"1").value,document.getElementById(i+"2").value]
      listproduit.push(list);
    }
    
    
    if(magasinier.replace(/ /g, "")==""){
      alert("nom du magasinier invalide");
      document.getElementById('magasinier').value="";
      return false;
    };
  
    if(date.replace(/ /g, "")==""){
      alert("date n'est pas choisi");
      document.getElementById('date').value="";
      return false;
    };
    if(destinataire.replace(/ /g, "")==""){
      alert("destinataire n'est pas valide");
      document.getElementById('destinataire').value="";
      return false;
    };
    if(adresse.replace(/ /g, "")==""){
      alert("adresse n'est pas valide");
      document.getElementById('adresse').value="";
      return false;
    };
    if(JSON.stringify(listproduit)==JSON.stringify(listvide)){
      alert("pas de produits");
      return false;
    };
  
    
  
  return true
  
  } 
  
    const handleSubmit  = () => {
      if(valider()==true){
        alert("enregistrer avec succée");
        reset();
      }
    }





  return (
    <>
    
    
      <CRow>
        <CCol xs="12" sm="6">
          <CCard>
            <CCardHeader>
                Créer bon de sortie
           
            </CCardHeader>
            
            <CImg
              src={'avatars/logo.png'}
              width="80%" height="30%"
              

            />
           
            <CCardBody>
              <CForm  method="post" encType="multipart/form-data" className="form-horizontal">
               
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="text-input">magasinier  </CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput id="magasinier" name="magasinier" placeholder="magasinier..." />
                    

                  </CCol>
                </CFormGroup>
       

                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="date-input">Date</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput type="date" id="date" name="date" placeholder="date" />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="text-input">Destinataire </CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                   <CInput id="destinataire" name="destinataire" placeholder="destinataire..." />
                  </CCol>
                </CFormGroup>
                
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="text-input">Adresse </CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                   <CInput id="adresse" name="adresse" placeholder="adresse..." />
                  </CCol>
                </CFormGroup>

                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="textarea-input">Remarques</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CTextarea 
                      name="textarea-input" 
                      id="remarques" 
                      rows="3"
                      placeholder="Content..." 
                    />
                  </CCol>
                </CFormGroup>
               
               
              </CForm>
            </CCardBody>
            <CCardFooter >
            <CFormGroup>
              <CButton type="submit" size="sm" color="success"  onClick={handleSubmit}> enregistrer</CButton>
              <CButton type="reset" size="sm" color="danger"  onClick={reset}> reset</CButton>

            </CFormGroup>
            <CFormGroup>
            <CButton type="submit" size="sm" color="primary" id="download" onClick={generatePDF}> download pdf</CButton>

            </CFormGroup>
            </CCardFooter>
          </CCard>
          
        </CCol>
       
    
        <CCol xs="12" sm="6">
          <CCard>
            <CCardHeader>
                produits à commander
           
            </CCardHeader>
            <CCardBody>
              
               <table id="1" >
                   <thead></thead>
                   <tbody>
                   <tr>
                       <td>
                       <CFormGroup >
                                <CLabel htmlFor="text-input">Designation  </CLabel>
                                <CInput id="11" name="Designation" placeholder="Designation" />
                        </CFormGroup>
                       </td>
                       <td>
                        <CFormGroup >
                                    <CLabel htmlFor="text-input">Quantité  </CLabel>
                                    <CInput id="12" name="Quantité"  placeholder="Quantité" />
                            </CFormGroup>
                       </td>
                     
                      
                   </tr>
                   
                 
                   </tbody>
                </table>
                <table id="2" style={{display:'none'}}>
                    <thead></thead>
                    <tbody>
                    <tr >
                       <td>
                       <CFormGroup >
                                <CInput id="21"  name="Designation" placeholder="Designation" />
                        </CFormGroup>
                       </td>
                       <td> <CFormGroup >
                                   
                            <CInput id="22"  name="Quantité"  placeholder="Quantité" />
                            </CFormGroup>
                        </td>
                       

                   </tr>
                    </tbody>
                </table>

                <table id="3" style={{display:'none'}}>
                    <thead></thead>
                    <tbody>
                    <tr >
                       <td>
                       <CFormGroup >
                            <CInput id="31"  name="Designation" placeholder="Designation" />
                        </CFormGroup>
                       </td>
                       <td> <CFormGroup >
                                   
                            <CInput id="32"  name="Quantité"  placeholder="Quantité" />
                            </CFormGroup>
                        </td>
                       

                   </tr>
                    </tbody>
                </table>
                <table id="4" style={{display:'none'}}>
                    <thead></thead>
                    <tbody>
                    <tr >
                       <td>
                       <CFormGroup >
                                <CInput id="41"  name="Designation" placeholder="Designation" />
                        </CFormGroup>
                       </td>
                       <td> <CFormGroup >
                                   
                            <CInput id="42"  name="Quantité"  placeholder="Quantité" />
                            </CFormGroup>
                        </td>
                      

                   </tr>
                    </tbody>
                </table>
                <table id="5" style={{display:'none'}}>
                    <thead></thead>
                    <tbody>
                    <tr >
                       <td>
                       <CFormGroup >
                                <CInput id="51"  name="Designation" placeholder="Designation" />
                        </CFormGroup>
                       </td>
                       <td> <CFormGroup >
                                   
                            <CInput id="52"  name="Quantité"  placeholder="Quantité" />
                            </CFormGroup>
                       </td>
                      

                   </tr>
                    </tbody>
                </table>
                <table id="6" style={{display:'none'}}>
                    <thead></thead>
                    <tbody>
                    <tr >
                       <td>
                       <CFormGroup >
                                <CInput id="61" name="Designation" placeholder="Designation" />
                        </CFormGroup>
                       </td>
                       <td> <CFormGroup >
                                   
                            <CInput id="62" name="Quantité"  placeholder="Quantité" />
                            </CFormGroup>
                        </td>
                      

                   </tr>
                    </tbody>
                </table>

               
            
            </CCardBody>
            <CCardFooter >
             
                <CButton type="submit" size="sm" color="primary" onClick={ajouter_ligne}><CIcon name="cil-scrubber" /> Ajouter produit</CButton>
                <CButton type="submit" size="sm" color="danger" onClick={supprimer_ligne}><CIcon name="cil-scrubber" /> supprimer produit</CButton>

            </CCardFooter>
           
          </CCard>
          
        </CCol>
       
      </CRow>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              <CButton type="submit" size="sm" color="primary" onClick={update}>afficher les liste des commandes</CButton>

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

