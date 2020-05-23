import jQuery from 'jquery';
import popper from 'popper.js';
import bootstrap from 'bootstrap';
import Flickity from 'flickity'



jQuery(document).ready(function($) {
    let carouselMain = document.querySelector('#slide_tel_carousel')

    let flkty = new Flickity(carouselMain, {
        pageDots: false,
        freeScroll: true,
        wrapAround: true,
        cellAlign: "left",
    });
})