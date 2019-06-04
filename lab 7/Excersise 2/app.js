
//dependency
const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;
const bodyParser= require('body-parser');

//Initioalization
const client = new MongoClient('mongodb://localhost:27017', { useNewUrlParser: true });
const app = express();
let DB = null;
//middleWare
app.use(bodyParser.json());
app.use(async (req, res, next) => {
    try {
        if (DB) {
            req.DB = DB;
        } else {
            await client.connect();
            DB = client.db('homework07');
            req.DB = DB;
        }
        next()
    } catch (error) {
        console.log(error)
    }

})
//routes

app.get('/lectures', async (req, res) => {
    const doc = await req.DB.collection('lectures').find({}).toArray((err,data)=>{
        res.send(data);
    })

})


app.get('/lectures/:id', async (request, response) => {
    
    try{
	const ids= request.params.id;
    
    const doc= await request.DB.collection('lectures').
        findOne({"course":ids });
            response.json(doc);
        
        
    }
    catch(e){
        console.log(e);
    }
    
});
app.delete("/lectures/:name", async(req,res)=>{
    try{
        const doc= req.DB.collection('lectures').remove({
            "course":req.params.name
        },(err,data)=>{
            if(err){
            res.json({
                msg:err.msg
            })
            }
        })
        res.json(`an element with id ${req.params.name} is deleted`);
        
    }
    catch(e){
        console.log(e);
    }
})


///
app.post('/lectures', async (req, res) => {
    const course={
        course:req.body.course,
        lecture:req.body.lecture
    };
    const docs = await req.DB.collection('lectures').insert({course});
    res.json(docs)
})
app.get('/lectures/search/:q',async (req,res)=>{
    let qu= req.params.q;
    const doc=await req.DB.collection("lectures").
    findOne({"lecture.name":{$regex:qu}});
    res.json(doc)
   
})

app.listen(3000, () => console.log('listening on 3000'))