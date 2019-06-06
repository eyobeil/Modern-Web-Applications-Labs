//  dependency
const express= require("express");
const bodyParser= require("body-parser");
const MongoClient= require("mongodb").MongoClient;
//Instantiation
const app= express();
let DB=null;
const client= new MongoClient("mongodb://localhost:27017",{useNewUrlParser:true});
//configuration
const port= process.env.PORT||5000;

//MiddleWare
app.use(bodyParser.json());
app.use(async (req,res,next)=>{
    if(DB){
        req.DB=DB;
    }
    else{
        try{
        await client.connect();
        DB=client.db('lab8');
        req.DB=DB.collection("locations");
        next();
         }
    catch(e){
        console.log(e);
    }
  }})
app.post("/location",async (req,res,next)=>{
     try{
        const location= req.body;
            const doc=  await req.DB.insertOne({location});
            res.json(doc);

        }
    catch(e){
        console.log(e);
    }
    
    })
    app.get("/location/mum",async (req,res, next)=>{
        try{
        const doc= await req.DB.find({"location.location": {
            $near:  [-91.967133, 41.023472]
                
            }
        }).limit(3).project({"location.name":1, "location.category":1, _id:0 }).toArray();
        res.send(doc);
        next();
        }
        catch(e){
            console.log(e);
        }
    })
    app.listen(port,()=>{
        console.log(`listining on port ${port} `)
    })