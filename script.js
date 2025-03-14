document.getElementById('show-cars').addEventListener('click', function() {
    const carList = document.getElementById('car-list');

    const cars = [
        { name: 'Fusca', image: 'https://www.carrosnaweb.com.br/fotos/fusca.jpg' },
        { name: 'Civic', image: 'https://www.carrosnaweb.com.br/fotos/civic.jpg' },
        { name: 'Chevrolet Camaro', image: 'https://www.carrosnaweb.com.br/fotos/camaro.jpg' },
        { name: 'Ferrari', image: 'https://www.carrosnaweb.com.br/fotos/ferrari.jpg' },
    ];

    carList.innerHTML = ''; // Limpa a lista antes de adicionar novos carros

    cars.forEach(car => {
        const carItem = document.createElement('div');
        carItem.classList.add('car-item');

        const carImage = document.createElement('img');
        carImage.src = car.image;
        carImage.alt = car.name;

        const carName = document.createElement('h3');
        carName.textContent = car.name;

        carItem.appendChild(carImage);
        carItem.appendChild(carName);
        carList.appendChild(carItem);
    });
});
