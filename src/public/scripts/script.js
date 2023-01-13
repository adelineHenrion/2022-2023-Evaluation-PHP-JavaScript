let submitForm = document.getElementById('main_form')
let prenom = document.getElementById('prenom')
let nom = document.getElementById('nom')
let email = document.getElementById('email')

let firstNameError = 'Veuiilez entrer votre prénom'
let lastNameError = 'Veuillez entrer votre nom'
let emailError = 'Veuillez entrer une adresse email valide'


function messageValidation(field, error, event) {
    if (field.value === '') {
        console.log("field")
        field.nextElementSibling.nextElementSibling.innerHTML = error
        console.log(field.nextElementSibling)
        event.preventDefault()
        return false
    } else {
        field.nextElementSibling.nextElementSibling.innerHTML = ''
        return true
    }
}

submitForm.addEventListener('submit', (event) => {
    let emailValidate = messageValidation(email, emailError, event)
    let prenomValidate = messageValidation(prenom, firstNameError, event)
    let lastNameValidate =messageValidation(nom, lastNameError, event)
    if(emailValidate && prenomValidate && lastNameValidate){
        if(window.confirm('Are you sure you want to submit?')){
            submitForm.submit();
        }
    }
})
