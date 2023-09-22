const express=require("express");
const app=express();
const path=require("path");
app.use(express.static("public"));
app.set("view engine","ejs");

app.get("/",(req,res)=>{
   // res.sendFile(path.join(__dirname,"./public/home.html"));
   res.render("home",{name:"CodeQuotient",courses:["First","Second","third"]})

})
app.listen(3000,(err)=>{
    console.log("sErver started...")
})