import React, { useState,useEffect } from 'react'
import TheContent_client from './TheContent_client'
import TheContent from './TheContent'

import TheFooter from './TheFooter'
import TheHeader from './TheHeader'
import TheHeaderDropdown from './TheHeaderDropdown'
import TheHeaderDropdownMssg from './TheHeaderDropdownMssg'
import TheHeaderDropdownNotif from './TheHeaderDropdownNotif'
import TheHeaderDropdownTasks from './TheHeaderDropdownTasks'
import Login from '../views/pages/login/Login';

import TheSidebar from './TheSidebar'

import fire from '../firebase';
import { CButton } from '@coreui/react'
import  { Suspense } from 'react'
import {
  Redirect,
  Route,
  Switch
} from 'react-router-dom'
import { CContainer, CFade } from '@coreui/react'
import routes from '../routes'
  
const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

const TheLayout_client = () => {
 

  
  return (
   <div>hello</div>

  
  )
}

export default TheLayout_client
