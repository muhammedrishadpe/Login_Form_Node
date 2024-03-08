const express = require("express");

const app = express();

app.use(express.json()); //json >  parse
app.use(express.urlencoded({extended:true})); //FormData > string||array||object
app.use(express.static("views")); 

const emailDB = "user@gmail.com"
const passwordDB = "123";

app.post("/login", (req,res) => {
    const{email, password} = req.body;
    if(email === emailDB && password === passwordDB){
        res.send("Login Successful");
    } else {
        res.send("login failed");
    }
    console.log(req.body);
});
const PORT = process.env.PORT || 3000;

app.listen(PORT);