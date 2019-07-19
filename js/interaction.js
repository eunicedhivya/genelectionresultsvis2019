jQuery("#show2014").on("click", function(e){
    // console.log("test");

    jQuery(".const-map-2014").removeClass("hideinmobile")
    jQuery(".const-map-2019").addClass("hideinmobile")
    jQuery("#show2014").attr("disabled", true);
    jQuery("#show2019").attr("disabled", false);
    
})
jQuery("#show2019").on("click", function(e){
    // console.log("test");
    
    jQuery("#show2014").attr("disabled", false);
    jQuery("#show2019").attr("disabled", true);
    jQuery(".const-map-2014").addClass("hideinmobile")
    jQuery(".const-map-2019").removeClass("hideinmobile")
    
})
