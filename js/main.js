// Make it rain!
console.log('Hello from JS!');



// $('a').on('click',function(event) {
//   event.preventDefault();
// });

//When the user clicks the hambuger icon with a class of .hamburger
//display Home, About, Projects, and Contects as a drop down
$('.hamburger').on('click', function() {
  $('nav ul').toggleClass('show');
});



//When the user clicks on the anchor links in the hambuger menu
  //hide the dropdown list




// Smooth scroll this mother!

// Do it when someone clicks a nav link
$('.smoothScroll').on('click', function(e) {
  console.log(e.target);
  // prevent the standard link operation on click
  e.preventDefault();
  // use the href of the link to identify what
  // section to scroll to
  var thisTarget = $(this).attr('href');
  // get that section's top offset
  var targetOffset = $(thisTarget).offset().top - 60;
  // use jQuery.animate() to animate the body's
  // scrollTop to the targetOffest
  $('body').animate({
    scrollTop: targetOffset
  }, 600);
});



$('.project').hide();

//when the user clicks on the projects button with a class of "accordion"
//display the div with a class of "project" by adding a class of showp n css
$(".plusminus").text('+');
$('button.accordion').on('click', function() {
  // $('.project').addClass('showp');

  // $('.project ul').addClass('showp');
  // $('.project img').addClass('showp');
  if ($('.project').is(':visible')) {
    $('.project').slideUp(300);
    $(".plusminus").text('+');
  }
  if ($(this).next('.project').is(':visible')) {
    $(this).next('.project').fadeOut('slow');
    $(this).children(".plusminus").text('+');

  } else {
    $(this).next('.project').fadeIn('slow');
    $(this).children(".plusminus").text('-');
  }
});
