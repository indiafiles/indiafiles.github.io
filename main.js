$.getJSON('data.json', function(data) {
  $('#table').DataTable({
    data: data,
    columns: [
      { data: 'Name', defaultContent: '' },
      { data: 'Screen name', defaultContent: '' },
      { data: 'Twitter ID', defaultContent: '' },
      { data: 'Location', defaultContent: '' },
      { data: 'Biography', defaultContent: '' },
      { data: 'Created date', defaultContent: '' },
      { data: 'Followers', defaultContent: '' },
      { data: 'Following', defaultContent: '' },
      { data: 'Tweets', defaultContent: '' },
      { data: 'Favorites', defaultContent: '' },
      { data: 'Website', defaultContent: '' },
      { data: 'Time zone', defaultContent: '' },
      { data: 'Geo-enabled', defaultContent: '' },
      { data: 'Verified', defaultContent: '' },
      { data: 'Language', defaultContent: '' },
      { data: 'Protected', defaultContent: '' },
      { data: 'Profile image URL', defaultContent: '' },
    ]
  });
});
