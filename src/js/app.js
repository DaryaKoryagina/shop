import * as $ from 'jquery';
import popper from 'popper.js';
import bootstrap from 'bootstrap';
import Flickity from 'flickity-fullscreen'
import * as select2 from 'select2'




$(document).ready(function($) {
    $('.custom__select').select2({
        width: 'resolve'
    });
    $('b[role="presentation"]').hide();
    $('.select2-selection__arrow').append('<i class="fa fa-angle-down  arrow_input"></i>');



    let carouselMain = document.querySelector('.slider-main')
    console.log(carouselMain)
    if (carouselMain) {
        let flkty = new Flickity(carouselMain, {
            prevNextButtons: false,
            pageDots: false,
            fullscreen: true,
        });
        var previousButton = document.querySelector('#start__btn');
        previousButton.addEventListener('click', function() {
            flkty.previous();
        });

        var nextButton = document.querySelector('#end__btn');
        nextButton.addEventListener('click', function() {
            flkty.next();
        });
    }
    let carouselNav = document.querySelector('.slider-nav')
    if (carouselMain) {
        let flkty2 = new Flickity(carouselNav, {
            asNavFor: ".slider-main",
            contain: true,
            freeScroll: true,
            pageDots: false,
            prevNextButtons: false
        });
    }
    let carouselTel = document.querySelector('#slide_tel_carousel')
    if (carouselTel) {
        let flktyTel = new Flickity(carouselTel, {
            freeScroll: true,
            wrapAround: true,
            pageDots: false,
            groupCells: true

        });
    }
    let carouselRelat = document.querySelector('.carousel')
    if (carouselRelat) {
        let relat = new Flickity(carouselRelat, {
            prevNextButtons: false,
            pageDots: false,
            freeScroll: true,
            contain: true,
            wrapAround: true
        });
        var startButton = document.querySelector('#btn_carusel_start');
        startButton.addEventListener('click', function() {
            relat.previous();
        });

        var nextBtn = document.querySelector('#btn_carusel_next');
        nextBtn.addEventListener('click', function() {
            relat.next();
        });
        let carouselFooter = document.querySelector('.slider__footer')
        console.log(carouselFooter)
        if (carouselFooter) {
            let Footer = new Flickity(carouselFooter, {
                prevNextButtons: false,
                pageDots: false,
                groupCells: true,
                wrapAround: true,

            });
            var previousButton = document.querySelector('#btn_footer_start');
            previousButton.addEventListener('click', function() {
                Footer.previous();
            });

            var nextButton = document.querySelector('#btn_footer_next');
            nextButton.addEventListener('click', function() {
                Footer.next();
            });
        }





    }


    //новое

    let carouselOffer = document.querySelector('.offer-main')
    console.log(carouselOffer)
    if (carouselOffer) {
        let offer = new Flickity(carouselOffer, {
            prevNextButtons: false,
            pageDots: true,

        });
    }
    //таймер
    var timer;
    // var compareDate = new Date(2021, 5, 30, 9, 22, 56); // // 1 января 2011, 00:00:00;
    var compareDate = new Date();
    compareDate.setDate(compareDate.getDate() + 7); //just for this demo today + 7 days
    console.log(compareDate.getDate())
    timer = setInterval(function() {
        timeBetweenDates(compareDate);
    }, 1000);

    function timeBetweenDates(toDate) {
        var dateEntered = toDate;
        var now = new Date();
        var difference = dateEntered.getTime() - now.getTime();

        if (difference <= 0) {

            // Timer done
            clearInterval(timer);

        } else {

            var seconds = Math.floor(difference / 1000);
            var minutes = Math.floor(seconds / 60);
            var hours = Math.floor(minutes / 60);
            var days = Math.floor(hours / 24);

            hours %= 24;
            minutes %= 60;
            seconds %= 60;

            $("#days").text(days);
            $("#hours").text(hours);
            $("#minutes").text(minutes);
            $("#seconds").text(seconds);
        }
    }
})