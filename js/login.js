document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Obtener los valores de nombre de usuario y contraseña ingresados
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // Obtener los usuarios registrados del localStorage
  var users = JSON.parse(localStorage.getItem('users')) || [];

  // Buscar el usuario por nombre de usuario y contraseña
  var user = users.find(function(user) {
    return user.username === username && user.password === password;
  });

  // Verificar si se encontró el usuario
  if (user) {
    // Verificar el rol del usuario
    if (user.role === 'administrador') {
      // Redireccionar al usuario administrador a la página crud.html
      window.location.href = 'crud.html';
    } else {
      // Redireccionar al usuario no administrador a la página carCrud.html
      window.location.href = 'rent.html';
    }
  } else {
    // Mostrar mensaje de error o tomar alguna acción apropiada
    alert('Nombre o contraseña invalida');
  }
});

