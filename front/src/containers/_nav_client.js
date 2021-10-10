import React from 'react'
import CIcon from '@coreui/icons-react'
let _nav=[];

 _nav =  [
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Achat',
    route: '/achat',
    icon: 'cil-basket',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Commande Fournisseur',
        to: 'commande_fournisseur',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Bon De Réception',
        to: 'bon_de_reception',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Facture Fournisseur',
        to: 'facture_fournisseur',
      },
      
    ],
  },
]

export default _nav
