function showDrawMapChart(stateCode){
    console.log(stateCode);
    
    if(stateCode === "S01"){
        d3.select("#loadAP").attr("class","active")
        d3.select("#loadAR").attr("class","null")
        d3.select("#loadSK").attr("class","null")
        d3.select("#loadOD").attr("class","null")
        d3.select("#loadTN").attr("class","null")
        drawAssemblyMap("#aemap", "2019", "Desktop", {
            mapsource: 'map/andhrapradesh-ac.json',
            statecode: "S01",
            center: [80.8, 16] ,
            scale: 2500
          })
    }else if(stateCode === "S02"){
        d3.select("#loadAP").attr("class","null")
        d3.select("#loadAR").attr("class","active")
        d3.select("#loadSK").attr("class","null")
        d3.select("#loadOD").attr("class","null")
        d3.select("#loadTN").attr("class","null")
        drawAssemblyMap("#aemap", "2019", "Desktop", {
            mapsource: 'map/arunachalpradesh-ac.json',
            statecode: "S02",
            center: [94.7, 28] ,
            scale: 3500
          })
  
    }else if(stateCode === "S21"){
        d3.select("#loadAP").attr("class","null")
        d3.select("#loadAR").attr("class","null")
        d3.select("#loadSK").attr("class","active")
        d3.select("#loadOD").attr("class","null")
        d3.select("#loadTN").attr("class","null")
        drawAssemblyMap("#aemap", "2019", "Desktop", {
            mapsource: 'map/sikkim-ac.json',
            statecode: "S21",
            center: [88.5, 27.5] ,
            scale: 13000
          })
          
          
    }else if(stateCode === "S22"){
        d3.select("#loadAP").attr("class","null")
        d3.select("#loadAR").attr("class","null")
        d3.select("#loadSK").attr("class","null")
        d3.select("#loadOD").attr("class","null")
        d3.select("#loadTN").attr("class","active")
        drawAssemblyMap("#aemap", "2019", "Desktop", {
            mapsource: 'map/tn-ac.json',
            statecode: "S22",
            center: [78, 11] ,
            scale: 3500
          })
          
          
    }else{
        d3.select("#loadAP").attr("class","null")
        d3.select("#loadAR").attr("class","null")
        d3.select("#loadSK").attr("class","null")
        d3.select("#loadOD").attr("class","active")
        d3.select("#loadAP").attr("class","null")
        d3.select("#loadTN").attr("class","null")
        drawAssemblyMap("#aemap", "2019", "Desktop", {
            mapsource: 'map/orissa-ac.json',
            statecode: "S18",
            center: [84, 20.5],
            scale: 3500
          })
    }
    
  }