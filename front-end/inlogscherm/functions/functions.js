const loginForm = document.getElementById('login-form')
const loginButton = document.getElementById('login-form-submit')
const loginErrorMsg = document.getElementById('login-error-msg')

loginButton.addEventListener('click', (e) => {
  e.preventDefault()
  const email = loginForm.email.value
  const password = loginForm.password.value

  alert("hallo")

  if (email === 'boss@email.com' && password === 'boss123') {
    alert('You have successfully logged in.')
    location.replace('../boss.html')
  } else if (email === 'host@email.com' && password === 'host123') {
    alert('You have successfully logged in.')
    location.replace('../host.html')
  } else if (email === 'customer@email.com' && password === 'customer123') {
    alert('You have successfully logged in.')
    location.replace('../customer.html')
  } else {
    loginErrorMsg.style.opacity = 1
    alert('fout!')
  }
})
