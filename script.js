function Contato(){
        window.open('https://wa.me/551193946211')
    }

$('.nav a[href^="#"]').on('click',
function(e) {
    e.preventDefault();
    var id = $(this).attr('href'),
        targetOffset = $(id).offset().top;

    $('html, body').animate({
        scrollTop: targetOffse - 100
    }, 500);
    });