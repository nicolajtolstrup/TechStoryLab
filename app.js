// https://ahtltmjkqugawhxbaxlq.supabase.co/rest/v1/udstyr?select=id,titel,beskrivelse,images(image_url)'
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFodGx0bWprcXVnYXdoeGJheGxxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQyNjI2NDIsImV4cCI6MjA0OTgzODY0Mn0.zxIp1ycB__69mplNEZ76f5u0gimZjrfaE2zTEmyh4Tc'
const url = 'https://ahtltmjkqugawhxbaxlq.supabase.co/rest/v1/udstyr?select=id,titel,beskrivelse,images(image_url)'; // Supabase URL + tabelnavn
const options = {
  method: 'GET', // Hent data (GET request)
  headers: {
    apikey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFodGx0bWprcXVnYXdoeGJheGxxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQyNjI2NDIsImV4cCI6MjA0OTgzODY0Mn0.zxIp1ycB__69mplNEZ76f5u0gimZjrfaE2zTEmyh4Tc', // Erstat med din Supabase API-nøgle
    'Content-Type': 'application/json' // Forvent JSON-data som svar
  }
};

// Hent data fra Supabase
fetch(url, options)
  .then(response => response.json()) // Konverter dataen til JSON
  .then(data => {
    console.log(data); // Se dataen i konsollen, så du ved, hvad du arbejder med
    const listContainer = document.getElementById('camera-list');

    // Loop gennem dataene og vis dem på siden
    data.forEach(item => {
      const itemElement = document.createElement('div');
      itemElement.classList.add('equipment-item');

      itemElement.innerHTML = `
        <img src="${item.images.image_url}" alt="${item.name}" />
        <h3>${item.name}</h3>
        <p>${item.description}</p>
      `;

      listContainer.appendChild(itemElement);
    });
  })
  .catch(error => console.error('Error:', error)); // Fejlbehandling
