import React from 'react'
import html2pdf from 'react'
import jsPDF from 'jspdf'
import ReactStars from "react-rating-stars-component";
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
const [listid,setListid]=useState({
  id:[]
})
var id=1;

const update=()=>{
  axios.get("http://localhost:3001/fournisseur")
  .then(response =>{

    let listname=[];
    for (let index = 0; index < response.data.length; index++) {
        listname = listname.concat( [response.data[index].nom]);
        
    }
    setlistfour({
      fournisseur:listname
    })

  })
  .catch((err)=>{
    alert("error in update function");

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

const ratingChanged1 = (newRating) => {
var rat=document.getElementById('1')
rat.value=Number(newRating);
console.log("div 1 value"+newRating)
};
const ratingChanged2 = (newRating) => {
var rat=document.getElementById('2')
rat.value=Number(newRating);
console.log("div 2 value"+newRating)

};
const ratingChanged3 = (newRating) => {
  var rat=document.getElementById('3')
  rat.value=Number(newRating);
  console.log("div 3 value"+newRating)

  };
const ratingChanged4 = (newRating) => {
var rat=document.getElementById('4')
rat.value=Number(newRating);
console.log("div 4 value"+newRating)

};
const ratingChanged5 = (newRating) => {
var rat=document.getElementById('5')
rat.value=Number(newRating);
console.log("div 5 value"+newRating)

};
const ratingChanged6 = (newRating) => {
var rat=document.getElementById('6')
rat.value=Number(newRating);
console.log("div 6 value"+newRating)

};

  
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
    doc.text(300,100,'Bon De Reception');
    doc.setTextColor(61, 61, 61);
    doc.setFontSize(13)
    doc.setLineWidth(1); 


    doc.line(60, 130, 500, 130);

    doc.text(80, 150, "fournisseur                       "+four.value)
    doc.text(80, 180, "Numero mobile            23548756")
    doc.text(80, 210, "Adresse                          gafsa")
    doc.text(80, 240, "date de document            "+date.value)
   
    doc.line(60, 310, 500, 310);

   
    doc.text(80, 330, "Designetion")
    doc.text(180, 330, "Qt cmd ")
    doc.text(280, 330, "Qt livrées  ")
    doc.text(380, 330, "QT rest à livrer")

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
    document.getElementById(val[0]+"4").value= Number(var1)-Number(var2)
  }else{
    document.getElementById(val[0]+"4").value=NaN
  }
}
const settotalhtonchangeprixht= (val)=>{

  var var1=document.getElementById(val).value;
  var var2=document.getElementById(val[0]+"2").value;

  if( var1 != "" & var2 != "") {
    document.getElementById(val[0]+"4").value= Number(var2)-Number(var1)
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
    document.getElementById("remarques").value="";

  }
  const valider=()=>{
    var fournisseur=document.getElementById("fournisseur").value;
    var date=document.getElementById("date").value;
  
    
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
    
  
    
  
  return true
  
  } 
  
    const handleSubmit  = () => {
      if(valider()==true){
        alert("enregistrer avec succée");
        reset();
      }
    }
    const afficher_value=()=>{
      console.log(document.getElementById('1').value);
      console.log(document.getElementById('2').value);
      console.log(document.getElementById('3').value);
      console.log(document.getElementById('4').value);
      console.log(document.getElementById('5').value);
      console.log(document.getElementById('6').value);


    }
    const [listprod,setlistprod]=useState({
      produit:[]
    })
    const updatelistproduit=()=>{
      axios.get("http://localhost:3001/produit")
      .then(response =>{
  
        let listname=[];
        for (let index = 0; index < response.data.length; index++) {
            listname = listname.concat( [response.data[index].label]);
            
        }
        setlistprod({
          produit:listname
        })
  
      })
      .catch((err)=>{
        alert("error in updateproduit function");
   
      })
  }
  
    const show_prod=(id)=>{

 
  
      updatelistproduit();
    
      var s=document.getElementById(id);
      s.innerHTML="";
    
      /*
      var option="";
      for (let index = 0; index < list.length; index++) {
        option=option+"<option value=\""+list[index]+"\">"+list[index]+"</option>"
        
      }
      */
      
      for (let index = listprod.produit.length-1; index >=0 ; index--) {
        var newoption=document.createElement("option");
        newoption.value=listprod.produit[index];
        newoption.innerHTML=listprod.produit[index];
        s.options.add(newoption);
      }
      
    
    };
    
    
function recuperer_fournisseurs()
{
	let total = [];
	var ChoixCd = document.getElementById("fournisseur");
	for(let i=0;i<ChoixCd.options.length;i++)
	{ 
		if (ChoixCd.options[i].selected)
		{ 
			total = total.concat([ChoixCd.options[i].value]) ;
		}
  }
 
  
	return total;
}
const getidfour=()=>{
  var list2=recuperer_fournisseurs();
  var list=[];

  axios.post("http://localhost:3001/fournisseur/nom",{
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
    
const show_four=()=>{
  //const button1=document.getElementById("show_four");
  //button1.addEventListener('click',function(e){
  //e.preventDefault();
  //})
  update();
  update();

  var s=document.getElementById("fournisseur");
  s.innerHTML="";
  /*
  var option="";
  for (let index = 0; index < list.length; index++) {
    option=option+"<option value=\""+list[index]+"\">"+list[index]+"</option>"
    
  }
  */
  
  for (let index = listfour.fournisseur.length-1; index >=0 ; index--) {
    var newoption=document.createElement("option");
    newoption.value=listfour.fournisseur[index];
    newoption.innerHTML=listfour.fournisseur[index];
    s.options.add(newoption);
  }
  
console.log(id);
};
    function handleclick_show_four(event){
      event.preventDefault();
      show_four();
    }

    
  
function recuperer_produit(id2)
{
	let total = [];
	var ChoixCd = document.getElementById(id2);
	for(let i=0;i<ChoixCd.options.length;i++)
	{ 
		if (ChoixCd.options[i].selected)
		{ 
			total = total.concat([ChoixCd.options[i].value]) ;
		}
  }
 
  
	return total;
}
  const savestat=(e,id3)=>{
    let prod=recuperer_produit(id3+"1")[0];
    let four=listid.id[0];
    let note=document.getElementById(id3).value;
    console.log(prod);
    console.log(four);
    console.log(note);

    axios.post("http://localhost:3001/produit/nom",{
      nom:prod
    }).then((resp)=>{

      axios.post("http://localhost:3001/stat",{
        produit:resp.data._id,
        fournisseur:four,
        note:note
      })

    }).catch((err)=>{
      console.log(err)
    })


  }
    
  return (
    <>
    
    
      <CRow>
        <CCol xs="12" sm="6">
          <CCard>
            <CCardHeader>
                créer bon de reception
           
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
                    <CButton id="show_four"size="sm" onClick={(e)=>{handleclick_show_four(e)}}><CIcon name="cil-chevron-bottom" /></CButton>

                  </CCol>
                  <CCol xs="12" md="9">

                  <CSelect   onChange={getidfour} name="select_fournisseur" id="fournisseur">
                  </CSelect>                    

                  </CCol>
                </CFormGroup>
       

                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="date">Date de livraison</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput type="date" id="date" name="date-input" placeholder="date" />
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
                les produits livrés
                <CButton size="sm" onClick={()=>{
                  show_prod("11");
                  show_prod("21");
                  show_prod("31");
                  show_prod("41");
                  show_prod("51");
                  show_prod("61");
                  }}>aff produits<CIcon name="cil-chevron-bottom" /></CButton>
            </CCardHeader>
            <CCardBody>
              
             
                <table id="1">
                    <thead></thead>
                    <tbody>
                   <tr>
                     <td width="15%">
                        <CFormGroup >
                        <CLabel htmlFor="text-input">Designation  </CLabel>

                        <CSelect    name="Designation" id="11">
                                </CSelect>                        </CFormGroup >

                       </td>
                       <td>
                       <CFormGroup >
                       <CLabel htmlFor="text-input">Qt cmd  </CLabel>

                            <CInput id="12" name="Quantité" onChange={()=>settotalhtonchangequantité("12")} placeholder="Quantité" />
                        </CFormGroup >

                       </td>
                       <td>
                       <CFormGroup >
                       <CLabel htmlFor="text-input">Qt livrées  </CLabel>

                            <CInput id="13"  name="Prix" onChange={()=>settotalhtonchangeprixht("13")} placeholder="Prix HT" />
                        </CFormGroup >

                        </td>
                        <td>
                        <CFormGroup >
                        <CLabel htmlFor="text-input">Qt rest à livrer  </CLabel>

                            <CInput id="14"  name="Total" placeholder="Total HT " />
                        </CFormGroup >
                        </td>
                        <td width="15%">
                        <CFormGroup >
                        <CLabel htmlFor="text-input">rating </CLabel>

                        <ReactStars
                          id="1"
                          count={5}
                          value="0"
                          onChange={ratingChanged1}
                          size={15}
                          activeColor="#ffd700"
                        />,
                        </CFormGroup>
                        </td>
                        <td >
                        <CFormGroup >
                        <CLabel htmlFor="text-input">save </CLabel>

                        <CButton  id="button1"size="sm" color="danger" onClick={(e)=>{savestat(e,'1')}}><CIcon name="cil-share" /> </CButton>

                        </CFormGroup>
                        </td>

                      
                   </tr>
                   
                 
                   </tbody>
                </table>
                <table id="2" style={{display:'none'  }}>
                    <thead></thead>
                    <tbody>
                    <tr >
                       <td width="15%">
                       <CFormGroup >
                       <CSelect    name="Designation" id="21">
                                </CSelect>                        </CFormGroup>
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
                       <td width="15%">
                        <CFormGroup >

                        <ReactStars
                          id="2"
                          count={5}
                          value="0"
                          onChange={ratingChanged2}
                          size={15}
                          activeColor="#ffd700"
                        />,
                        </CFormGroup>
                        </td>
                        <td >
                        <CFormGroup >
                        <CLabel htmlFor="text-input">save </CLabel>

                        <CButton  id="button1"size="sm" color="danger" onClick={(e)=>{savestat(e,'1')}}><CIcon name="cil-share" /> </CButton>

                        </CFormGroup>
                        </td>

                   </tr>
                    </tbody>
                </table>

                <table id="3" style={{display:'none' }}>
                    <thead></thead>
                    <tbody>
                    <tr >
                       <td width="15%">
                       <CFormGroup >
                       <CSelect    name="Designation" id="31">
                                </CSelect>                        </CFormGroup>
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
                       <td width="15%">
                        <CFormGroup >

                        <ReactStars
                          id="3"
                          count={5}
                          value="0"
                          onChange={ratingChanged3}
                          size={15}
                          activeColor="#ffd700"
                        />,
                        </CFormGroup>
                        </td>
                        <td >
                        <CFormGroup >
                        <CLabel htmlFor="text-input">save </CLabel>

                        <CButton  id="button1"size="sm" color="danger" ><CIcon name="cil-share" /> </CButton>

                        </CFormGroup>
                        </td>

                   </tr>
                    </tbody>
                </table>
                <table id="4" style={{display:'none' }}>
                    <thead></thead>
                    <tbody>
                    <tr >
                       <td width="15%">
                       <CFormGroup >
                       <CSelect    name="Designation" id="41">
                                </CSelect>                        </CFormGroup>
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
                       <td width="15%">
                        <CFormGroup >

                        <ReactStars
                          id="4"
                          count={5}
                          value="0"
                          onChange={ratingChanged4}
                          size={15}
                          activeColor="#ffd700"
                        />,
                        </CFormGroup>
                        </td>
                        <td >
                        <CFormGroup >
                        <CLabel htmlFor="text-input">save </CLabel>

                        <CButton  id="button1"size="sm" color="danger" ><CIcon name="cil-share" /> </CButton>

                        </CFormGroup>
                        </td>

                   </tr>
                    </tbody>
                </table>
                <table id="5" style={{display:'none' }}>
                    <thead></thead>
                    <tbody>
                    <tr >
                       <td width="15%">
                       <CFormGroup >
                       <CSelect    name="Designation" id="51">
                                </CSelect>                        </CFormGroup>
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
                       <td width="15%">
                        <CFormGroup >

                        <ReactStars
                          id="5"
                          count={5}
                          value="0"
                          onChange={ratingChanged5}
                          size={15}
                          activeColor="#ffd700"
                        />,
                        </CFormGroup>
                        </td>
                        <td >
                        <CFormGroup >
                        <CLabel htmlFor="text-input">save </CLabel>

                        <CButton  id="button1"size="sm" color="danger" ><CIcon name="cil-share" /> </CButton>

                        </CFormGroup>
                        </td>

                   </tr>
                    </tbody>
                </table>
                <table id="6" style={{display:'none' }}>
                    <thead></thead>
                    <tbody>
                    <tr >
                       <td width="15%">
                       <CFormGroup >
                       <CSelect    name="Designation" id="61">
                                </CSelect>                        </CFormGroup>
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
                       <td width="15%">
                        <CFormGroup >

                        <ReactStars
                          id="6"
                          count={5}
                          value="0"
                          onChange={ratingChanged6}
                          size={15}
                          activeColor="#ffd700"
                        />,
                        </CFormGroup>
                        </td>
                        <td >
                        <CFormGroup >
                        <CLabel htmlFor="text-input">save </CLabel>

                        <CButton  id="button1"size="sm" color="danger" ><CIcon name="cil-share" /> </CButton>

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

