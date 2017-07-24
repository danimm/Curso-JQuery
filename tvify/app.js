// window.onload = function () { // cuando todo esta cargado img tb
//   alert('loaded');
// }

// $(function () {
//   // var header = document.getElementById('app-header');
//   var a = $('<a>', {
//     href: 'http://platzi.com',
//     target: '_blank',
//     html:'Ir a Platzi'
//   })
//   $('#app-body').append(a);
//
//   // $('header#app-header') esto es sinonimo de lo siguiente
//   // .append($('<p>', { html: 'Me acaban de crear'}))
//
//   // $('<p>', { html: 'Me acaban de crear'})
//   // .appendTo($('header#app-header'))
//
//   // console.log(a.attr('href'));  // getterd
//   console.log(a.attr('href', 'http://google.com'));
//   a.html('Ir a google') // setter modifica
// })


$(function() {
  /**
  Submit search form
  */
  // function onsubmit(ev){
  //   esto seria otra manera
  //   y luego abajo seria .click(onsubmit) llamando a la funcion
  // }

  $('#app-body')
    .find('form')
    .submit(function (ev) {
      ev.preventDefault();
      var busqueda = $(this)
        .find('input[type="text"]')
        .val();
        alert('Se ha buscado: ' + busqueda);
    })

    var template = '<article class="tv-show">' +
                      '<div class="left img-container">' +
                        '<img src=":img:" alt=":img alt:">' +
                      '</div>' +
                      '<div class="right info">' +
                        '<h1>:name:</h1>' +
                        "<p>:summary:</p>" +
                      '</div>' +
                    '</article>'

    $.ajax({
      url: 'http://api.tvmaze.com/shows',
      success: function(shows, textStatus, xhr){
        // es un callback ejecuta la funcion por cada elemento de arreglo
        var $tvShowsContainer = $('#app-body').find('.tv-shows')
        shows.forEach(function (show) {
          var article = template
            .replace(':name:', show.name)
            .replace(':img:', show.image.medium)
            .replace(':summary:', show.summary)
            .replace(':img alt:', show.name + " Logo")

          $tvShowsContainer.append($(article))

        })
      }
    })
})
