
function drawCustomMap(selector, boundary, years, device){
    var width = 430, height = 480, scale = 800, center = [83, 23];
    var source = 'map/india.json';


    var svg = d3.select(selector)
        .append("svg")
        .attr("class", "custommap")
        .attr("viewBox", "0 0 " + width + " " + height)
        .attr("preserveAspectRatio", "xMinYMin")
        .append("g")

    var projection = d3.geoMercator()
        .scale(scale)
        .center(center)
        .translate([width / 2, height / 2])
    
    var geoPath = d3.geoPath()
            .projection(projection)

    function centroids(boundarydata){
        return boundarydata.map(function (d){
            return projection(d3.geoCentroid(d))
        });
    }

    d3.json(source, function (error, pathshape) {
        var pcboundary = topojson.feature(pathshape, pathshape.objects.pcboundary).features;
        var pcCentroid = centroids(pcboundary);
        // console.log("pcCentroid", pcCentroid);
        
        var constituenciesByState = {};
        
        pcboundary.forEach(function(pc){
            var code = pc.properties.ST_CODE;
            if (!constituenciesByState[code]) {
            	constituenciesByState[code] = [];
            }
            constituenciesByState[code].push(pc);
        });

        var stateboundary = topojson.feature(pathshape, pathshape.objects.stateboundary).features;

        var stateCentroid = centroids(stateboundary);

        var stateCounts = pcboundary.map(function(pc){
                return pc.properties.ST_CODE
            }).reduce(function (counts, code) { 
                counts[code] = (counts[code] || 0) + 1;
                return counts;
            }, {});

        svg.selectAll(".state")
                .data(stateboundary).enter().append("path")
                .attr("d", geoPath)
                .attr("class", "state")
                .attr('stroke', "#ffffff")
                .attr('stroke-width', "0.5")
                .attr('fill', "#dad9d9")
                .attr('stroke-opacity', "1")
                .attr("data-statecode", function(d,i){
                    // console.log(d['properties']['ST_CODE'],d['properties']['PC_CODE']);
                    return d['properties']['ST_CODE'];
                })

        var statePC = svg.selectAll(".statewise-seats").data(stateCentroid)
            .enter().append("svg")
            .attr("class", function(d,i){
                return "statewise-seats " + stateboundary[i]['properties']['ST_CODE'];
            })

        var eachConstRect = statePC.selectAll("rect")
            .data(function(d, index) { 
                var stateCode = stateboundary[index]['properties']['ST_CODE'];

                
                var constituencies = constituenciesByState[stateCode];
                
                var rowLength = Math.ceil(Math.sqrt(constituencies.length));  // rectangles per row
                var offset = 4;  // spacing between start of each rectangle
            
                var numCols = Math.min(constituencies.length, rowLength);
                var numRows = Math.ceil(constituencies.length/rowLength);
            
                var initialX = d[0] - (numCols * offset)/2;
                var initialY = d[1] - (numRows * offset)/2;
            
                var allconst = constituencies
                .map(function(c, i) {
                return {
                    x : initialX + ((i % rowLength) * offset),
                    y : initialY + Math.floor(i / rowLength) * offset,
                    pccode: c.properties.PC_CODE,
                    statecode: stateCode
                }
                }); 
                
                return allconst;
            })
            .enter()
            .append("rect")
            .attr("x", function(d){ return d.x })
            .attr("y", function (d){ return d.y })
            .attr("width", "3.3")
            .attr("height", "3.3")
            .attr("class", "constituency")
            .attr("fill", function(d,i){
                
                var fd = _.filter(constituency_2019, function(obj){

                        // return obj.stateCode === d.statecode && obj.pcno === d.pccode; 
                        return obj.stateCode === d.statecode && obj.pcno === d.pccode; 
                    });


                    if(fd[0] !== undefined){
                        
                        return colorCodesList2019[fd[0].leadingParty];
                    }else{
                        // console.log(fd[0]);
                        return "lightgreen";
                    }
                
            })
            .attr("data-pccode", function(d,i){
                // console.log(d['properties']['ST_CODE'],d['properties']['PC_CODE']);
                return d['pccode'];
            })
            .attr("data-statecode", function(d,i){
                // console.log(d['properties']['ST_CODE'],d['properties']['PC_CODE']);
                return d['statecode'];
            })

    })





    

    

}