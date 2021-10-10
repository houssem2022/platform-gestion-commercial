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
    var four=document.getElementById('fournisseur')
    var date=document.getElementById('date')



    doc.setTextColor(160, 160, 168);
    doc.text(300,100,'COMMANDE FOURNISSEUR');
    doc.setTextColor(61, 61, 61);
    doc.setFontSize(13)
    doc.setLineWidth(3); 


    doc.line(60, 130, 500, 130);

    doc.text(80, 150, "fournisseur                       "+four.value)
    doc.text(80, 180, "Numero mobile            95846254 ")
    doc.text(80, 210, "Adresse                   msaken sousse")
    doc.text(80, 240, "date de document            "+date.value)
   
    doc.line(60, 310, 500, 310);

   
    doc.text(80, 330, "Designetion")
    doc.text(180, 330, "Quantité ")
    doc.text(280, 330, "Prix HT  ")
    doc.text(380, 330, "Total HT")

doc.setFontSize(10)
var marginleft=80;
var margintop=350
var array=[]
var list=[]
var id_sec=""
for (let index1 = 1; index1 <= id; index1++) {
    
    for (let index0 = 1; index0 < 5; index0++) {
        id_sec=index1+""+index0;
        doc.text(marginleft, margintop, document.getElementById(id_sec).value);
    
        marginleft+=100;
    }
    margintop+=30
    marginleft-=400
}

doc.line(60, margintop, 500, margintop);


doc.setFontSize(13)
var tot_HT=0
var prix_timbre=0.6
var netapayer=0
for (let index2 = 1; index2 <= id; index2++) {

tot_HT+=  parseInt( document.getElementById(index2+"4").value,10);

}
netapayer=tot_HT+prix_timbre

marginleft+=300
margintop+=30
doc.text(marginleft, margintop, "Totat_HT");
doc.text(marginleft+80, margintop, tot_HT+"");
margintop+=30
doc.text(marginleft, margintop, "Timbre fiscal");
doc.text(marginleft+80, margintop, prix_timbre+"");
margintop+=30
doc.text(marginleft, margintop, "Net à payer");
doc.text(marginleft+80, margintop, netapayer+"");

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
 
const settotalhtonchangequantité= (val)=>{

  var var1=document.getElementById(val).value;
  var var2=document.getElementById(val[0]+"3").value;

  if( var1 != "" & var2 != "") {
    document.getElementById(val[0]+"4").value= var1*var2
  }else{
    document.getElementById(val[0]+"4").value=NaN
  }
}
const settotalhtonchangeprixht= (val)=>{

  var var1=document.getElementById(val).value;
  var var2=document.getElementById(val[0]+"2").value;

  if( var1 != "" & var2 != "") {
    document.getElementById(val[0]+"4").value= var1*var2
  }else{
    document.getElementById(val[0]+"4").value= NaN
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
    document.getElementById("fournisseur").value="";
    document.getElementById("date").value="";
    document.getElementById("cnd_de_reglement").value="";
    document.getElementById("remarques").value="";

  }
  const valider=()=>{
    var fournisseur=document.getElementById("fournisseur").value;
    var date=document.getElementById("date").value;
    var cnd_de_reglement=document.getElementById("cnd_de_reglement").value;
  
    
    if(fournisseur.replace(/ /g, "")==""){
      alert("fournisseur invalide");
      document.getElementById('fournisseur').value="";
      return false;
    };
  
    if(date.replace(/ /g, "")==""){
      alert("date n'esy pas choisi");
      document.getElementById('date').value="";
      return false;
    };
    if(cnd_de_reglement.replace(/ /g, "")==""){
      alert("cnd_de_reglement n'est pas valide");
      document.getElementById('cnd_de_reglement').value="";
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
                Créer commande
           
            </CCardHeader>
            
            <CImg
              src={'avatars/logo.png'}
              width="80%" height="30%"
              

            />
           
            <CCardBody>
              <CForm  method="post" encType="multipart/form-data" className="form-horizontal">
               
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="text-input">fournisseur  </CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput id="fournisseur" name="fournisseur" placeholder="fournisseur" />
                    

                  </CCol>
                </CFormGroup>
       

                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="date-input">Date commande</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput type="date" id="date" name="date-input" placeholder="date" />
                  </CCol>
                </CFormGroup>
                
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="text-input">condition de réglement </CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                   <CInput id="cnd_de_reglement" name="cnd_de_reglement" placeholder="en jours" />
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
                                    <CInput id="12" name="Quantité" onChange={()=>settotalhtonchangequantité("12")} placeholder="Quantité" />
                            </CFormGroup>
                       </td>
                       <td>
                       <CFormGroup >
                            <CLabel htmlFor="text-input">Prix HT  </CLabel>
                            <CInput id="13"  name="Prix" onChange={()=>settotalhtonchangeprixht("13")} placeholder="Prix HT" />
                         </CFormGroup>
                        </td>
                        <td>
                        <CFormGroup >
                            <CLabel htmlFor="text-input">Total HT  </CLabel>
                            <CInput id="14"  name="Total" placeholder="Total HT " />
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
                                   
                            <CInput id="22"  name="Quantité" onChange={()=>settotalhtonchangequantité("22")} placeholder="Quantité" />
                            </CFormGroup></td>
                       <td><CFormGroup >
                            <CInput id="23"  name="Prix" onChange={()=>settotalhtonchangeprixht("23")} placeholder="Prix HT" />
                         </CFormGroup></td>
                       <td>
                       <CFormGroup >
                            <CInput id="24"  name="Total" placeholder="Total HT " />
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
                                   
                                    <CInput id="32"  name="Quantité" onChange={()=>settotalhtonchangequantité("32")} placeholder="Quantité" />
                            </CFormGroup></td>
                       <td><CFormGroup >
                            <CInput id="33"  name="Prix" onChange={()=>settotalhtonchangeprixht("33")} placeholder="Prix HT" />
                         </CFormGroup></td>
                       <td>
                       <CFormGroup >
                            <CInput id="34"  name="Total" placeholder="Total HT " />
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
                                   
                                    <CInput id="42"  name="Quantité" onChange={()=>settotalhtonchangequantité("42")} placeholder="Quantité" />
                            </CFormGroup></td>
                       <td><CFormGroup >
                            <CInput id="43"  name="Prix" onChange={()=>settotalhtonchangeprixht("43")} placeholder="Prix HT" />
                         </CFormGroup></td>
                       <td>
                       <CFormGroup >
                            <CInput id="44"  name="Total" placeholder="Total HT " />
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
                                   
                            <CInput id="52"  name="Quantité" onChange={()=>settotalhtonchangequantité("52")} placeholder="Quantité" />
                            </CFormGroup>
                       </td>
                       <td><CFormGroup >
                            <CInput id="53"  name="Prix" onChange={()=>settotalhtonchangeprixht("53")}placeholder="Prix HT" />
                         </CFormGroup></td>
                       <td>
                       <CFormGroup >
                            <CInput id="54"  name="Total" placeholder="Total HT " />
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
                                   
                                    <CInput id="62" name="Quantité" onChange={()=>settotalhtonchangequantité("62")} placeholder="Quantité" />
                            </CFormGroup></td>
                       <td><CFormGroup >
                            <CInput id="63" name="Prix" onChange={()=>settotalhtonchangeprixht("63")} placeholder="Prix HT" />
                         </CFormGroup></td>
                       <td>
                       <CFormGroup >
                            <CInput id="64" name="Total" placeholder="Total HT " />
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

