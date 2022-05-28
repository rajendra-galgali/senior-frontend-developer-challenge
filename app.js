const express = require('express');
const app = express();
const portNumber = 1992;
const bodyParser = require('body-parser');
let _ = require('./node_modules/lodash/lodash')
app.use(express.static('public'));
app.use('/lib', express.static('node_modules'));
app.listen(portNumber, () => console.log(`Application is running on ${portNumber} port.`));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: false }));
app.use(bodyParser.json({ limit: '50mb' }));
app.post('/compareValues', (req, res) => {
    let baseObject = req.body.baseObject;
    let jsonPath = req.body.jsonPath;
    for (const path of jsonPath) {
        let jPath = path.path.split('/');
        let v
        let lastPath = '';
        for (let i = 1; i < jPath.length; i++) {
            if (!lastPath) {
                lastPath = jPath[i]
                continue;
            }
            if (Array.isArray(_.get(baseObject, lastPath))) {
                lastPath = lastPath + `[${jPath[i]}]`
            } else {
                lastPath = lastPath + `.${jPath[i]}`
            }
        }
        if (path.op === 'add') {
            if (typeof path.value == 'object') {
                v = `<a> ${JSON.stringify(path.value)} </a>`
            } else {
                v = `<a> ${path.value} </a>`
            }

        } else {
            if (typeof path.value == 'object') {
                v = `<s><a> ${JSON.stringify(_.get(baseObject, lastPath))} </a ></s>   <a> ${JSON.stringify(path.value)} </a>`
            } else {
                v = `<s><a> ${JSON.stringify(_.get(baseObject, lastPath))} </a ></s>   <a> ${path.value} </a >`
            }
        }
        _.set(baseObject, lastPath, v)
    }
    res.status(200).send(baseObject)
})
