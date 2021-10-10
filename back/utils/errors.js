module.exports.creates = (err) => {
    let errors = { nom: "", email: "", password: "" };
  
    if (err.message.includes("nom")){
        errors.nom = "name incorrect ou déjà pris";
   //     return errors.nom;
    }

  
    if (err.message.includes("email")){
        errors.email = "Email incorrect";
  //      return errors.email;

    } 
  
    if (err.message.includes("password")){
        errors.password = "Le mot de passe doit faire 6 caractères minium";

    //    return errors.password;

    }
  
 
    if (err.code === 11000 && Object.keys(err.keyValue)[0].includes("email")){
        errors.email = "Cet email est déjà enregistré";

    //    return errors.email
    }
    
   return errors;
  };