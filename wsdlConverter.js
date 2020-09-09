var soap = require('strong-soap').soap;
const express = require('express')
const app = express()
app.use(express.json())

app.post('/convert', (req, res) => {

    soap.createClient(req.body.url, {}, (err, client) => {
        var method = client[req.body.operation];
        method({ zipcode: req.body.Args }, function (err, result, envelope, soapHeader) {


            res.send({ result, envelope })
        });
    })
})

app.listen(3000, () => {
    console.log('server is up and running')
})