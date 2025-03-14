
document.getElementById('carForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

   
    const brand = document.getElementById('carBrand').value;
    const name = document.getElementById('carName').value;
    const price = document.getElementById('Price').value;
    const fuelType = document.getElementById('FuelType').value;

   
    if (brand && name && price && fuelType) {
        document.getElementById('message').textContent = `Carro ${name} (${brand}) cadastrado com sucesso!`;
        document.getElementById('message').style.color = 'green';


        document.getElementById('carForm').reset();
    } else {
        document.getElementById('message').textContent = 'Preencha todos os campos corretamente.';
        document.getElementById('message').style.color = 'red';
    }
});
