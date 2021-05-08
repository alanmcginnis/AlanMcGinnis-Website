import './main.scss';


const handleSubmit = (e) => {
  e.preventDefault()
  let myForm = document.getElementById('newsletter')
  let email = document.getElementById('email')
  let formData = new FormData(myForm)
  fetch('/', {
    method: 'POST',
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString()
  }).then(() => {
    alert('Form successfully submitted')
    email.value = ""
  }
  ).catch((error) =>
  alert(error))
}

document.querySelector("form").addEventListener("submit", handleSubmit);