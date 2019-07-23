<!-- <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    
    
</head>
<body> -->

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/3.0.5/fullpage.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css">
<link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,700,700i|Playfair+Display:400,400i" rel="stylesheet">
<link rel="stylesheet" href="style.css">

<div id="genelection2019">
    
    <header class="genelectionheader">
        <h1>Lok Sabha Elections 2019 Results</h1>
        <p>Click on the map to get info related to states. The coloured boxes give you the constituency-wise data.</p>
    </header>

    <section class="genelection-sections" id="allianceoverview">
        <?php include 'template-parts/allianceoverview.php';?>
    </section>
    <section class="genelection-sections clearfixsol" id="exitPoll">
        <?php include 'template-parts/exitpollview.php';?>
    </section>
    <section class="genelection-sections">
        <?php include 'template-parts/livemapview.php';?>
    </section>
    <section class="genelection-sections clearfixsol">
        <?php include 'template-parts/comparisionview.php';?>
    </section>
    <section class="genelection-sections">
        <?php include 'template-parts/aeelectionview.php';?>
    </section>

</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.12.4/jquery.js"></script>
<script src="https://thefederal.com/embed/common-js/d3.v4.min.js"></script>
<script src="https://d3js.org/topojson.v2.min.js"></script>
<script src="https://thefederal.com/embed/common-js/underscore-min.js"></script>
<script src="js/data.js"></script>
<script src="js/importdata.js"></script>
<script src="js/interaction.js"></script>
<script src="js/statemap.js"></script>
<script src="js/horizontalstackchart.js"></script>
<script src="js/piechart.js"></script>
<script type='text/javascript'>

    // Alliance overview (Section one) =================================================
    //=================================================================
    drawHorizontalStackChart("#mainallianceseatshare", allianceData, {
        width: 800,
        height: 60,
        margin: { top: 25, bottom: 25, left: 0, right: 0 },
        cutoff: 20,
        type: "currentalliancechartWon",
        textLabel: 'party',
        numberLabel: 'lead%',
        displayLabel: 'lead'
    })

    drawHorizontalStackChart("#leadwinhorchart", allianceData, {
        width: 800,
        height: 60,
        margin: { top: 25, bottom: 25, left: 0, right: 0 },
        cutoff: 20,
        type: "alliancechartWon",
        textLabel: 'party',
        numberLabel: 'lead%',
        displayLabel: 'lead'
    });

    //exit poll view (Section Two) =================================================
    //=================================================================
    function drawPostPolls(sno){
        
        var fdPostPolls = _.filter(postpolldata, function(pbj){
        return pbj.SNO === sno;
        })

        // console.log("fdPostPolls", fdPostPolls);

        d3.select("#"+sno+" h3").text(fdPostPolls[0]["Poll"])

        drawPiechart("#"+sno+" .pollchart", fdPostPolls, {
        width: 500,
        height: 270,
        pi: Math.PI,
        margin: { top: 20, right: 20, bottom: 20, left: 20 },
        innerR: 150,
        textLabel: "Party",
        numberLabel: "seats",
        displayLabel: "seats",
        })


    }
    drawPostPolls("SN01")
    drawPostPolls("SN02")
    drawPostPolls("SN03")
    drawPostPolls("SN05")
    drawPostPolls("SN15")
    drawPostPolls("SN07")

    //live map view (Section Three) =================================================
    //=================================================================


    //comparision view (Section Four) =================================================
    //=================================================================
    drawMap('.const-map-2014', 'pc+state', "2014", "Desktop");
    drawMap('.const-map-2019', 'pc+state', "2019", "Desktop");

    //ae election view (Section Five) =================================================
    //=================================================================
</script>