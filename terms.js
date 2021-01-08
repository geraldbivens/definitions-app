const termsList = document.querySelector('#terms-list')

fetch('http://localhost:3000/terms')
    .then(response => response.json())
    .then(result => console.log('terms', result))