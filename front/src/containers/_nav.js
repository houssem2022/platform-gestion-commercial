import React from 'react'
import CIcon from '@coreui/icons-react'
let _nav=[];

 _nav =  [
  
  {
    _tag: 'CSidebarNavItem',
    name: 'Accueil',
    to: '/accueil',
    icon: <CIcon name="cil-home" customClasses="c-sidebar-nav-icon"/>,
    badge: {
      color: 'info',
      text: 'NEW',
    }
  },
 
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Vente',
    route: '/vente',
    icon: 'cil-dollar',
    _children: [
    
     
      {
        _tag: 'CSidebarNavItem',
        name: 'Facture Client',
        to: 'facture_client',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Bon De Sortie',
        to: 'bon_de_sortie',
      },
      
    ],
  },
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

  {
    _tag: 'CSidebarNavItem',
    name: 'Client',
    to: '/base/form_client',
    icon: 'cil-user-follow'
  },

{
  _tag: 'CSidebarNavItem',
  name: 'recommandation',
  to: '/recommandation',
  icon: 'cil-puzzle',
},
  {
    _tag: 'CSidebarNavItem',
    name: 'Fournisseur',
    to: '/base/form_fournisseur',
    icon: 'cil-puzzle',
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Stock',
    route: '/produit',
    icon: 'cil-list',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Gestion De Stock',
        to: '/produit/ajouter_produit',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Categorie',
        to: '/produit/ajouter_categorie',
      },
      
    ]
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Ajouter compte',
    to: '/register',
    icon: 'cil-people',
  },
  {
    _tag: 'CSidebarNavDivider',
    className: 'm-5'
  },
  {
    _tag: 'CSidebarNavDivider',
    className: 'm-5'
  },{
    _tag: 'CSidebarNavDivider',
    className: 'm-5'
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Login',
    to: '/login',
    icon: 'cil-people',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Register',
    to: '/register',
    icon: 'cil-people',
  },
]

export default _nav
