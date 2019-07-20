function drawHorizontalStackChart(selection, stackdata, props) {

    var testformat = d3.format(".3n");

    var hordivcont = d3.select(selection)

    hordivcont.html(null)

    var colorsAlliance = d3.scaleOrdinal()
        .range(['#F39849', '#E94927', '#538296', '#CCCCCC']);
    
    var colorsAllianceLead = d3.scaleOrdinal()
        .range(['#F39849', '#E94927', '#538296', '#CCCCCC']);
        // .range(['#f39849ba', '#e94927b5', '#538296bd', '#ccccccc2']);

    var otherColor = d3.scaleOrdinal()
        .range(['#982550', '#E30613', '#E76259', '#F4973B', '#7A4F9B', '#4A4294', '#5C86C3', '#D4C75F', '#6D8A3A', '#234E6C', '#982550', '#DABAFF', '#DEFF50']);


    if(props.type === "currentalliancechartWon"){

        hordivcont.selectAll('p.bartext')
            .data(stackdata).enter().append('p')
            .attr("class","bartext")
            .style("float","left")
            .style("font-size","1em")
            .style("margin-bottom","0px")
            .style("padding","0 3px")
            .style("box-sizing","border-box")
            .style("text-align","left")
            .style("height","50px")
            .style("font-weight","bold")
            .style("border-left", "1px dashed #000000")
            .style("width",function(d,i){
                return d[props.numberLabel]+"%";
            })
            .html(function(d){
                var html = d[props.textLabel]+"<br><span style='font-size:14px;margin-bottom: 5px;display: inline-block;'>"+d[props.displayLabel]+"</span>";
                return html;
            })
        
        hordivcont.selectAll('div.bar')
            .data(stackdata).enter().append('div')
            .attr("class","bar")
            .style("float","left")
            .style("box-sizing","border-box")
            .transition().duration(1000)
            .style("height","35px")
            .style("width",function(d,i){
                    return d[props.numberLabel]+"%";
                })
            .style("background-color", function(d,i){
                return  colorsAlliance(d[props.textLabel]);
            })
            .attr("title", function(d){
                return d[props.textLabel] +": "+ d[props.numberLabel]+"%";
            })

    }else if(props.type === "alliancechartWon"){
        

        hordivcont.selectAll('div.bar')
            .data(stackdata).enter().append('div')
            .attr("class","bar")
            .style("float","left")
            .style("box-sizing","border-box")
            .transition().duration(1000)
            .style("height","35px")
            .style("width",function(d,i){
                    return d[props.numberLabel]+"%";
                })
            .style("background-color", function(d,i){
                return  colorsAlliance(d[props.textLabel]);
            })
            .style("border-right", "1px solid #ffffff")
            .attr("title", function(d){
                return d[props.textLabel] +": "+ d[props.numberLabel]+"%";
            })

        hordivcont.selectAll('p.bartext')
            .data(stackdata).enter().append('p')
            .attr("class","bartext")
            .style("float","left")
            .style("font-size","0.9em")
            .style("margin-top","-26px")
            .style("padding","0 3px")
            .style("box-sizing","border-box")
            .style("height","35px")
            .style("font-weight","bold")
            .style("width",function(d,i){
                return d[props.numberLabel]+"%";
            })
            .html(function(d){
                var html = "<span style='color:#fff; margin-bottom: 12px;display: inline-block;'>"+testformat(d[props.displayLabel])+"</span><br>"+d[props.textLabel];
                return html;
            })

    }else if(props.type === "votesharechart"){

        hordivcont.selectAll('div.bar')
            .data(stackdata).enter().append('div')
            .attr("class","bar")
            .style("float","left")
            .style("box-sizing","border-box")
            .style("height","35px")
            .transition().duration(1000)
            .style("width",function(d,i){
                    return d[props.numberLabel]+"%";
                })
            .style("background-color", function(d,i){
                return  otherColor(d[props.textLabel]);
            })
            .attr("title", function(d){
                return d[props.textLabel] +": "+ d[props.numberLabel]+"%";
            })

            // var legendRow = d3.select(selection).append('div')
            //     .attr("class", 'legendDiv')

            // var legendItems = legendRow.selectAll('.legend')
            //     .data(color.domain())
            //     .enter()
            //     .append('div')
            //     .attr('class', 'legend')

            // legendItems.append('span')
            //     .style('background-color', function(d,i){
            //         return color(d);
            //     })
            
            // legendItems.append('b')
            //     .html(function(d) { return d; }); 

    }else if(props.type === "literaryrate"){

        hordivcont.selectAll('div.bar')
            .data(stackdata).enter().append('div')
            .attr("class","bar")
            .style("float","left")
            .style("box-sizing","border-box")
            .style("height","35px")
            .transition().duration(1000)
            .style("width",function(d,i){
                    return d[props.numberLabel]+"%";
                })
            .attr("title", function(d){
                return d[props.textLabel] +": "+ d[props.numberLabel]+"%";
            })

            // var legendRow = d3.select(selection).append('div')
            //     .attr("class", 'legendDiv')

            // var legendItems = legendRow.selectAll('.legend')
            //     .data(color.domain())
            //     .enter()
            //     .append('div')
            //     .attr('class', 'legend')

            // legendItems.append('span')
            //     .style('background-color', function(d,i){
            //         return color(d);
            //     })
            
            // legendItems.append('b')
            //     .html(function(d) { return d; }); 

    }



}