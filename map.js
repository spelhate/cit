var MAP_WIDTH = 800
var MAP_HEIGHT = 600

var mapContainer = document.getElementById('map')
// Create the canvas for the map
var map = new Raphael(mapContainer, MAP_WIDTH, MAP_HEIGHT)

// Set the viewbox of the svg map
map.setViewBox(0, 0, 800, 400, false)
var regions = {}

function decodeEntities(encodedString) {
  var textArea = document.createElement('textarea')
  textArea.innerHTML = encodedString
  return textArea.value
}

// Create all the paths of the svg
data.forEach(function (item) {
  regions[item.id] = map.path(item.path)
  regions[item.id].node.id = decodeEntities(item.id)
})

var style = {
  fill: '#FFFFFF',
  stroke: '#0094AB',
  'stroke-width': 1,
  'stroke-linejoin': 'round',
  cursor: 'pointer',
}

var hoverStyle = {
  fill: '#0094AB',
}

var animationSpeed = 250

for (var regionName in regions) {
  ;(function (region) {
    region.attr(style)
    //region.attr("title",region.node.id.split("|")[0]);

    region[0].dataset.toggle = 'tooltip'
    //region[0].dataset.placement = "top";
    region[0].setAttribute('title', region.node.id.split('|')[0])

    region[0].addEventListener(
      'mouseover',
      function () {
        region.animate(hoverStyle, animationSpeed)
      },
      true
    )

    region[0].addEventListener(
      'mouseout',
      function () {
        region.animate(style, animationSpeed)
      },
      true
    )

    region[0].addEventListener(
      'click',
      function (e) {
        var id = unescape(region.node.id).split('|')
        var code_geo = id[1]
        if (code_geo !== 'null') {
          var report_list = $('#epci_' + code_geo).html();
          var title = $('#heading-' + code_geo).text();
          $('#epci_modal_label').text(title);
          $('#epci_modal .modal-body').html(report_list);
          $('#epci_modal').modal('show');
        }
      },
      true
    )

    console.log(region[0])
  })(regions[regionName])
}

$('[data-toggle="tooltip"]').tooltip()
