window.addEventListener('load', function (){
    const form = document.querySelector('.form-register')
    
    function retrieveData (event) {
        event.preventDefault()

        const data = {}
        data.name = document.querySelector('#name').value
        data.username = document.querySelector('#username').value
        data.password = document.querySelector('#password').value
        
        console.log(data)

        fetch('http://localhost:9000/users', {
            method:'POST',
            headers: {
            'content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then( response => response.json())
        .then(user => {
            alert(`el usuario ${user.username} ya está guardado`)
        })
    }

    form.addEventListener('submit', retrieveData)
})

const promise = fetch ('http://jsonplaceholder.typicode.com/todos')
promise.then((todos)=>console.log(todos))

promise.catch ((err) => console.error(err))
