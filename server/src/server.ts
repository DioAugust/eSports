import express  from "express";

const app = express(

);

app.get('/ads',  (request, response) => {
    return response.json([
        {id: 1, name: 'anuncio1'},
        {id: 2, name: 'anuncio2'},
        {id: 3, name: 'anuncio3'},
        {id: 4, name: 'anuncio4'},
        {id: 5, name: 'anuncio5'},
    ])
});

app.listen(3333)