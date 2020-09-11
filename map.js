var MAP_WIDTH = 800 
var MAP_HEIGHT = 500

var mapContainer = document.getElementById('map');

// Create the canvas for the map
var map = new Raphael(mapContainer, MAP_WIDTH, MAP_HEIGHT);

// Set the viewbox of the svg map
map.setViewBox(0, 0, 800, 400, false);
var regions = {};

function decodeEntities(encodedString) {
  var textArea = document.createElement('textarea');
  textArea.innerHTML = encodedString;
  return textArea.value;
}

// Create all the paths of the svg
data.forEach(function (item) {
  let tmp = decodeEntities(item.id).split("|");
  let label = tmp[0];
  let id = tmp[1];
  let feature = map.path(item.path);
  let svg = feature.node;
  svg.id = 'feature-' + id;
  svg.setAttribute('title', label);
  svg.dataset.codegeo = id;
  svg.dataset.toggle = 'tooltip'
  svg.dataset.placement = "top";
  svg.classList.add("map-feature");
  svg.onclick = function (e) {
    let id = e.currentTarget.id;
    let code_geo = e.currentTarget.getAttribute("data-codegeo");
    if (code_geo !== 'null') {
      var report_list = $('#epci_' + code_geo).html();
      var title = $('#heading-' + code_geo).text();
      $('#epci_modal_label').text(title);
      $('#epci_modal .modal-body').html(report_list);
      $('#epci_modal').modal('show');
    }
  };
  regions[item.id] = feature;

});

$('[data-toggle="tooltip"]').tooltip();