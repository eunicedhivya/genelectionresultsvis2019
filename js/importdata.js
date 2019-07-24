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



  //++++++++++++++++++++++++++++++++++++++ Generate Cubes +++++++++++++++++++++++++++++++//
  var constituencymap = (function () {
    var constituencymap = null;
    jQuery.ajax({
        'async': false,
        'global': false,
        'url': 'map/india.json',
        'dataType': "json",
        'success': function (data) {
            constituencymap = data;
          //   console.log("DATA:"+constituencymap);
        }
    });
    return constituencymap;
  })(); 
  
  var constmap = constituencymap.objects.pcboundary.geometries;
  
  var Remodelled = [];
  
  for(var cm=0; cm<constmap.length; cm++){
    // console.log(constmap[cm].properties.PC_CODE, constmap[cm].properties.ST_CODE);
    // console.log("constmap", constmap[cm].properties);
    var fdConstMapData = _.filter(constituency_2019, function(obj){
      return obj.stateCode === constmap[cm].properties.ST_CODE && obj.pcno === constmap[cm].properties.PC_CODE;
    })
    Remodelled.push({
      stateCode:constmap[cm].properties.ST_CODE,
      pcno:constmap[cm].properties.PC_CODE
    })
    if(fdConstMapData[0] !== undefined){
      Remodelled[cm]['leadingParty'] = fdConstMapData[0].leadingParty;
      Remodelled[cm]['status'] = fdConstMapData[0].status;
      Remodelled[cm]['colors'] = colorCodesList2019[fdConstMapData[0].leadingParty];
    }else{
      Remodelled[cm]['colors'] = "#CCCCCC";
    }     
  }
  
  var sortOrder = {"#F39849": 0, "#E94927": 1, "#538296": 2, "#CCCCCC": 3, "unknown" : 100};
  
  var sortedData = Remodelled.sort(function (p1, p2) {
    return ((sortOrder[p1.colors || 'unknown'] + 1) || Infinity) - ((sortOrder[p2.colors || 'unknown'] + 1) || Infinity);
  }).filter(function(d){
    return d.stateCode !== null
  }) 

  // sortedData = sortedData.filter(function(d){
  //   return d.stateCode !== null
  // }) 
  // console.log("sortedData", sortedData);
  