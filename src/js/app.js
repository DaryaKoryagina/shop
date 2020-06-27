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
    }


})