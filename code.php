<!-- <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    
    
</head>
<body>
    
</body>
</html> -->

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
    <section class="genelection-sections">
        <?php include 'template-parts/comparisionview.php';?>
    </section>
    <section class="genelection-sections">
        <?php include 'template-parts/aeelectionview.php';?>
    </section>

</div>