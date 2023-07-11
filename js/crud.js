function listVehicle(rentedVehicles) {
  // Obtener el contenedor de la tabla de vehículos
  const vehicleTable = document.getElementById('vehicleTable');

  // Limpiar el contenido actual del contenedor
  vehicleTable.innerHTML = '';

  // Mostrar la información de todos los vehículos rentados
  rentedVehicles.forEach(vehicle => {
    // Crear una nueva fila en la tabla para mostrar la información del vehículo
    const newRow = document.createElement('tr');

    // Crear las celdas para cada dato del vehículo
    const plateCell = document.createElement('td');
    plateCell.textContent = vehicle.plate;
    plateCell.style.color = 'black';
    newRow.appendChild(plateCell);

    const brandCell = document.createElement('td');
    brandCell.textContent = vehicle.brand;
    brandCell.style.color = 'black';
    newRow.appendChild(brandCell);

    const priceCell = document.createElement('td');
    priceCell.textContent = vehicle.price;
    priceCell.style.color = 'black';
    newRow.appendChild(priceCell);

    const stateCell = document.createElement('td');
    stateCell.textContent = vehicle.state;
    stateCell.style.color = 'black';
    newRow.appendChild(stateCell);

    // Agregar la fila a la tabla de vehículos
    vehicleTable.appendChild(newRow);
  });
}

// Llamar a la función listVehicle al cargar la página
const rentedVehicles = JSON.parse(localStorage.getItem('rentedVehicles')) || [];
listVehicle(rentedVehicles);

function searchVehicle() {
  const plateInput = document.getElementById('plateInput').value;

  // Obtener el arreglo de vehículos rentados del localStorage
  const rentedVehicles = JSON.parse(localStorage.getItem('rentedVehicles')) || [];

  // Buscar el vehículo en el arreglo
  const foundVehicle = rentedVehicles.find(vehicle => vehicle.plate === plateInput);

  // Resaltar la fila correspondiente en la tabla
  if (foundVehicle) {
    const vehicleTable = document.getElementById('vehicleTable');
    const rows = vehicleTable.getElementsByTagName('tr');

    for (let i = 0; i < rows.length; i++) {
      const row = rows[i];
      const plateCell = row.getElementsByTagName('td')[0];
      
      if (plateCell.textContent === foundVehicle.plate) {
        row.classList.add('highlighted');
      } else {
        row.classList.remove('highlighted');
      }
    }

    document.getElementById('searchResult').textContent = `Vehículo encontrado. Marca: ${foundVehicle.brand} - Precio/Día: ${foundVehicle.price}`;
    document.getElementById('searchResult').style.color = 'white';
    document.getElementById('searchResult').style.textAlign = 'center';
    document.getElementById('searchResult').style.textDecoration = 'underline';
  } else {
    document.getElementById('searchResult').textContent = 'Vehículo no encontrado o no ingresaste ningún dato';
    document.getElementById('searchResult').style.color = 'white';
  }
}

// Llamar a la función searchVehicle al hacer clic en el botón "Buscar"
document.getElementById('searchButton').addEventListener('click', searchVehicle);
