var mapContainer = document.getElementById('map');

$.get('map.svg', function (svg) {
  mapContainer.append(svg.querySelector("svg"));
  customizeMap();
});


var customizeMap = function () {
  mapContainer.querySelectorAll("path").forEach(function(path) {
      let tmp = decodeEntities(path.id).split("|");
      let label = tmp[1];
      let id = tmp[0];
      path.id = 'feature-' + id;
      path.setAttribute('title', label);
      path.dataset.codegeo = id;
      path.dataset.toggle = 'tooltip'
      path.dataset.placement = "top";
      path.classList.add("map-feature");
      path.addEventListener('click', function (e) {
          let item = e.currentTarget;
          let code_geo = item.getAttribute("data-codegeo");
          if (code_geo !== 'null') {
            var report_list = $('#epci_' + code_geo).html();
            var title = $('#heading-' + code_geo).text();
            $('#epci_modal_label').text(title);
            $('#epci_modal .modal-body').html(report_list);
            $('#epci_modal').modal('show');
          }
    });
  });
  $('[data-toggle="tooltip"]').tooltip();
};

function decodeEntities(encodedString) {
  var textArea = document.createElement('textarea');
  textArea.innerHTML = encodedString;
  return textArea.value;
}