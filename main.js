$.getJSON('data.json', function(data) {
  $.each(data, function(key, val) {
    let card = `
      <div class="card">
        <img src="${val['Profile image URL']}" alt="${val['Name']}">
        <h2>${val['Name']}</h2>
        <p>${val['Screen name']}</p>
        <p>${val['Twitter ID']}</p>
        <p>${val['Location']}</p>
        <p>${val['Biography']}</p>
        <!-- Add more fields as required -->
      </div>
    `;
    $('#grid').append(card);
  });
});
