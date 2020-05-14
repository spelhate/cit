function resizeHandle(){
    var hauteur_nav = $(".navbar")[0].offsetHeight
    $("#epci_map").css("margin-top", hauteur_nav);
    if ($("#epci_map").parent().css("display") == "none") {
        $("#pageTitle").css("margin-top", hauteur_nav + 10);
    } else {
        $("#pageTitle").css("margin-top", 10);
    }
    
}
$(document).ready(function () {
    var hauteur_bouton = document.getElementById("toggleButton").offsetHeight;
    $("#epci_map").css("padding-bottom", hauteur_bouton);
    resizeHandle();
    // Init Map
    var map = L.map('epci_map').setView([48.10743118848039, -2.8564453125000004], 8);
    var osmLayer = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
        maxZoom: 19
    });
    map.addLayer(osmLayer);
    // Get epci_simple geoJson
    $.ajax({
        url: "https://kartenn.region-bretagne.fr/kartoviz/apps/region/territoire/data/epci_simple.geojson",
        success: function (data) {
            var hoverStyle = {
                color: 'red',
                weight: 3
            }
            var basicStyle = {
                color: 'rgba(45, 64,89,255)',
                fillOpacity: 0,
                fillColor: 'rgba(0,0,0,0)',
                weight: 2
            }

            L.geoJSON(JSON.parse(data), {
                style: basicStyle,
                onEachFeature(feature, layer) {
                    layer.bindTooltip(feature.properties.nom_geo, {
                        className: "toolTipHovered"
                    });
                    layer.on('click', function (e) {
                        var report_list = $("#epci_" + feature.properties.code_geo).html();
                        var title = $("#heading-" + feature.properties.code_geo).text();
                        $("#epci_modal_label").text(title);
                        $("#epci_modal .modal-body").html(report_list);
                        $('#epci_modal').modal('show');
                    });
                    layer.on(
                        'mouseover',
                        function (e) {
                            layer.setStyle(hoverStyle);
                            layer.bringToFront();
                            layer.openTooltip([e.latlng.lat, e.latlng.lng]);
                        }
                    );
                    layer.on(
                        'mouseout',
                        function (e) {
                            layer.setStyle(basicStyle);
                            layer.closeTooltip();
                        }
                    );
                }
            }).addTo(map);
        },
        error: function () {
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
    // Toggle map or list
    $("#toggleButton").on('click', function () {
        var carte = $(".toggle_hidden");
        if (carte.hasClass("d-none")) {
            carte.removeClass("d-none");
            carte.removeClass("toggle_hidden_margin");
            carte.addClass("fullscreen_map");
            carte.children("#epci_map").addClass("fullscreen_map");
            map.invalidateSize();
            map.setZoom(7);
        } else {
            carte.addClass("d-none");
            carte.addClass("toggle_hidden");
            carte.removeClass("fullscreen_map");
            carte.children("#epci_map").removeClass("fullscreen_map");
        }
        $('.toggle_visible').toggle();
        var button = $(this);
        if (button.hasClass("list")) {
            button.toggleClass("list");
            button.text("Afficher la liste");
        } else {
            button.toggleClass("list");
            button.text("Afficher la carte");
        }

    });
});