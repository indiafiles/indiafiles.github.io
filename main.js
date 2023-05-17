$.getJSON('data.json', function(data) {
  $('#table').DataTable({
    data: data,
    columns: [
      { data: 'Name', defaultContent: '', searchable: true, width: '10%' },
      { data: 'Screen name', defaultContent: '', searchable: true, width: '10%' },
      { data: 'Twitter ID', defaultContent: '', searchable: false, width: '15%' },
      { data: 'Location', defaultContent: '', searchable: false, width: '10%' },
      { data: 'Biography', defaultContent: '', searchable: false, width: '20%' },
      { data: 'Followers', defaultContent: '', searchable: false, width: '5%' },
      { data: 'Following', defaultContent: '', searchable: false, width: '5%' },
      { data: 'Tweets', defaultContent: '', searchable: false, width: '5%' },
      { data: 'Favorites', defaultContent: '', searchable: false, width: '5%' },
      { data: 'Verified', defaultContent: '', searchable: false, width: '5%' },
      { data: 'Language', defaultContent: '', searchable: false, width: '5%' },
      { data: 'Protected', defaultContent: '', searchable: false, width: '5%' },
    ],
    autoWidth: false // ensure that column widths are respected
  });
});
