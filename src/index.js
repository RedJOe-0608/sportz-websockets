import express from 'express'

const app = express();
const PORT = 8000;

app.use(express.json())

app.get("/",(req,res)=> {
    res.status(200).json({
        "message": "hello"
    })
})


app.listen(PORT,()=>{
    console.log(`Server listening on port ${PORT}...`);
    
})