$(document).ready(function () {
  var data = []
  var template = ''
  var html = []
  $.getJSON('data.json', function (_data) {
    data = _data
    $.get('template.tpl', function (_html) {
      template = _html
      data.forEach(function (item) {
        var tpl = template
          .replace(/{{dataid}}/g, item.dataid)
          .replace(/{{label}}/g, item.label)
        html.push(tpl)
      })
      $('#epci_list').append(html.join(''))
    })
  })

  $('#epci_list .card').click(function () {
    $(this).css({ boxShadow: '0px 3px 6px rgba(0,0,0, 0.16)' })
  })

  // SEARCH
  $('#search').on('keyup', function () {
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
})
