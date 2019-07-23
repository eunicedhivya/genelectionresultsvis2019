
function drawMap(selector, boundary, years, device){

    
    var width = 430, height = 480, scale = 800, center = [83, 23];
    var source = 'map/india.json'; // Constituency map with border

    var svg = d3.select(selector)
        .append("svg")
        .attr("class", "map")
        .attr("viewBox", "0 0 " + width + " " + height)
        .attr("preserveAspectRatio", "xMinYMin")
        .append("g")

    var projection = d3.geoMercator()
        .scale(scale)
        .center(center)
        .translate([width / 2, height / 2])
            
    var geoPath = d3.geoPath()
        .projection(projection)

    d3.json(source, function (error, pathshape) {

        var pcboundary = topojson.feature(pathshape, pathshape.objects.pcboundary).features;

        var stateboundary = topojson.feature(pathshape, pathshape.objects.stateboundary).features;

        svg.selectAll(".constituency")
            .data(pcboundary).enter().append("path")
            .attr("d", geoPath)
            .attr("class", "constituency"+years)
            .attr('fill', "#ffffff")
            .attr('stroke', "#666666")
            .attr('stroke-width', "0.2")
            .attr('stroke-opacity', "0.5")
            .attr("data-pccode", function(d,i){
                return d['properties']['PC_CODE'];
            })
            .attr("data-statecode", function(d,i){
                return d['properties']['ST_CODE'];
            })
            .attr("data-statename", function(d,i){
                return d['properties']['ST_NAME'];
            })
            .attr("data-constname", function(d,i){
                return d['properties']['PC_NAME'];
            })
        
        svg.selectAll(".state-stroke")
            .data(stateboundary).enter().append("path")
            .attr("d", geoPath)
            .attr("class", "state-stroke")
            .attr('stroke', "#888888")
            .attr('stroke-width', "0.8")
            .attr('fill', "none")
            .attr('stroke-opacity', "1")
            
        d3.selectAll(".constituency2014").attr("fill", function(d){
            var dataStatecode = $(this).attr("data-statecode");
            var dataPccode = parseInt($(this).attr("data-pccode"));

            // console.log(dataPccode, dataStatecode);
            var fillColorinMap;
            var constwisetrend_2014 = _.filter(constituency_2014, function(d){
                    return d.stateCode === dataStatecode && d.pcno === dataPccode;
            })

            if(constwisetrend_2014[0] !== undefined){
                // console.log("constwisetrend_2014", constwisetrend_2014[0]["leadingParty"]);
                fillColorinMap = colorCodesList[constwisetrend_2014[0]["leadingParty"]]
            }else{
                // console.log(constwisetrend_2014);
                // constwisetrend_2014[0]["leadingParty"]
                fillColorinMap = "#ffffff"
            }
            
            // console.log("fillColorinMap", fillColorinMap);
            
            return fillColorinMap;
        })
        d3.selectAll(".constituency2014").attr("stroke", "white")
        
        
        d3.selectAll(".constituency2019").attr("fill", function(d){
            // get embedded data selectors
            var dataStatecode = $(this).attr("data-statecode");
            var dataPccode = parseInt($(this).attr("data-pccode"));
            
            // console.log(dataPccode, dataStatecode);
            var fillColorinMap;
            // var constwisetrend_2014 = _.filter(constituency_2014, function(d){
                //        return d.stateCode === dataStatecode && d.pcno === dataPccode;
                // })
                
                var fd = _.filter(constituency_2019, function(obj){
                    
                    // return obj.stateCode === d.statecode && obj.pcno === d.pccode; 
                    return obj.stateCode === dataStatecode && obj.pcno === dataPccode; 
                });
                
                
                if(fd[0] !== undefined){
                    
                    return colorCodesList2019[fd[0].leadingParty];
                }else{
                    // console.log(fd[0]);
                    return "white";
                }
                
        })
        d3.selectAll(".constituency2019").attr("stroke", "white")

    }) //d3.json


    

    

}