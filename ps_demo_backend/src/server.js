//basically an import
const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb');
const multer = require('multer');
var upload = multer();

//create a multer enviroment that stores data in an uploads folder
multer({dest: 'uploads/'})


//create the server object
const app = express();

//quick link to my mongo server
//mongo "mongodb+srv://cluster0-hsloz.gcp.mongodb.net/admin"  --username willk

//allows for easy parsing of the json
app.use(bodyParser.json());


//reusable set up teardown database function
async function useDataBase (myFunction, res) {
    try {
        const client = await MongoClient.connect("mongodb+srv://willk:uS3L3sc@cluster0-hsloz.gcp.mongodb.net/test?retryWrites=true&w=majority", {useNewUrlParser:true} )
        const db = client.db("ps_data");
        //call the passed in function
        await myFunction(db);
        //close the database
        client.close();
    } catch (error) {
        res.status(500).json({message:'database failure', error})
    }
}

//upvote endpoint, post because it changes data in database
app.post('/api/articles/:name/upvote', async (req, res) => {
    useDataBase( async(db) => {
        //function passed into the database func
        const articleName = req.params.name;
        const info = await db.collection('articles').findOne({name: articleName});
        await db.collection('articles').updateOne(
            {name: articleName},
            {'$set' : {
                votes: info.votes + 1,
                },
            }
        );  
        const result= await db.collection('articles').findOne({name: articleName});
        res.status(200).json(result);
    }, res);
});

app.post('/api/articles/:name/downvote', async (req, res) => {
    useDataBase( async(db) => {
        const articleName = req.params.name;
        const info = await db.collection('articles').findOne({name: articleName});
        await db.collection('articles').updateOne(
            {name: articleName},
            {'$set':{
                votes: info.votes - 1,
                },
            }
        );  
        const result= await db.collection('articles').findOne({name: articleName});
        res.status(200).json(result);
    }, res);
});

//retreive artilce by name, undefined if two articles have the same name
app.get('/api/articles/:name', async (req, res) =>
{
    useDataBase(async(db) => {
        const articleName = req.params.name;
        const info = await db.collection('articles').findOne({name: articleName});
        res.status(200).json(info);
    }, res);
});

//listing for the list
app.get('/api/articles-main/all', async (req, res) =>
{
    useDataBase(async(db) => {
        //find gets everything and project narrows the returned rows to what is specified
        //.toArray is actually what makes the call work because mongo
        const info = await db.collection('articles').find({}).project({name:1,votes:1}).toArray();
        res.status(200).json(info);
    }, res);
});

app.post('/api/articles/:name/add-comment', async (req, res) => {
    const {username, commentText} = req.body;
    const articleName = req.params.name;
    useDataBase(async(db) => {
        const info = await db.collection('articles').findOne({name: articleName});
        await db.collection('articles').updateOne(
            {name: articleName},
            {'$set' : {
                comments: info.comments.concat({username, commentText})
                },
            }
        );  
        const updatedInfo = await db.collection('articles').findOne({name: articleName});
        res.status(200).json(updatedInfo);
    }, res)
});

//handle the article without the image 
app.post('/api/add-article', async (req, res) => {
    const {name, text} = req.body;
    useDataBase(async(db) => {
        await db.collection('articles').insert(
            {
                "name":name,
                "votes":0,
                "comments":[],
                "text":text,
            }
        )
        res.status(200);
    }, res);
});


//used by multer
const singleUplaod = upload.single('photo');

//handle the image upload
app.post('/api/image/:name', singleUplaod, async (req, res) => {
    const articleName = req.params.name;
    useDataBase(async(db) => {
        await db.collection('articles').updateOne(
            {name: articleName},
            {'$set' : {
                image: req.file
                },
            }
        );  
        res.status(200);
    }, res);
});

//make this listen on port 8000 and print started on start up
app.listen(8000, () => console.log('started'));