var constituency_2014 = (function () {
    var constituency_2014 = null;
    jQuery.ajax({
        'async': false,
        'global': false,
        'dataType' : 'json',
        'url': 'data/constituency_2014.json',
        
        'success': function (data) {
            constituency_2014 = data;
          //   console.log("DATA:"+JSON.stringify(data, null, 4));
            //console.log("DATA:"+data);
        }
    });
   return constituency_2014;
  })();


  var constituency_2019 = (function () {
    var constituency_2019 = null;
    jQuery.ajax({
        'async': false,
        'global': false,
        'dataType' : 'json',
        'url': 'data/constituency_2019.json',
        
        'success': function (data) {
            constituency_2019 = data;
          //   console.log("DATA:"+JSON.stringify(data, null, 4));
            //console.log("DATA:"+data);
        }
    });
   return constituency_2019;
  })();
  // console.log("constituency_2014", constituency_2014);
  