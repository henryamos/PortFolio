$(document).ready(function() {

    $('#menu').click(function() {
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });
    $(window).on('scroll load', function() {
        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');

        if ($(window).scrollTop() > 0) {
            $('.top').show();
        } else {
            $('.top').hide();
        }

    });
    // smooth scrolling 

    $('a[href*="#"]').on('click', function(e) {

        e.preventDefault();

        $('html, body').animate({

                scrollTop: $($(this).attr('href')).offset().top,

            },
            500,
            'linear'
        );

    });


});


function calculateAge() {
    // User's birthdate
    const birthDate = new Date('1999-03-07'); 
    
    // Current date
    const currentDate = new Date();
    
    // Calculate the user's age
    let age = currentDate.getFullYear() - birthDate.getFullYear();
    
    // Check if the user's birthday has occurred this year
    const userHasBirthdayThisYear =
        currentDate.getMonth() > birthDate.getMonth() ||
        (currentDate.getMonth() === birthDate.getMonth() && currentDate.getDate() >= birthDate.getDate());
    
    // If the user's birthday hasn't occurred yet this year, subtract 1 from age
    if (!userHasBirthdayThisYear) {
        age--;
    }
    
    // return age;
    document.getElementById('age').innerHTML += ' ' + age;
}

calculateAge(); // Output the calculated age
