function returnCar() {
  // Obtener los valores del formulario
  const plate = document.getElementById('plateInput').value;
  const rentNumber = document.getElementById('rentNumberInput').value;
  const returnDate = document.getElementById('returnDateInput').value;

  // Obtener el arreglo de vehículos rentados almacenado en el localStorage
  let rentedVehicles = JSON.parse(localStorage.getItem('rentedVehicles')) || [];

  // Buscar la renta correspondiente al vehículo y número de renta ingresados
  const rentalIndex = rentedVehicles.findIndex(rental => rental.plate === plate && rental.rentNumber === parseInt(rentNumber));

  // Verificar si se encontró la renta
  if (rentalIndex !== -1) {
    // Obtener la renta correspondiente
    const rental = rentedVehicles[rentalIndex];

    // Verificar que la fecha final coincida
    if (rental.endDate === returnDate) {
      // Actualizar la fecha de devolución en la renta correspondiente
      rental.returnDate = returnDate;

      // Eliminar la renta del arreglo
      rentedVehicles.splice(rentalIndex, 1);

      // Actualizar el arreglo de vehículos rentados en el localStorage
      localStorage.setItem('rentedVehicles', JSON.stringify(rentedVehicles));

      // Mostrar mensaje de éxito
      alert('¡El vehículo se ha devuelto exitosamente!');
    } else {
      // Mostrar mensaje de error si la fecha final no coincide
      alert('La fecha final ingresada no coincide con la fecha de renta del vehículo.');
    }
  } else {
    // Mostrar mensaje de error si no se encontró la renta
    alert('No se encontró una renta correspondiente al vehículo y número de renta ingresados.');
  }

  // Restablecer el formulario
  document.getElementById('returnForm').reset();
}
