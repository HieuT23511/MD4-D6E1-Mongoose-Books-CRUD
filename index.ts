import express from "express";
import bodyParser from "body-parser";
import { Database } from "./src/models/data-source";
import { bookRouter } from "./src/routers/book.routers";

const app = express();
const PORT = 5000;

//cau hinh:
app.set("view engine","ejs");
app.set("views","./src/views")
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('./src/public'))

//ket noi db:
Database.connectDB()
.then(()=>console.log(`DB connected`))
.catch((error)=>console.log(`DB connect error: ${error}`));

//router
app.use('/book',bookRouter)

//listen:
app.listen(PORT,"localhost",()=>{
    console.log(`App is running at port : http://localhost:${PORT}/book/create`);
    
})