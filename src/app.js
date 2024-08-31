const express = require('express');
const dotenv = require('dotenv');
const cors = require('express');

dotenv.config();
const app = express();

const port = process.env.PORT || 3000;

const routerApi = require('./routes');

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Backend con NodeJs - Express + CRUD API REST + MySQL');
});

routerApi(app);

app.listen(port, () => {
    console.log("Port ==> ", port);
})

