import express from "express";

const app = express();
app.get("/api/notes",(req,res)=>{
    //send the notes
    res.status(200).send("you got 5 notes");
})
app.post("/api/notes",(req,res)=>{
    //creat the notes
    res.status(201).send("created a note successfully");
})

app.listen(5001,() => {
    console.log("server started on port: 5001");
});