$.getJSON('data.json', function(data) {
  $('#table').DataTable({
    data: data,
    columns: [
      { data: 'Screen name', defaultContent: '', searchable: true, width: '15%' },
      { data: 'Twitter ID', defaultContent: '', searchable: false, width: '20%' },
      { data: 'Name', defaultContent: '', searchable: true, width: '15%' },
      { data: 'Biography', defaultContent: '', searchable: false, width: '20%' },
      { data: 'Location', defaultContent: '', searchable: false, width: '10%' },
      { data: 'Verified', defaultContent: '', searchable: false, width: '5%' },
      { data: 'Followers', defaultContent: '', searchable: false, width: '5%' },
      { data: 'Following', defaultContent: '', searchable: false, width: '5%' },
      { data: 'Tweets', defaultContent: '', searchable: false, width: '5%' }, 
    ],
    autoWidth: false // ensure that column widths are respected
  });
});
