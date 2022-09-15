import express  from "express";
const app = express();

app.get('/games', (request, response) => {
    return response.json([]);
})

app.post('/ads', (request, response) => {
    return response.status(201).json([]);
})


app.get('/games/:id/ads',  (request, response) => {
    // const gamesId = request.params.id;

    return response.json([
        {id: 1, name: 'anuncio1'},
        {id: 2, name: 'anuncio2'},
        {id: 3, name: 'anuncio3'},
        {id: 4, name: 'anuncio4'},
        {id: 5, name: 'anuncio5'},
    ])
});

app.get('ads/:id/discord',  (request, response) => {
    // const adId = request.params.id;

    return response.json([])
});

app.listen(3333)