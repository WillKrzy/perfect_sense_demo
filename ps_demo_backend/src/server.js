import express from 'express';
import bodyParser from 'body-parser';
import {MongoClient} from 'mongodb';
const app = express();

app.use(bodyParser.json());

async function useDataBase (myFunction) {
    try {
        const client = await MongoClient.connect("mongodb+srv://willk:<password>@cluster0-hsloz.gcp.mongodb.net/test?retryWrites=true&w=majority", {useNewUrlParser:true} )
        const db = client.db("ps_data");
        await myFunction(db);
        client.close();

    } catch (error) {
        res.status(500).json({message:'database failure', error})
    }
}

app.post('/api/articles/:name/upvote', async (req, res) => {
    useDataBase( async(db) => {
        const articleName = req.params.name;
        const info = await db.collection('articles').find({name: articleName})
        await db.collection('articles').updateOne(
            {name: articleName},
            {'$set' : {
                votes: info.votes + 1,
                },
            }
        );  
        info.votes = info.votes + 1;
        res.status(200).json(info);
    })
  
});

app.get('/api/articles/:name', async (req, res) =>
{
    useDataBase(async(db) => {
        const articleName = req.params.name;
        const info = await db.collection('articles').find({name: articleName})
        res.status(200).json(info);
    })
})

app.post('api/articles/:name/add-comment', async (req, req) => {
    const text = req.body;
    useDataBase(async(db) => {
        const info = await db.collection('articles').find({name: articleName});
        await db.collection('articles').updateOne(
            {name: articleName},
            {'$set' : {
                comments: info.comments.concat({text})
                },
            }
        );  
        const updatedInfo = await db.collection('articles').find({name: articleName});
        res.status(200).json(updatedInfo);
    })

})
app.listen(8000, () => console.log('started'));