const sigupForm = document.querySelector('#signupForm')
sigupForm.addEventListener('submit', (e)=>{
  e.preventDefault()
  const username = document.querySelector('#username').value
  const name = document.querySelector('#name').value
  const role = document.querySelector('#role').value
  const password = document.querySelector('#password').value
  const reserveword = document.querySelector('#reserveword').value;

  const Users = JSON.parse(localStorage.getItem('users')) || []
  const IsUserRegistered = Users.find(user => user.username === username)
  if (IsUserRegistered){
    return alert('El usuario ya esta registrado!')
  }

  Users.push({name: name, username: username, role: role, password: password, reserveword: reserveword})
  localStorage.setItem('users', JSON.stringify(Users))
  alert('Registro Exitoso!')
  // redirección a login
  window.location.href = 'login.html'
})



