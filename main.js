$.getJSON('data.json', function(data) {
  $('#table').DataTable({
    data: data,
    columns: [
      { data: 'Name', defaultContent: '', searchable: true },
      { data: 'Screen name', defaultContent: '', searchable: true },
      { data: 'Twitter ID', defaultContent: '', searchable: false },
      { data: 'Location', defaultContent: '', searchable: false },
      { data: 'Biography', defaultContent: '', searchable: false },
      { data: 'Created date', defaultContent: '', searchable: false },
      { data: 'Followers', defaultContent: '', searchable: false },
      { data: 'Following', defaultContent: '', searchable: false },
      { data: 'Tweets', defaultContent: '', searchable: false },
      { data: 'Favorites', defaultContent: '', searchable: false },
      { data: 'Website', defaultContent: '', searchable: false },
      { data: 'Time zone', defaultContent: '', searchable: false },
      { data: 'Geo-enabled', defaultContent: '', searchable: false },
      { data: 'Verified', defaultContent: '', searchable: false },
      { data: 'Language', defaultContent: '', searchable: false },
      { data: 'Protected', defaultContent: '', searchable: false },
      { data: 'Profile image URL', defaultContent: '', searchable: false },
    ]
  });
});
