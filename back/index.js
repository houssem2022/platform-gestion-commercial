const express =require('express');
const app=express();
const cors = require('cors');
require('./models/dbConfig');
require('dotenv/config');

const authJwt = require('./middleware/jwt');
const errorHandler = require('./middleware/error-handler');
 

app.use(cors());
app.options('*',cors());



//middleware
const bodyParser = require('body-parser');
app.use(bodyParser.json());
//app.use(authJwt());
//app.use(errorHandler);




//app.use(express.json()); 
// import routes        
const clientRoutes = require('./routes/clientRoute');
const produitRoutes = require('./routes/produitRoute');
const ligneAchatRoutes = require('./routes/ligneAchatRoute');
const ligneVenteRoutes = require('./routes/ligneVenteRoute');

const facture_fournisseurRoutes = require('./routes/facture_fournisseurRoute');
const fournisseurRoutes = require('./routes/fournisseurRoute');
const facture_clientRoutes = require('./routes/facture_clientRoute');
const categorieRoutes = require('./routes/categorieRoute');



app.use('/client', clientRoutes);
app.use('/produit', produitRoutes);
app.use('/ligneAchat', ligneAchatRoutes);
app.use('/ligneVente', ligneVenteRoutes);
app.use('/factureF', facture_fournisseurRoutes);
app.use('/fournisseur', fournisseurRoutes);
app.use('/factureC', facture_clientRoutes);
app.use('/categorie',categorieRoutes);





app.listen(3001, () => console.log('serveur started: 3001'));
