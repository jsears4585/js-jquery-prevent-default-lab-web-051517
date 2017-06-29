$(document).ready(function() {
  func()
});

// define functions here
var func = function() {
  $('form').on('submit', function(e) {
    var item = $('#item').val()
    $("#list ol").append(`<li>${item}</li>`)
    e.preventDefault()
  })
}
