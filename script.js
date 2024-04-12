fetch('https://whatyearisit-backend-xi-nine.vercel.app/year')
    .then(response => response.json())
    .then(data => {
        document.querySelector('#year').textContent = data.year.toString(); 
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
