const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const { NodeVM } = require('vm2');
const MongoClient = require('mongodb').MongoClient;
app.use(cors());
app.use(bodyParser.json());
const port = 3070;

const context = {
    MongoClient: MongoClient,
};

const vm2 = new NodeVM({
    console: 'inherit',
    sandbox: context,
});

app.post('/run', (req, res) => {
    let executedClientCode = vm2.run(req.body.method);
    executedClientCode((result) => {
        res.send(result);
    });
})

app.listen(port, () => {
    console.log('Listening on port ' + port);
});