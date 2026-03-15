const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.get('/check', (req, res) => {
    res.status(200).send('OK');
});

app.get('/info', (req, res) => {
    res.json({
        "Instancia": "Maquina 1 - Api 1",
        "Curso": "Seminario de Sistemas 1 - Seccion A",
        "Grupo": "Grupo 9"
    });
});

app.listen(port, () => {
    console.log(`API 1 listening on port ${port}`);
});
