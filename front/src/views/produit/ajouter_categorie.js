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
import e from 'cors'


const fields = ['nom','description'];


const BasicForms = () => {
  const [collapsed, setCollapsed] = React.useState(true)
  const [showElements, setShowElements] = React.useState(true)
 

const [listfour,setlistfour]=useState({
  name:[]
})
const [listcat,setlistcat]=useState({
  name:[]
})


const get_cat_list=()=>{
  var listname=[];

  axios.get("http://localhost:3001/categorie")
  .then(response =>{


  for (let index = 0; index < response.data.length; index++) {
      listname = listname.concat( [response.data[index].nom_categorie]);
      
  };

 // console.log(listname);
  setlistcat({name:listname});

 // console.log(listfour);

});
}
const  verifie=()=>{

 
  get_cat_list();
  console.log(listfour);

    var name2=document.getElementById('nom_categorie').value;
    if(name2.replace(/ /g, "")==""){
        alert("nom du categorie n'est pas valide");
        document.getElementById('nom_categorie').value="";
        return false;
    };
    if (listcat.name.indexOf(name2) !== -1 ){    
        alert("categorie already exist");

        return false;
    }else{
        return true;
    }
    

}


useEffect(()=>{
  get_cat_list();
 // update();
}, []);

const update=()=>{
    axios.get("http://localhost:3001/categorie")
    .then(response =>{
      setlistfour({
        name:response.data
      })
    })
    .catch((err)=>{
      //alert("Hello! I am an alert box!");
      setDanger(!danger)
    })
}

const [modal, setModal] = useState(true)
const [large, setLarge] = useState(false)
const [small, setSmall] = useState(false)
const [primary, setPrimary] = useState(false)
const [success, setSuccess] = useState(false)
const [warning, setWarning] = useState(false)
const [danger, setDanger] = useState(false)
const [info, setInfo] = useState(false) 




  const handleSubmit  = () => {
  /*  if(verifie()== true){
        axios.post("http://localhost:3001/categorie",{
          nom: document.getElementById('nom_categorie').value,
          description:document.getElementById('description').value
      });
    //  alert('categorie added successfully');


    } 

 */   
   
    if(verifie()== true){
     

 
      axios.post("http://localhost:3001/categorie",{
        nom: document.getElementById('nom_categorie').value,
        description:document.getElementById('description').value
      }).then((res)=>{
        
          alert("enregister avec succée");

        
      }).catch((res)=>{
       if(res.response.data.nom){
          alert(res.response.data.nom);      
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
              Ajouter Catégorie
              
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
               
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="text-input">Nom du categorie</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput id="nom_categorie"  name="text-input" placeholder="Catégorie" />

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
            <CCardFooter>
              <CButton type="submit" size="sm" color="primary" onClick={handleSubmit}><CIcon name="cil-scrubber" /> Submit</CButton>
              <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban" /> Reset</CButton>
            </CCardFooter>
          </CCard>
          
        </CCol>
        <CCol xs="12" md="6">
          <CCard>
            <CCardHeader>
              <CButton type="submit" size="sm" color="primary" onClick={update}><CIcon name="cil-scrubber" /> affiche liste categories</CButton>

            </CCardHeader>
           
            <CCardBody>
            <CDataTable
              items={listfour.name}
              fields={fields}
              hover
              striped
              bordered
              size="sm"
              itemsPerPage={5}
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
