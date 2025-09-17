const express = require ('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Halo, selamat datang di express!');
});

app.listen(3000, () => {
    console.log('Server berjalan pada http://localhost:3000');
});