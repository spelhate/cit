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
    if (notempty) {
      $('.cancel').show();
    } else {
      $('.cancel').hide();
    }
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
      $("main").addClass('col-md-7 col-xs-12')
      $(".report-container").addClass('col-md-7 col-xs-12')

    } else if (searchResults === 0 && notempty) {
      $("#searchFeedback2").show();
      $("#epci_list_container").show();

    } else {
      $("#searchFeedback2").hide();
      $("#epci_list_container").hide();
      $("main").removeClass('col-md-7 col-xs-12')
      $(".report-container").removeClass('col-md-7 col-xs-12')

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
   /* $( window ).on("resize",function(){
    var screenWidth = window.screen.width;
    if ( screenWidth <= 767) {
        console.log ("Yes")
      }else{
      console.log("no");
      }

    }).resize();*/

})

  $('#epci_modal').on('show.bs.modal', function (e) {
    $(".tooltip").tooltip('hide');
    $(".recherche").addClass("reduced");
    $("h1").show();
    $("#epci_list_container").hide();
    $("main").removeClass('col-md-7 col-xs-12');
    $(".report-container").removeClass('col-md-7 col-xs-12');
    $("#search").val("");
    document.querySelectorAll(".map-feature.filtered").forEach(function(item) {
      item.classList.remove("filtered");

    })

    //Breadcrumb interactions

    $("#homeLink").click(function(){
      $("main").addClass("visible").removeClass("invisible").fadeIn( "slow" )
      $(".report-container").addClass("invisible").removeClass("visible").fadeOut( "slow" )
      $("html").css("overflow-y", "auto")
    });

    // display report in iframe
    //changes iframe src for data-link of element clicked
    var iframe = document.getElementById("iframe");

    $("#epci_modal .trigger").click(function(event){
      $("#epci_modal").modal('hide').fadeOut( "slow" )
      $("main").addClass("invisible").fadeOut( "slow" )
      $(".report-container").addClass("visible").removeClass("invisible").fadeIn( "slow" )
      $("body").removeClass("modal-open")
      $("html").css("overflow-y", "hidden")
      iframe.src = event.target.dataset.link

      var iframeTitle = $(event.target).text();
      $('.breadcrumb .active').text(iframeTitle) ;

    });


  })

  $('#epci_modal').on('show.bs.collapse','.collapse', function() {
    $('#epci_modal .card-theme').find('.collapse.show').collapse('hide');
  });

// Actions on the "X" for the search

  $('header span.cancel').click(function() {
      $("#epci_list_container").hide();
      $("main").removeClass('col-md-7 col-xs-12');
      $(".report-container").removeClass('col-md-7 col-xs-12');
      $("#search").val("");
      $(this).hide();
      $(".recherche").addClass("reduced");
      $("h1").show();
      document.querySelectorAll(".map-feature.filtered").forEach(function(item) {
      item.classList.remove("filtered");

    })
   });
});

// adjusts height of search results list
$( window ).on("resize",function(){
  var screenHeight = window.innerHeight;
  var searchListHeightD = screenHeight - 70;
  var epciList = $("#epci_list_container");
  var main = $("main").height();
  
  if ( searchListHeightD < main){
    $(epciList).css("height", main);
  } else {
    $(epciList).css("height", searchListHeightD);
  }

  // adjusts height and position of iframe and its container
  var iframe = $("#iframe");
  var iframe_height = searchListHeightD - 60;

  $(iframe).css("height",iframe_height);

}).resize();

//removes height of map when iframe visible 

if($(".report-container").hasClass("visible")){
  $("#map").css("height",0)
}else{
$("#map").css("height","auto")
}

// Changes search to icon on mobile + animation

$(".recherche").click(function(){
  if ($(this).hasClass("reduced")){
    $(".recherche").removeClass("reduced");
    $(".search-trigger").addClass("transition");
    $("#search").focus();
    $("h1").show();
      if ($(window).width() < 575 && $(this).hasClass("reduced")) {
      $("h1").show();
      }else if($(window).width() > 575){
        $("h1").show();
      } else {
        $("h1").hide();
      }
  }

});

// reduces search when click outside of input

$(document).mouseup(function(e){
    var search = $(".recherche");

    // If the target of the click isn't the container
    if(!search.is(e.target) && search.has(e.target).length === 0){
      search.addClass("reduced");
      $("h1").show();
    }
});
