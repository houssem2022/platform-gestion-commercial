import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
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
  CDataTable,
CModal,
CModalBody,
CModalHeader,
CModalTitle,
  CSwitch
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { DocsLink } from 'src/reusable'
import axios from "axios"
import  { useState, useEffect } from 'react';




const fields = ['label','stock','prix'];

const BasicForms = () => {
  const [collapsed, setCollapsed] = React.useState(true)
  const [showElements, setShowElements] = React.useState(true)
 
  const [danger, setDanger] = useState(false)

  const [listcat,setlistcat]=useState({
    catnames:[]
  });
  const [listfour,setlistfour]=useState({
    name:[]
  })
  
const afficheproduitlist=()=>{
  axios.get("http://localhost:3001/produit")
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

  const update=()=>{
    axios.get("http://localhost:3001/categorie")
    .then(response =>{

      let listname=[];
      for (let index = 0; index < response.data.length; index++) {
          listname = listname.concat( [response.data[index].nom]);
          
      }
      setlistcat({
        catnames:listname
      })
     
    })
    .catch((err)=>{
      alert("Hello! I am an alert box!");
    })
}
 
const ziiw=()=>{
  update();
  update();

  var s=document.getElementById("categorie");
  s.innerHTML="";
  /*
  var option="";
  for (let index = 0; index < list.length; index++) {
    option=option+"<option value=\""+list[index]+"\">"+list[index]+"</option>"
    
  }
  */
  
  for (let index = listcat.catnames.length-1; index >=0 ; index--) {
    var newoption=document.createElement("option");
    newoption.value=listcat.catnames[index];
    newoption.innerHTML=listcat.catnames[index];
    s.options.add(newoption);
  }
  

};


 // recuperer les choix selectionné dans le categorie 
function recuperer_categories()
{
	let total = [];
	var ChoixCd = document.getElementById("categorie");
	for(let i=0;i<ChoixCd.options.length;i++)
	{ 
		if (ChoixCd.options[i].selected)
		{ 
			total = total.concat([ChoixCd.options[i].value]) ;
		}
  }
 
  
	return total;
}
 // recuperer les choix selectionné dans le marque

function recuperer_marque()
{
	var total = [];
	var ChoixCd = document.getElementById("marque");
	for(let i=0;i<ChoixCd.options.length;i++)
	{ 
		if (ChoixCd.options[i].selected)
		{ 
			total = [ChoixCd.options[i].value] + total;
		}
  }

	return total;
}



const reset =()=>{

document.getElementById('libelle').value="";
document.getElementById('prix').value="";
document.getElementById('taxe').value="";
document.getElementById('stock').value="";
document.getElementById('min').value="";
document.getElementById('max').value="";
var cat=document.getElementById("categorie");
cat.innerHTML="";
var mar=document.getElementById("marque");
mar.innerHTML="";
}



const valider=()=>{
  var libelle=document.getElementById('libelle').value;
  var categories=recuperer_categories();
  var marque=recuperer_marque();
  var prix=document.getElementById('prix').value;
  var taxe=document.getElementById('taxe').value;
  var stock=document.getElementById('stock').value;
  var min=document.getElementById('stock_min').value;
  var max=document.getElementById('max').value;


if(libelle.replace(/ /g, "")==""){
    alert("libelle n'est pas valide");
    document.getElementById('libelle').value="";
    return false;
};
if(categories.length==0){
  alert("aucune categorie selectionné");
  return false;
};
if(marque==[]){
  alert("aucunne marque selectionné");
  return false;
};
if(prix == ""){
  alert("inserer un prix valide");
  document.getElementById('prix').value="";
  return false;
};
if(isNaN(prix) == true){
  alert("inserer un prix valide");
  document.getElementById('prix').value="";
  return false;
};
/* reservé pour le taxe 

if(libelle.replace(/ /g, "")==""){
  alert("nom du categorie n'est pas valide");
  document.getElementById('nom_categorie').value="";
  return false;
};

*/
if(isNaN(stock) == true){
  alert("inserer un stock valide");
  document.getElementById('stock').value="";
  return false;
};
if(stock != parseInt(stock)){
  alert("stock invalide !!! tu doit entrer un entier");
  document.getElementById('stock').value="";
  return false;
};
if(isNaN(min) == true){
  alert("inserer un stock min  valide");
  document.getElementById('min').value="";
  return false;
};
if(min != parseInt(min)){
  alert("stock min invalide !!! tu doit entrer un entier");
  document.getElementById('min').value="";
  return false;
};if(isNaN(max) == true){
  alert("inserer un stock max valide");
  document.getElementById('max').value="";
  return false;
};
if(max != parseInt(max)){
  alert("stock max invalide !!! tu doit entrer un entier");
  document.getElementById('max').value="";
  return false;
};
return true

}

const [listid,setListid]=useState({
  id:[]
})



const getidcat=()=>{
  var list2=recuperer_categories();
  var list=[];

  axios.post("http://localhost:3001/categorie/nom_categorie",{
    nom:list2
  }).then(response =>{

    var var2=response.data;
    //console.log(var2)



    for (let index = 0; index < var2.length; index++) {
      list=list.concat([var2[index]._id])   ; 
    };
    setListid({id:list});
   
    
  }).catch((err)=>{
    setListid({id:[]});


  })
  console.log(listid);


}





  const handleSubmit  = () => {
   if(valider() == true){

    var libel=document.getElementById('libelle').value;
    var stock=document.getElementById('stock').value;

    var prix=document.getElementById('prix').value;
    var stock_min=document.getElementById('stock_min').value;

   
   
   
    console.log(listid);

    axios.post("http://localhost:3001/produit",{
      label:libel ,
      categorie:listid.id,
      stock:stock,
      prix:prix,
      stock_min:stock_min,
    });
  
     alert("submit avec succée");
   }
  }
  
  useEffect(()=>{
    getidcat();
  }, []);

  return (
    <>
     
      <CRow>
        <CCol xs="12" md="6">
          <CCard>
            <CCardHeader>
              Ajouter produit
        
            </CCardHeader>
            <CCardBody>
              <CForm  method="post" encType="multipart/form-data" className="form-horizontal">
               
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="text-input">libellé</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput id="libelle" name="libelle" placeholder="libellé" />
                    <CFormText className="help-block">Please enter your product name</CFormText>

                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol >
                    <CLabel htmlFor="select">Catégorie</CLabel>
                    <CButton size="sm" onClick={ziiw}>show all</CButton>
                  </CCol>
                  <CCol xs="12" md="9">

                    <CSelect  multiple = "multiple" onChange={getidcat} name="select_categorie" id="categorie">
                    </CSelect>

                    <CFormText className="help-block">cliquer 2 fois pour afficher tout les categories</CFormText>

                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Marque</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CSelect custom name="select_marque" id="marque">
                      <option value=""></option>
                      <option value="0">Lenovo</option>
                      <option value="1">Azus</option>
                      <option value="2">HP</option>
                    
                    </CSelect>
                  </CCol>
                </CFormGroup>
                

                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="textarea-input">Description</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CTextarea 
                      name="textarea-input" 
                      id="textarea-input" 
                      rows="11"
                      placeholder="Content..." 
                    />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CLabel col md={3}>Image du Produit</CLabel>
                  <CCol xs="12" md="9">
                    <CInputFile custom id="image"/>
                    <CLabel htmlFor="custom-file-input" variant="custom-file">
                      entrer image...
                    </CLabel>
                  </CCol>
                </CFormGroup>
               
              </CForm>
            </CCardBody>

          </CCard>
          
        </CCol>
        <CCol xs="12" md="6">
          <CCard>
            <CCardHeader>
              Prix de vente
              <small> Form</small>
            </CCardHeader>
            <CCardBody>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="hf-email">prix public</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput  id="prix" name="prix" placeholder="prix..." />
                    <CFormText className="help-block">Please enter your price</CFormText>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="hf-password">Taxe</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput  id="taxe" name="taxe" placeholder="Enter Taxe..." autoComplete="current-password"/>
     
                  </CCol>
                </CFormGroup>
            </CCardBody>
            
          </CCard>
          <CCard>
            <CCardHeader>
              Information Logistiques
             
            </CCardHeader>
            <CCardBody>
              
                <CFormGroup>
                  <CLabel htmlFor="nf-email">stock</CLabel>
                  <CInput  id="stock" name="stock" placeholder="Enter Stock.." />
                  <CFormText className="help-block">Please enter your stock</CFormText>
                </CFormGroup>
                <CFormGroup>
                  <CLabel htmlFor="nf-password">Min</CLabel>
                  <CInput  id="stock_min" name="Min" placeholder="Enter Stock min.." autoComplete="current-password"/>
                </CFormGroup>
                <CFormGroup>
                  <CLabel htmlFor="nf-password">Max</CLabel>
                  <CInput  id="max" name="Max" placeholder="Enter Stock max.." autoComplete="current-password"/>
                </CFormGroup>
                <CCardFooter >
                <CButton type="button" size="sm" color="primary" onClick={handleSubmit}><CIcon name="cil-scrubber" /> Submit</CButton>
                <CButton type="reset" size="sm" color="danger" onClick={reset}><CIcon name="cil-ban" /> Reset</CButton>
                 </CCardFooter>
              
            </CCardBody>
            
          </CCard>
          
        </CCol> 
      </CRow>
     <CRow>
     <CCol>
          <CCard>
            <CCardHeader>
              <CButton type="submit" size="sm" color="primary" onClick={afficheproduitlist}><CIcon name="cil-scrubber" /> affiche liste des produits</CButton>

            </CCardHeader>
           
            <CCardBody>
            <CDataTable
              items={listfour.name}
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

