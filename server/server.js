import http from "http";
import app from "./app/app.js";


const port = process.env.PORT || 5000
const server = http.createServer(app);
app.listen(port,()=>{
    console.log(`server is runing at http://localhost:${port}`);
})