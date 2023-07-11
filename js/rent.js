// Obtener el formulario
const rentForm = document.getElementById('rentForm');

// Agregar un evento de submit al formulario
rentForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Evitar el envío del formulario por defecto

  // Obtener los valores del formulario
  const username = document.getElementById('username').value;
  const platenumber = document.getElementById('platenumber').value;
  const initialdate = document.getElementById('initialdate').value;
  const finaldate = document.getElementById('finaldate').value;
  
  // Realizar la solicitud al servidor para guardar el alquiler de vehículo
  const rentData = {
    username: username,
    platenumber: platenumber,
    initialdate: initialdate,
    finaldate: finaldate,
    status: 'Pendiente' // Puedes establecer un estado por defecto, como "Pendiente"
  };

  // Envía los datos al servidor utilizando AJAX, fetch u otra librería/tecnología de tu elección
  // Ejemplo usando fetch:
  fetch('ruta_del_servidor/rentar_vehiculo', {
    method: 'POST',
    body: JSON.stringify(rentData),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(function(response) {
    if (response.ok) {
      // El alquiler se registró correctamente
      alert('El vehículo se ha alquilado con éxito.');
      // Aquí puedes redirigir al usuario a otra página si lo deseas
    } else {
      // Hubo un error al registrar el alquiler
      alert('Error al alquilar el vehículo. Por favor, inténtalo nuevamente.');
    }
  })
  .catch(function(error) {
    console.error('Error:', error);
    alert('Ocurrió un error. Por favor, verifica tu conexión y vuelve a intentarlo.');
  });
});


