const path = require('path');
const express = require('express');
const mock = require('swagger-mock-api');
const cors = require('cors');

const app = express();
const specFile = path.join(__dirname, 'specs/index.yaml');

app.use(cors());

app.use(mock({
    swaggerFile: specFile,
    watch: true
}));

app.listen(4000, function () {
    console.log('API running on port 4000');
});
