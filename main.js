$.getJSON('data.json', function(data) {
  $('#table').DataTable({
    data: data,
    dom: "<'row'<'col-sm-12 col-md-6'l><'col-sm-12 col-md-6'f>>" +
         "<'row'<'col-sm-12'tr>>" +
         "<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
    columns: [
      { data: 'Screen name', defaultContent: '', searchable: true, width: '20%' },
      { data: 'Twitter ID', defaultContent: '', searchable: false, width: '20%' },
      { data: 'Name', defaultContent: '', searchable: true, width: '20%' },
      { data: 'Biography', defaultContent: '', searchable: false, width: '20%' },
      { data: 'Location', defaultContent: '', searchable: false, width: '10%' },
      { data: 'Verified', defaultContent: '', searchable: false, width: '5%' },
      { data: 'Followers', defaultContent: '', searchable: false, width: '5%' },
       
    ],
    autoWidth: false // ensure that column widths are respected
  });
});
