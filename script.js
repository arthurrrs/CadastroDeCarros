async function fetchData() {
    const tableBody = document.getElementById('car-table');
    tableBody.innerHTML = '<tr><td colspan="5" class="text-center">Carregando carros...</td></tr>'

    try {
        const response = await fetch('https://carangas.herokuapp.com/cars')

        const data = await response.json();
        const cars = data;
        console.log(cars);
      

        tableBody.innerHTML = '';

        cars.reverse().forEach(function(car) {
          const row = `
            <tr data-id="${car.id}">
            <td>${car.brand}</td>
            <td>${car.name}</td>
            <td>${car.price}</td>
          `;
          tableBody.innerHTML += row;
        })


    } catch (error) {

    }
    
}

fetchData()
