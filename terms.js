const termsList = document.querySelector('#terms-list')

fetch('http://localhost:3000/terms')
    .then(response => response.json())
    .then(renderTerms)

function renderTerms(terms){
    terms.forEach(term => {
        const name = document.createElement('li')
        name.innerText = term.name
        termsList.append(name)
    })   
}