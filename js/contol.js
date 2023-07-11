document.getElementById('forgotPasswordForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Obtener los valores ingresados por el usuario
  var username = document.getElementById('username').value;
  var reserveword = document.getElementById('reserveword').value;
  var newPassword = document.getElementById('newPassword').value;

  // Obtener los usuarios registrados del localStorage
  var users = JSON.parse(localStorage.getItem('users')) || [];

  // Buscar el usuario por nombre de usuario y palabra clave reservada
  var user = users.find(function(user) {
    return user.username === username && user.reserveword === reserveword;
  });

  // Verificar si se encontró el usuario
  if (user) {
    // Actualizar la contraseña del usuario
    user.password = newPassword;

    // Guardar los cambios en el localStorage
    localStorage.setItem('users', JSON.stringify(users));

    // Redireccionar al usuario de vuelta a la página de inicio de sesión
    window.location.href = 'login.html';
  } else {
    // Mostrar mensaje de error o tomar alguna acción apropiada
    alert('Datos inválidos. Por favor, inténtalo de nuevo.');
  }
});
