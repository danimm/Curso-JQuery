// window.onload = function () { // cuando todo esta cargado img tb
//   alert('loaded');
// }

$(function () {
  // var header = document.getElementById('app-header');
  var a = $('<a>', {
    href: 'http://platzi.com',
    target: '_blank',
    html:'Ir a Platzi'
  })
  $('#app-body').append(a);

  // $('header#app-header') esto es sinonimo de lo siguiente
  // .append($('<p>', { html: 'Me acaban de crear'}))

  // $('<p>', { html: 'Me acaban de crear'})
  // .appendTo($('header#app-header'))

  // console.log(a.attr('href'));  // getterd
  console.log(a.attr('href', 'http://google.com'));
  a.html('Ir a google') // setter modifica
})
