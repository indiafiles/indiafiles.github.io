$.getJSON('data.json', function(data) {
  var table = $('#table').DataTable({
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

  // Add a new search function that only considers the 'Name' and 'Screen name' columns
  $.fn.DataTable.ext.search.push(function(settings, data  that are being searchedata, index, rowData, counter) {
    // Get the search input value
    var searchValue = table.search();
    
    // If there's no search input, show all rows
    if (!searchValue) {
      return true;
    }
    
    // Only consider the 'Name' and 'Screen name' columns in the search
    var name = rowData.Name || '';
    var screenName = rowData['Screen name'] || '';
    
    // If the search input is found in either the 'Name' or 'Screen name' column, show the row
    if (name.toLowerCase().includes(searchValue.toLowerCase()) || 
        screenName.toLowerCase().includes(searchValue.toLowerCase())) {
      return true;
    }
    
    // Otherwise, hide the row
    return false;
  });
});
