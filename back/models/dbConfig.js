const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://ziw:houssemcss@cluster0.oiafh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName:'e_shop'
})
.then(()=>{
    console.log('data base connection is ready');
})
.catch((err)=>{
    console.log(err);
})
