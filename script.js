$(document).ready(function () {
  // Init List and Search
  var data = []
  var template = ''
  var html = []
  $.getJSON('data.json', function (_data) {
    data = _data
    if (_data.fiches) {
      _data.fiches.forEach(function(fiche){
        fiche.filter.forEach(function(dataid) {
          let test = _data.epci.filter(epci => epci.dataid === dataid);
          if (test.length === 1) {
              let epci = test[0];
              epci[fiche.id] = true;
          }
        });
      });
    }

    console.log(_data);
    $.get('template.tpl', function (_html) {
      template = _html
      html = Mustache.render(template, _data);
      $('#epci_list').append(html);
    })
  })

  $('#epci_list .card').click(function () {
    $(this).css({
      boxShadow: '0px 3px 6px rgba(0,0,0, 0.16)',
    })
  })

  $('#search').on('keyup', function () {
    $('.collapse').collapse('hide')
    var value = $(this).val().toLowerCase()
    $('#epci_list .card').filter(function () {
      var txt = $(this).attr('data-filter').toLowerCase()
      var test = txt.indexOf(value) > -1
      if (test) {
        $(this).addClass('selected')
        $(this).show()
      } else {
        $(this).removeClass('selected')
        $(this).hide()
      }
    })
  })
  // Toggle map or list
  $('#toggleButton').on('click', function () {
    var carte = $('.toggle_hidden')
    var list_container = document.getElementById('list-container')
    if (carte.hasClass('d-none')) {
      carte.removeClass('d-none')
      list_container.classList.remove('toggled-margin')
    } else {
      carte.addClass('d-none')
      list_container.classList.add('toggled-margin')
    }
    list_container.classList.toggle('toggle_hide')

    var button = $(this)
    if (button.hasClass('list')) {
      button.toggleClass('list')
      button.text('Afficher la liste')
    } else {
      button.toggleClass('list')
      button.text('Afficher la carte')
    }
  })
})
