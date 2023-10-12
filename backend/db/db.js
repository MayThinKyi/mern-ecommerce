const mongoose=require('mongoose');

const dbUrl='mongodb+srv://maythinkyi:mtkkang303@mern-ecommerce.fiecwd9.mongodb.net/mern-ecommerce';
mongoose.connect(dbUrl,{
    useUnifiedTopology:true,
    useNewUrlParser:true
})
const dbConnection=mongoose.connection;
dbConnection.on('error',()=>{
    console.log('Database connection fail!')
})
dbConnection.on('connected',()=>{
    console.log('Database connected successfully!')
})
