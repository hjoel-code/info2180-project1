/* Add your JavaScript to this file */

document.addEventListener('DOMContentLoaded', () => {
    const email = document.getElementById('email')
    const form = Array.from(document.getElementsByTagName('form'))[0]
    const msg = Array.from(document.getElementsByClassName('message'))[0]
    console.log(form, msg)
    form.addEventListener('submit', e => {
        e.preventDefault()
        if (email.value === '') {
            msg.innerHTML = "<p>Please enter a valid email address</p>"
        } else {
            msg.innerHTML = "<p>Thank you! Your email address " + email.value + "</p>"
        }
    })
})
