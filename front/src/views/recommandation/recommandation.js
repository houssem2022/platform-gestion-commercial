import React from 'react'
import {
  CButton,
  CCard,
  CCardHeader,
  CCol,
  CCardBody,
  CCardFooter,
   CForm,
  CFormGroup,
  CFormText,
  CCardGroup,

  CLabel,
  CSelect,
  CRow,
  CImg,
 
} from '@coreui/react'
import {
  CChartBar,
 
} from '@coreui/react-chartjs'
import CIcon from '@coreui/icons-react'
import { DocsLink } from 'src/reusable'


import axios from "axios"
import  { useState, useEffect } from 'react';

const fields = ['fournisseur','email','date', 'montant'];





const Recommandation = () => {

  const [listfour,setlistfour]=useState({
    fournisseur:[]
  })
  
  const [idproduit,setidproduit]=useState("");

const getid=()=>{
  let prod=document.getElementById('produit').value;
  axios.post("http://localhost:3001/produit/Nom",{nom:prod}).then((res)=>{

  setidproduit(res.data._id);
  
  })
}
const update=()=>{
  axios.get("http://localhost:3001/produit")
  .then(response =>{

    let listname=[];
    for (let index = 0; index < response.data.length; index++) {
        listname = listname.concat( [response.data[index].label]);
        
    }
    setlistfour({
      fournisseur:listname
    })

  })
  .catch((err)=>{
    alert("error in update function");

  })
}
 
const show_four=()=>{
  //const button1=document.getElementById("show_four");
  //button1.addEventListener('click',function(e){
  //e.preventDefault();
  //})
  update();
  update();

  var s=document.getElementById("produit");
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
  
};
  function handleclick_show_four(event){
    event.preventDefault();
    show_four();
  }  

  
  const affiche_table  = () => {
    
        
        
        var x = document.getElementById('table');
    
        x.style.display = "inline-block";
       
        
    
  }
  const supprimer_table  = () => {
 
        var x = document.getElementById('table');
    
        x.style.display = "none";
    

    
  }
  const [Data,setData]=useState({
    data:[],
    fournisseur:[]
  })
  const recommander=()=>{
   
    axios.post("http://localhost:3001/stat/Nom",{produit:idproduit})
    .then((res)=>{

      let dat=[];
      let dat2=[];
      let four=[];
      let four2=[];

  
      for (let index = 0; index < res.data.length; index++) {
        dat = dat.concat([res.data[index].note]);

        four = four.concat([res.data[index].fournisseur.nom]);
      }
      let unique = {};
      four.forEach(function(i) {
        if(!unique[i]) {
          unique[i] = true;
        }
      });
      four2= Object.keys(unique);
      var moy=0;
      var nb=0;
      for (let index = 0; index < four2.length; index++) {
        for (let index2 = 0; index2 < dat.length; index2++) {
          if(four[index2]==four2[index]){
            moy=moy+dat[index2];
            nb=nb+1;
          }
        } 
        dat2=dat2.concat([moy/nb]);
        moy=0; 
        nb=0;

      }


      dat2 = dat2.concat([0]);


      setData({
        data:dat2,
        fournisseur:four2
      })

    }).catch((err)=>{
      console.log(err)
    })


    affiche_table();

  }
  const affichedata=()=>{
    console.log(Data)

  }
  const reset=()=>{
    supprimer_table();
    setData({
      data:[],
      fournisseur:[]
    })
    setidproduit("")
  }
  return (
    <>
    
    
      <CRow>
        <CCol xs="12" sm="6">
          <CCard>
            <CCardHeader>
                Recommandé fournisseur
           
            </CCardHeader>
            
            <CImg
              src={'avatars/logo.png'}
              width="80%" height="30%"
              

            />
           
            <CCardBody>
              <CForm  method="post" encType="multipart/form-data" className="form-horizontal">
               
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="text-input">produits  </CLabel>
                    <CButton id="show_four"size="sm" onClick={(e)=>{handleclick_show_four(e)}}><CIcon name="cil-chevron-bottom" /></CButton>

                  </CCol>
                  <CCol xs="12" md="9">

                  
                  <CSelect    name="select_produit" id="produit" onChange={getid}>
                  </CSelect>
                  <CFormText className="help-block">cliquer 2 fois pour afficher tout les produits</CFormText>

                  </CCol>
                </CFormGroup>
       

                
                
               
               
              </CForm>
            </CCardBody>
            <CCardFooter >
            
            <CFormGroup>
              <CButton type="submit" size="sm" color="success" onClick={recommander}> submit</CButton>
              <CButton type="submit" size="sm" color="danger" onClick={reset}> reset</CButton>

            </CFormGroup>
          
            </CCardFooter>
          </CCard>
          
        </CCol>
       
    
        
       
      
      <CCol xs="12" sm="6" id='table' style={{display:'none'}}>
      <CCard>
        <CCardHeader>
          Bar Chart
          <DocsLink href="http://www.chartjs.org"/>
        </CCardHeader>
        <CCardBody>
          <CChartBar
            datasets={[
              {
                label: 'Rating ',
                backgroundColor: '#02aac4',
                data: Data.data
              }
            ]}
            labels={Data.fournisseur}
            options={{
              tooltips: {
                enabled: true
              }
            }}
          />
        </CCardBody>
      </CCard>
      
      </CCol>
</CRow>
    
   
    </>
  )
 

}
/*
const button1=document.getElementById("show_four");
button1.addEventListener('click',function(e){
  e.preventDefault();
  console.log("hello")
});
*/
export default Recommandation

