$.getJSON('data.json', function(data) {
  $('#table').DataTable({
    data: data,
    columns: [
      { data: 'Name' },
      { data: 'Screen name' },
      { data: 'Twitter ID' },
      { data: 'Location' },
      { data: 'Biography' },
      { data: 'Created date' },  
      { data: 'Followers' }, 
      { data: 'Following' },
      { data: 'Tweets' },  
      { data: 'Favorites' },  
      { data: 'Website' },  
      { data: 'Time zone' },  
      { data: 'Geo-enabled' },  
      { data: 'Verified' },  
      { data: 'Language' },  
      { data: 'Protected' },  
      { data: 'Profile image URL' },  
    ]
  });
});
