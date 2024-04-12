fetch('http://localhost:3000/year')
    .then(response => response.json())
    .then(data => {
        document.querySelector('#year').textContent = data.year; 
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
