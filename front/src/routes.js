import React from 'react';

const Tables = React.lazy(() => import('./views/base/tables/Tables'));

const Breadcrumbs = React.lazy(() => import('./views/base/breadcrumbs/Breadcrumbs'));
const Cards = React.lazy(() => import('./views/base/cards/Cards'));
const Carousels = React.lazy(() => import('./views/base/carousels/Carousels'));
const Collapses = React.lazy(() => import('./views/base/collapses/Collapses'));
const BasicForms = React.lazy(() => import('./views/base/forms/BasicForms'));
const BasicForms_fournisseur = React.lazy(() => import('./views/base/form_fournisseur/BasicForms_fournisseur'));
const BasicForms_client = React.lazy(() => import('./views/base/form_client/BasicForms_client'));
const Ajouter_produit = React.lazy(() => import('./views/produit/ajouter_produit'));
const Ajouter_categorie = React.lazy(() => import('./views/produit/ajouter_categorie'));
const Bon_de_reception = React.lazy(() => import('./views/achat/bon_de_reception/bon_de_reception'));
const Bon_de_sortie = React.lazy(() => import('./views/vente/bon_de_sortie/bon_de_sortie'));
const Facture_fournisseur = React.lazy(() => import('./views/achat/facture_fournisseur/facture_fournisseur'));
const Facture_client = React.lazy(() => import('./views/vente/facture_client/facture_client'));

const Commande_fournisseur = React.lazy(() => import('./views/achat/commande_fournisseur/commande_fournisseur'));
const Register = React.lazy(() => import('./views/pages/register/Register'));

const login = React.lazy(() => import('./views/pages/login/Login'));


const Jumbotrons = React.lazy(() => import('./views/base/jumbotrons/Jumbotrons'));
const ListGroups = React.lazy(() => import('./views/base/list-groups/ListGroups'));
const Navbars = React.lazy(() => import('./views/base/navbars/Navbars'));
const Navs = React.lazy(() => import('./views/base/navs/Navs'));
const Paginations = React.lazy(() => import('./views/base/paginations/Pagnations'));
const Popovers = React.lazy(() => import('./views/base/popovers/Popovers'));
const ProgressBar = React.lazy(() => import('./views/base/progress-bar/ProgressBar'));
const Switches = React.lazy(() => import('./views/base/switches/Switches'));

const Tabs = React.lazy(() => import('./views/base/tabs/Tabs'));
const Tooltips = React.lazy(() => import('./views/base/tooltips/Tooltips'));
const Charts = React.lazy(() => import('./views/charts/Charts'));
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'));
const Flags = React.lazy(() => import('./views/icons/flags/Flags'));
const Brands = React.lazy(() => import('./views/icons/brands/Brands'));

const Colors = React.lazy(() => import('./views/theme/colors/Colors'));
const Typography = React.lazy(() => import('./views/theme/typography/Typography'));
const Widgets = React.lazy(() => import('./views/widgets/Widgets'));
const Users = React.lazy(() => import('./views/users/Users'));
const User = React.lazy(() => import('./views/users/User'));
const TheLayout_client = React.lazy(() => import('./containers/TheLayout_client'));
const Recommandation = React.lazy(() => import('./views/recommandation/recommandation'));



const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/client', name: 'client', component: TheLayout_client },

  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/theme', name: 'Theme', component: Colors, exact: true },
  { path: '/theme/colors', name: 'Colors', component: Colors },
  { path: '/theme/typography', name: 'Typography', component: Typography },
  { path: '/base', name: 'Base', component: Cards, exact: true },
  { path: '/base/breadcrumbs', name: 'Breadcrumbs', component: Breadcrumbs },
  { path: '/base/cards', name: 'Cards', component: Cards },
  { path: '/base/carousels', name: 'Carousel', component: Carousels },
  { path: '/base/collapses', name: 'Collapse', component: Collapses },
  //{ path: '/base/forms', name: 'Forms', component: BasicForms },
  { path: '/base/form_client', name: 'Forms client', component: BasicForms_client },
  { path: '/login', name: 'Login', component: login },
  { path: '/Register', name: 'Register', component: Register },
  { path: '/recommandation', name: 'Recommandation', component: Recommandation },


  
// achat
  { path: '/base/form_fournisseur', name: 'Forms Fournisseur', component: BasicForms_fournisseur },
  { path: '/bon_de_reception', name: 'bon de reception', component: Bon_de_reception },
  { path: '/commande_fournisseur', name: 'Commande fournisseur', component: Commande_fournisseur },
  { path: '/facture_fournisseur', name: 'facture_fournisseur', component: Facture_fournisseur },


// vente
{ path: '/facture_client', name: 'facture client', component: Facture_client },
{ path: '/bon_de_sortie', name: 'bon de sortie', component: Bon_de_sortie },


  { path: '/base/jumbotrons', name: 'Jumbotrons', component: Jumbotrons },
  { path: '/base/list-groups', name: 'List Groups', component: ListGroups },
  { path: '/base/navbars', name: 'Navbars', component: Navbars },
  { path: '/base/navs', name: 'Navs', component: Navs },
  { path: '/base/paginations', name: 'Paginations', component: Paginations },
  { path: '/base/popovers', name: 'Popovers', component: Popovers },
  { path: '/base/progress-bar', name: 'Progress Bar', component: ProgressBar },
  { path: '/base/switches', name: 'Switches', component: Switches },
  { path: '/base/tables', name: 'Tables', component: Tables },
  { path: '/base/tabs', name: 'Tabs', component: Tabs },
  { path: '/base/tooltips', name: 'Tooltips', component: Tooltips },
  { path: '/charts', name: 'Charts', component: Charts },
  { path: '/icons', exact: true, name: 'Icons', component: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', component: Flags },
  { path: '/icons/brands', name: 'Brands', component: Brands },
  { path: '/produit/ajouter_produit', name: 'ajouter_produit', component: Ajouter_produit },
  { path: '/produit/ajouter_categorie', name: 'ajouter_categorie', component: Ajouter_categorie },

  { path: '/widgets', name: 'Widgets', component: Widgets },
  { path: '/users', exact: true,  name: 'Users', component: Users },
  { path: '/users/:id', exact: true, name: 'User Details', component: User }
];

export default routes;
