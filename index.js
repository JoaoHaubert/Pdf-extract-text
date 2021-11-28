const express = require('express');
const fileUpload = require('express-fileupload');
const pdfParse = require('pdf-parse');

const app = express();

app.use('/', express.static('public'));
app.use (fileUpload());

app.post('/extract-text', (request, response) => {
    if (!request.files && !response.files.pdfFile) {
        response.status(400);
        response.end();
    } 
    pdfParse(request.files.pdfFile).then(result =>{
        response.send(result.text);
    });  
})

app.listen(3000);
