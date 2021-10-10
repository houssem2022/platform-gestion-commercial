import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  CCreateElement,
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarNavDivider,
  CSidebarNavTitle,
  CSidebarMinimizer,
  CSidebarNavDropdown,
  CSidebarNavItem,
  CImg
} from '@coreui/react'

import CIcon from '@coreui/icons-react'

// sidebar nav config
import navigation1 from './_nav'
import navigation2 from './_nav_client'
import { BackgroundColor } from 'chalk'


const TheSidebar = ({email}) => {
  const dispatch = useDispatch()
  const show = useSelector(state => state.sidebarShow)



  


  return (
    <CSidebar
      show={show}
      onShowChange={(val) => dispatch({type: 'set', sidebarShow: val })}
    >
      <CSidebarBrand className="d-md-down-none" to="/" >
      <CImg
              src={'avatars/logo2.png'}
              width="100%" height="100%"

            />
     
      </CSidebarBrand>
      <CSidebarNav>

        {
          (email=="admin@gmail.com")? (
            
        <CCreateElement
        items={navigation1}
        components={{
          CSidebarNavDivider,
          CSidebarNavDropdown,
          CSidebarNavItem,
          CSidebarNavTitle
        }}
      />

          ):(
            
        <CCreateElement
        items={navigation2}
        components={{
          CSidebarNavDivider,
          CSidebarNavDropdown,
          CSidebarNavItem,
          CSidebarNavTitle
        }}
      />
          )
        }
     
        
      </CSidebarNav>
      <CSidebarMinimizer className="c-d-md-down-none"/>
    </CSidebar>
  )
}

export default React.memo(TheSidebar)
