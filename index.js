const path = require('path');
const argv = require('yargs').argv;
const express = require('express');
const mock = require('swagger-mock-api');
const cors = require('cors');

const app = express();
const specFile = path.join(__dirname, argv._[0] || 'specs/locations.yaml');
console.log(specFile)

app.use(cors());

app.use(mock({
    swaggerFile: specFile,
    watch: true
}));

app.listen(4000, function () {
    console.log('API running on port 4000');
});
