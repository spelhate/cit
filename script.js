$(document).ready(function () {
  // Init List and Search
  var template = ''
  var html = []
  var searchResults = 0
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
    $.get('template.tpl', function (_html) {
      template = _html
      html = Mustache.render(template, _data);
      $('#epci_list').append(html);
      //update badge counters
      document.querySelectorAll(".fiche-list").forEach(function(item) {
        let counter = item.querySelectorAll(".fiche-level-2.enabled").length;
        item.closest(".card").querySelector("span.counter").textContent = counter;
      });

      $('.main-content .collapse').on('show.bs.collapse', function (e) {
        let codegeo = e.currentTarget.parentElement.dataset.codegeo;
        // clear map filter
        document.querySelectorAll(".map-feature.selected").forEach(function(item) {
          item.classList.toggle("selected");
        });
        // Update map
        let element = document.getElementById("feature-" + codegeo);
        if (element) {
          element.classList.toggle("filtered");
          element.classList.toggle("selected");
        }
      });

      document.querySelectorAll('.main-content').forEach(item => {
        item.addEventListener('click', event => {
          let title = event.currentTarget.querySelector('.card-header').textContent;
          let report_list = event.currentTarget.querySelector('.content-list').cloneNode(true);
          $('#epci_modal_label').text(title);
          $('#epci_modal .modal-body').html(report_list);
          $('#epci_modal').modal('show');
        })
      })

      document.querySelectorAll(".main-content").forEach(function(element){
        element.addEventListener("mouseover", function (e) {
         let code_geo = e.currentTarget.dataset.codegeo;
         let mapFeature = document.getElementById("feature-" + code_geo);
           mapFeature.classList.add("selected");
       })
       element.addEventListener("mouseout", function (e) {
         let code_geo = e.currentTarget.dataset.codegeo;
         let mapFeature = document.getElementById("feature-" + code_geo);
         mapFeature.classList.remove("selected");
       })
     });

    })
  })

  $('#epci_list .card').click(function () {
    $(this).css({
      boxShadow: '0px 3px 6px rgba(0,0,0, 0.16)',
    })
  })

  $('#search').on('keyup search', function () {
    $('.collapse').collapse('hide')
    var value = $(this).val().toLowerCase()
    var notempty = value.length > 0
    $('#epci_list .main-content').filter(function () {
      var txt = $(this).attr('data-filter').toLowerCase()
      var test = txt.indexOf(value) > -1
      if (test && notempty) {
        if(!$(this).hasClass('selected')){
          searchResults++
          $(this).addClass('selected')
        }
      } else {
        if($(this).hasClass('selected')){
          $(this).removeClass('selected')
          searchResults--
        }

      }
    })
    if(searchResults>0) {
      $("#searchFeedback2").hide();
      $("#epci_list_container").show();
      $("#epci_list_container").addClass('col-md-5 col-11')
      $("main").addClass('col-md-7 col-xs-12')
      $("#toggleButton").hide();
    } else if (searchResults === 0 && notempty) {
      $("#searchFeedback2").show();
      $("#epci_list_container").hide();
      $("#toggleButton").show();
    } else {
      $("#searchFeedback2").hide();
      $("#epci_list_container").hide();
      $("#epci_list_container").removeClass('col-md-5 col-11')
      $("main").removeClass('col-md-7 col-xs-12')
      $("#toggleButton").show();
    }

    // clear map filter
    document.querySelectorAll(".map-feature.selected").forEach(function(item) {
      item.classList.toggle("selected");

    });

    document.querySelectorAll(".map-feature.filtered").forEach(function(item) {
      item.classList.toggle("filtered");

    });

    //update map
    document.querySelectorAll(".main-content.selected").forEach(function(item) {
      let element = document.getElementById("feature-" + item.dataset.codegeo);
      if (element) {
        element.classList.toggle("filtered");
      }

    });

   // Shows modal on button click
   /* window.onresize = doFunc;
    var screenWidth = window.screen.width;
    function resize (){
      if ( screenWidth <= 767) {
        console.log ("Yes")
      }else{
      console.log("no");
      }};

    window.onresize = resize;
$( window ).on("resize",function(){
var screenWidth = window.screen.width;
  if ( screenWidth <= 767) {
        console.log ("Yes")
      }else{
      console.log("no");
      }

}).resize();*/

})

// X close search results and resets map size
/*$("#hideSearchResults").click(function(){
  $("#epci_list_container").hide();
  $("#epci_list_container").removeClass('col-md-5 col-11')
  $("main").removeClass('col-md-7 col-sm-12')
});

  // Toggle map or list
 /*$('#toggleButton').on('click', function () {
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

  $('#toggleButton').on('click', function () {
     $('#epci_list_container').toggle();
     $('#epci_list_container').addClass("completeList");
  });*/

  $('#epci_modal').on('show.bs.modal', function (e) {
    $(".tooltip").hide();
  })

  $('#epci_modal').on('show.bs.collapse','.collapse', function() {
    $('#epci_modal .card-theme').find('.collapse.show').collapse('hide');
  });

})

$( window ).on("resize",function(){
  var screenHeight = window.innerHeight;
  var searchListHeight = screenHeight - 120;
  //var searchListResultsHeight = searchListHeight - 60;
  //var mainHeight = screenHeight - 160;
  //var footerPlacement = mainHeight + 160;

  $("#epci_list_container").css("height", searchListHeight);
  //$("#epci_list").css("height", searchListResultsHeight);
  //$("main").css("min-height", mainHeight);
  //$(".footer").css("top", footerPlacement);
}).resize();
