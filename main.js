// Make it rain!
console.log('Hello from JS!');


//When the user clicks the hambuger icon with a class of .hamburger
//display Home, About, Projects, and Contects as a drop down
$('.hamburger').on('click', function() {
  $('nav ul').toggleClass('show');
});

//When the user clicks the angle down icon, take it to the about me section with
// a class of fa-angle-down with some transitions
$('.fa-angle-down').on('click', function() {

});



//when the user clicks on the projects button with a class of "accordion"
//display the div with a class of "project" by adding a class of showp n css
$(".plusminus").text('-');
$('button.accordion').on('click', function() {
  // $('.project').addClass('showp');

  // $('.project ul').addClass('showp');
  // $('.project img').addClass('showp');
  if ($('.project').is(':visible')) {
    $('.project').slideUp(300);
    $(".plusminus").text('+');
  }
  if ($(this).next('.project').is(':visible')) {
    $(this).next('.project').slideUp('300');
    $(this).children(".plusminus").text('+');

  } else {
    $(this).next('.project').slideDown(300);
    $(this).children(".plusminus").text('-');
  }
});
