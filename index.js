'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const messages = require('./messages');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/messages', (req, res) => { 
    messages.getAll((error,results) => {
        if(error){
            res.status(500).send('somethings wrong!');
            return; 
        }
        res.send(results);
    }); 
});

app.get('/messages/:id', (req, res) =>  {
    messages.getById(req.params.id, (error,results) => {
        if(error){
            res.status(500).send('somethings wrong!');
            return; 
        }
        res.send(results);
    });
});

app.post('/messages',  (req, res) =>  {
  messages.create(req.body.message, (error,results) => {
    if(error){
        res.status(500).send('somethings wrong!');
        return; 
    }
    res.send(results);
  });
});

app.delete('/messages/:id',  (req, res) =>  {
  messages.delete(Number(req.params.id), (error, results) => {
    if(error){
        res.status(500).send('somethings wrong!');
        return; 
    }
    res.send(results);
  });
});

app.put('/messages/:id',  (req, res) =>  {
  messages.update(Number(req.params.id), req.body.message, (error, results) => {
    if(error){
        res.status(500).send('somethings wrong!');
        return; 
    }
    res.send(results);
  });
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});