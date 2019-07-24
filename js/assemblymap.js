function drawAssemblyMap(selector, years, device, settings){
    var width = 430, height = 350, scale = 800, center = [83, 23];
    var indiaSource = 'map/india.json'
    // var source = 'data/map/andhrapradesh-ac.json'
    var state = settings.statecode;
    var source = settings.mapsource;

    d3.select(selector).html(null)

    var svg = d3.select(selector)
    .append("svg")
    .attr("class", "asmap")
    .attr("viewBox", "0 0 " + width + " " + height)
    .attr("preserveAspectRatio", "xMinYMin")
    .append("g")

    var projection = d3.geoMercator()
    .scale(settings.scale)
    .center(settings.center)
    .translate([width / 2, height / 2])
    // .scale(scale)
    // .center(center)
    // .translate([width / 2, height / 2])

    var geoPath = d3.geoPath()
        .projection(projection)

    function centroids(boundarydata){
        return boundarydata.map(function (d){
            return projection(d3.geoCentroid(d))
        });
    }

    
    
    d3.json(indiaSource, function (error, indiashape) {
        d3.json(source, function(error, stateShape){

            
            // console.log("constituenciesByStatein AE", constituenciesByState);
            
            
            
            var indiaboundary = topojson.feature(indiashape, indiashape.objects.stateboundary).features;
            var stateboundary = topojson.feature(stateShape, stateShape.objects.collection).features;

            // console.log("stateboundary", stateboundary);
            
            
            var constituenciesByState = {};
            var test = 0
            stateboundary.forEach(function(pc, i){
                // console.log(i, pc.properties.ST_CODE);
                
                var code = pc.properties.ST_CODE;
                if (!constituenciesByState[code]) {
                    constituenciesByState[code] = [];
                }
                constituenciesByState[code].push(pc);
            });
            var chosenState = _.filter(indiaboundary, function(d){
                return d.properties.ST_CODE === state;
            })
            var stateCentroid = centroids(chosenState)
            // console.log(indiashape.objects.stateboundary.geometries);
            // console.log("constituenciesByStateAE", constituenciesByState);
            // console.log(stateCentroid);

            svg.selectAll(".state")
                        .data(chosenState).enter().append("path")
                        .attr("d", geoPath)
                        .attr("class", "state")
                        .attr('stroke', "#ffffff")
                        .attr('stroke-width', "0.5")
                        .attr('fill', "#dad9d9")
                        .attr('stroke-opacity', "1")
                        .attr("data-statecode", function(d,i){
                            return d['properties']['ST_CODE'];
                        }) 

            var statePC = svg.selectAll(".statewise-seats").data(stateCentroid)
                .enter().append("svg")
                .attr("class", function(d,i){
                    return "statewise-as-seats " + stateboundary[i]['properties']['ST_CODE'];
                })

            var eachConstRect = statePC.selectAll("rect")
                .data(function(d, index) { 
                    var stateCode = stateboundary[index]['properties']['ST_CODE'];

                    
                    var constituencies = constituenciesByState[stateCode];
                    //   partywise_2019 = partywise_2019.filter(function(item) { 
//   return item['party'] !== "Total";  
// })               
                    constituencies = constituencies.filter(function(fil){
                        return fil.properties.AC_NO !== 0;
                    })
                    
                    // console.log(constituencies);
                    
                    
                    var rowLength = Math.ceil(Math.sqrt(constituencies.length + 10));  // rectangles per row
                    // var rowLength = 20                                                                                                                                                                          ;  // rectangles per row
                    var offset = 12;  // spacing between start of each rectangle
                
                    var numCols = Math.min(constituencies.length, rowLength);
                    var numRows = Math.ceil(constituencies.length/rowLength);
                
                    var initialX = (d[0] - (numCols * offset)/2) + 100;
                    var initialY = (d[1] - (numRows * offset)/2) + 30;
                
                    var allconst = constituencies
                    .map(function(c, i) {
                        // console.log("c",c);
                        return {
                            x : initialX + ((i % rowLength) * offset),
                            y : initialY + Math.floor(i / rowLength) * offset,
                            accode: c.properties.AC_NO,
                            statecode: c.properties.ST_CODE
                        }
                    }); 
                    
                    return allconst;
                })
                .enter()
                .append("rect")
                .attr("x", function(d){ return d.x })
                .attr("y", function (d){ return d.y })
                .attr("width", "8")
                .attr("height", "8")
                .attr("class", "aseconstituency")
                .attr("fill", function(d,i){

                        // console.log(d);
                        
                        var fd = _.filter(aeconstituencywise2019, function(obj){
                            return d.statecode === obj.stateCode && d.accode === obj.pcno; 
                        });

                        // console.log("fd", fd);
                        

                        if(fd[0] !== undefined){
                            // console.log(fd[0]);
                            
                            return colorCodesList2019[fd[0].leadingParty];
                            
                        }else{
                            // console.log(fd[0]);
                            return "grey";
                        }
                        
                    
                })
                .attr("data-accode", function(d,i){
                    // console.log("pccode",d);
                        return d['accode'];
                    })
                .attr("data-statecode", function(d,i){
                        // console.log(d['properties']['ST_CODE'],d['properties']['PC_CODE']);
                        return d['statecode'];
                    })
                .on("click", function(d, i){
                   // console.log(d.statecode, d.accode);

                    // d3.select(".comparision .col2").style("display", "block")
                    d3.select("#aseconstleveldata").style("display", "block")

                    var loadaeconstituencywise2019 = _.filter(aeconstituencywise2019, function(obj){
                        return d.statecode === obj.stateCode && d.accode === obj.pcno; 
                    })

                    d3.select("#aseconstleveldata").html(feedConstLevelData(loadaeconstituencywise2019[0]));
                    

                })
                .on("mouseover",function(d) { 
                    console.log(d);
                    
                    var fd = _.filter(aeconstituencywise2019, function(obj){
                                               // console.log(d);
                        return obj.stateCode === d.statecode && obj.pcno === d.accode;
                    }); 

                    console.log(fd);
                    
                    d3.select(".tipp2").style("display","block"); 
                    d3.select(".tippBox2").style("display","block");
                    d3.select(".tipp2").style("y",(this.attributes.y.value-28)+"px");
                    d3.select(".tipp2").style("x",(this.attributes.x.value+9)+"px");
                    d3.select(".tippBox2").style("y",(this.attributes.y.value-8)+"px");
                    d3.select(".tippBox2").style("x",(this.attributes.x.value+6)+"px");
                    
                    d3.select("#tipp2").html(fd[0].constituencyName);
                })
                .on("mouseout",function(d) {
                    d3.select(".tipp2").style("display","none");
                    d3.select(".tippBox2").style("display","none");
                })

                var tool =svg.append("foreignObject");
                tool.attr("class", "tipp2");
                tool.attr("id", "tipp2");
                var tool =	svg.append("foreignObject");
                tool.attr("class", "tippBox2");
                tool.attr("id", "tippBox2");

        }) // Statelevel Source
    }) //India Sources
 

}