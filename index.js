 const express = require("express");
 const bodyParser = require("body-parser");
 const connect = require("./config/db");
 const router = require("./routes/userRoutes");
 const postRoutes = require('./routes/postRoutes');
 const profileRoutes = require('./routes/profileRoutes');
 const path = require("path")
 var cors = require('cors');
 require("dotenv").config()
 const app = express();//calling express---express ko call kiya
 
 //connect mongoose database
 connect();

//  app.get('/',(req, res) => {
//     res.send('hello mern')
//  })

 //use function middleware k liye use krte hai...
 app.use(bodyParser.json());
 app.use(cors());
 app.use("/",router);
 app.use("/", postRoutes);
 app.use("/",profileRoutes);

 const PORT = process.env.PORT || 5000

 const envt = process.env.NODE_ENV || 'production';
 console.log(envt)
if(envt === 'production'){
   app.use(express.static(path.join(__dirname,"/client/build/")));
   app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
   })
 }

 app.listen(PORT, () => {
    console.log('App is running')
 })