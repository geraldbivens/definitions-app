const createUser = document.querySelector('#create-user')

fetch('http://localhost:3000/users')
    .then(response => response.json())
    .then(result => console.log('users', result))

createUser.addEventListener('submit', (event) => {
    event.preventDefault()
    
    const formData = new FormData(createUser)
    
    const first_name = formData.get('first_name')
    const last_name = formData.get('last_name')
    const email = formData.get('email')
    const password = formData.get('password')
    const newUser = {
        first_name: first_name,
        last_name: last_name,
        email: email,
        password: password
    }

    fetch('http://localhost:3000/users', {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newUser)
    })
    .then(response => response.json())
    .then(result => console.log('new user', result))
})