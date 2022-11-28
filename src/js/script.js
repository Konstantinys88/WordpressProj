$(document).ready(function() {
    // плавная прокрутка меню
    $('nav a[href^="#"]').click(function() {
        let target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 500);
        $('nav a[href^="#"]').parent().removeClass('active');
        $(this).parent().addClass('active');
        $('.header__menu').toggle(500);
        $('.header__burger').toggleClass('header__close');
        return false;
    });
    // мобильное меню
    $('.header__burger').click(function() {
        $('.header__menu').toggle(500);
        $(this).toggleClass('header__close');
    });
});