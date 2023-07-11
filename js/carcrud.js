var carList = JSON.parse(localStorage.getItem('carList')) || [];
var rentedCar = JSON.parse(localStorage.getItem('rentedCar'));

// Función para renderizar la lista de carros
function renderCarList() {
  var carListContainer = document.querySelector('.car-list');
  carListContainer.innerHTML = '';

  carList.forEach(function(car) {
    var carElement = document.createElement('div');
    carElement.classList.add('car');
    carElement.innerHTML = `
      <img src="${car.image}" alt="${car.name}">
      <h4>${car.name}</h4>
      <p>${car.description}</p>
      <button class="btn btn-primary rent-btn" data-placa="${car.placa}">Rentar</button>
    `;

    carListContainer.appendChild(carElement);
  });
}

// Manejar el evento de rentar un carro
function rentCar(event) {
  event.preventDefault();
  var placa = this.getAttribute('data-placa');

  // Obtener el carro seleccionado de la lista de carros
  var selectedCar = carList.find(function(car) {
    return car.placa === placa;
  });

  if (selectedCar) {
    // Guardar el carro rentado en localStorage
    localStorage.setItem('rentedCar', JSON.stringify(selectedCar));

    // Remover el carro rentado de la lista de carros
    carList = carList.filter(function(car) {
      return car.placa !== placa;
    });

    // Actualizar la lista de carros renderizada
    renderCarList();
  }
}

// Asignar el evento de rentar a los botones correspondientes
var rentButtons = document.querySelectorAll('.rent-btn');
rentButtons.forEach(function(button) {
  button.addEventListener('click', rentCar);
});

// Renderizar la lista de carros al cargar la página
renderCarList();

// Obtener el formulario de renta
var rentForm = document.querySelector('#rent-form');

// Manejar el evento de envío del formulario
rentForm.addEventListener('submit', function(event) {
  event.preventDefault();

  // Obtener los valores del formulario
  var placaInput = document.querySelector('#placa');
  var fechaInicialInput = document.querySelector('#fecha-inicial');
  var fechaFinalInput = document.querySelector('#fecha-final');

  var placa = placaInput.value;
  var fechaInicial = fechaInicialInput.value;
  var fechaFinal = fechaFinalInput.value;

  // Guardar la renta en localStorage
  var rentData = {
    placa: placa,
    fechaInicial: fechaInicial,
    fechaFinal: fechaFinal
  };
  localStorage.setItem('rentData', JSON.stringify(rentData));

  // Limpiar los campos del formulario
  placaInput.value = '';
  fechaInicialInput.value = '';
  fechaFinalInput.value = '';

  // Mostrar mensaje de éxito
  alert('El vehículo se ha rentado exitosamente.');

  // Redirigir a la página de lista de vehículos
  window.location.href = 'carCrud.html';
});
