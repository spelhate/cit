
$(document).ready(function () {


    var MAP_WIDTH  = 620;
    var MAP_HEIGHT = 600;
    var mapContainer = document.getElementById("epci_map");
    var map = new Raphael(mapContainer, MAP_WIDTH, MAP_HEIGHT);
    // Init Svg map
    fetch('epci_simple.svg')
    .then(response => response.text())
    .then(epcis => {
        for(var epciName in epcis) {
            (function (epci) {
                // region.attr(style);
                // region.attr('title', regionName);
        
                // region[0].addEventListener("mouseover", function() {
                //     region.animate(hoverStyle, animationSpeed);
                // }, true);
        
                // region[0].addEventListener("mouseout", function() {
                //   region.animate(style, animationSpeed);
                // }, true);
                
                // region[0].addEventListener("click", function(e) {
                //   var value = e.target.getElementsByTagName("title")[0].textContent;
                //   document.getElementById("infos").textContent = value;
                // }, true);
                console.log("Nom : ",epciName," PATH : ",epci);
        
            })(epcis[epciName]);
        }
    });

    
    // Init List and Search
    var data = [];
    var template = "";
    var html = [];
    $.getJSON("data.json", function (_data) {
        data = _data;
        $.get("template.tpl", function (_html) {
            template = _html;
            data.forEach(function (item) {
                var tpl = template.replace(/{{dataid}}/g, item.dataid).replace(/{{label}}/g, item.label);
                html.push(tpl);

            });
            $("#epci_list").append(html.join(""));
        });
    });

    $("#myInput").on("keyup", function () {
        $(".collapse").collapse("hide");
        var value = $(this).val().toLowerCase();
        $("#epci_list .card").filter(function () {
            var txt = $(this).attr("data-filter").toLowerCase();
            var test = (txt.indexOf(value) > -1);
            if (test) {
                $(this).addClass("selected");
                $(this).show();
            } else {
                $(this).removeClass("selected");
                $(this).hide();
            }
        });
    });
});


