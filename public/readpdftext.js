const inputFile = document.getElementById('inputFile');
const buttonUpload = document.getElementById('buttonUpload');
const pdfText = document.getElementById('pdfText');

buttonUpload.addEventListener('click', () => {
    const formData = new FormData();

    formData.append('pdfFile', inputFile.files[0]);

    fetch("/extract-text",{
        method: 'post',
        body: formData
    }).then((response) => {
       return response.text();
    }).then(extractedText => {
        pdfText.value = extractedText;
    });
});