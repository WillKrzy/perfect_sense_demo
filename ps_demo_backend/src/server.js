import express from 'express';

const app = express();

app.get('/helllo', (req, res) => res.send('hello'));
app.get('/hello/:name', (req,res) => res.send(`hello ${req.params.name}`))

app.listen(8000, () => console.log('started'));