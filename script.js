
$(document).ready(function () {
    // Init Map
    var map = L.map('epci_map').setView([48.10743118848039, -2.8564453125000004], 8);
    var osmLayer = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
        maxZoom: 19
    });
    map.addLayer(osmLayer);
    L.Control.ResetSelected = L.Control.extend({
        onAdd: function(map) {
            var btn = L.DomUtil.create('a');
    
            btn.textContent = 'Annuler la selection';
            btn.classList.add('resetButton');
    
            return btn;
        },
    
        onRemove: function(map) {
            // Nothing to do here
        }
    });
    
    L.Control.resetSelected = function(opts) {
        return new L.Control.ResetSelected(opts);
    }
    L.Control.resetSelected({ position: 'topright' }).addTo(map);
    // Bind event to custom control
    $(".resetButton").on('click',function(){
        $(".collapse").collapse("hide");
        $("#myInput").val("");
        $(".card").show();
    });
    // Get epci_simple geoJson
    $.ajax({
        url : "https://kartenn.region-bretagne.fr/kartoviz/apps/region/territoire/data/epci_simple.geojson",
        success : function(data){
            var hoverStyle = {
                color :'red',
                weight:3
            }
            var basicStyle = {
                color :'rgba(45, 64,89,255)',
                fillOpacity:0,
                fillColor:'rgba(0,0,0,0)',
                weight:2
            }
            
            L.geoJSON(JSON.parse(data), {
                style: basicStyle,
                onEachFeature(feature,layer){
                    layer.bindTooltip(feature.properties.nom_geo,{className:"toolTipHovered"});
                    layer.on('click',function(e){
                        $(".card").hide();
                        $("#myInput").val("");
                        $("#epci_"+feature.properties.code_geo).parent().show();
                        $("#epci_"+feature.properties.code_geo).collapse("show");
                     
                    });
                    layer.on(
                        'mouseover', function(e){
                            layer.setStyle(hoverStyle);
                            layer.bringToFront();
                            layer.openTooltip([e.latlng.lat,e.latlng.lng]);
                        }
                    );
                    layer.on(
                        'mouseout', function(e){
                           layer.setStyle(basicStyle);
                           layer.closeTooltip();
                        }
                    );
                }
            }).addTo(map);
        },
        error : function(){
            console.log("GeoJson not loaded");
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


