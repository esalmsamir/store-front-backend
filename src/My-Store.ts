import express, { Request, Response } from 'express';
import client from './database'
const cors = require('cors');
import config from './config'
const app = express();
const port = 3000;
import database from './database'

console.log(config)
app.use(cors())
app.use(express.json())

database.connect().then((client) => {
    return client
        .query('SELECT NOW()')
        .then((res) => {
            client.release();
            console.log(res.rows)
        })
        .catch((err) => {
            client.release();
            console.log(err.stack)
        });
});


app.post('/', function (req: Request, res: Response) {
    res.send('Hello World')
})






app.listen(port, () => {
    console.log('listing')
})