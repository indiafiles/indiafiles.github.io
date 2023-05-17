fetch('data.json')
  .then(response => response.json())
  .then(data => {
    // Count the occurrences of each country
    const countryCounts = {};
    data.forEach(obj => {
      const location = obj.Location;
      if (location) {
        const country = location.split(',').pop().trim();
        countryCounts[country] = (countryCounts[country] || 0) + 1;
      }
    });

    // Create a Leaflet map
    const map = L.map('map').setView([0, 0], 2); // Center the map initially

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
      maxZoom: 18
    }).addTo(map);

    // Add markers for each country with count as a popup
    Object.entries(countryCounts).forEach(([country, count]) => {
      const geocoder = L.Control.Geocoder.nominatim();

      geocoder.geocode(country, (results) => {
        if (results && results.length > 0) {
          const { lat, lon } = results[0].center;
          const marker = L.marker([lat, lon]).addTo(map);
          marker.bindPopup(`<b>${country}</b><br>${count} Locations`);
        }
      });
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });


  