import * as $ from 'jquery';

$(document).ready(function($) {
    console.log(2323)
    let modalTwo = document.querySelector('.form_two'); //форма2
    let modalTwoBtn = document.querySelector('.form_two .btn_grey'); //кнопка2
    let modalOne = document.querySelector('.form_one'); //форма-емайл1
    let modalOneBtn = document.querySelector('.form_one .btn_grey'); //кнопка-емайл-1
    let modalTrackBtn = document.querySelector('.btn_functional');
    let formTrack = document.querySelector('.tracker__group__main');
    // let modalNewsBtn = document.querySelector('.btn_functional')
    let formNews = document.querySelector('.leave__comment');
    let formChecout = document.querySelector('.login__table');
    let btnChecout = document.querySelector('.form__checkout .btn_grey');
    let modal = document.querySelector('.modal'); //модалка
    let btnBig = document.querySelector('.btn_big');
    let formCoupon = document.querySelector('.coupon_input');
    let btnCheck = document.querySelector('.btn_pay');
    let formCheck = document.querySelector('.form__checkout');
    let inputValue = document.querySelectorAll('.card__count');
    let cardValue = document.querySelector('.card_table_content'); //общий клас
    let cardRem = cardValue.querySelectorAll('.card_table_item');
    cardRem.forEach(item => {
        let btnRem = item.querySelector('.functional__crest'); //кнопка
        btnRem.addEventListener('click', (event) => { //событие клик на кнопку
            item.remove(); //удаление 
        });
    });
    inputValue.forEach(input => {
        let btnValue = input.querySelector('.btn__input_item')
        let inputItem = input.querySelector('.card__count__input')
        let btnBot = input.querySelector('.btn__botton');
        btnValue.addEventListener('click', (event) => { //событие клик на кнопку
            inputItem.value = ++inputItem.value;
        });
        btnBot.addEventListener('click', (event) => { //событие клик на кнопку

            if (inputItem.value != 0 || inputItem.value != "0") {
                inputItem.value = --inputItem.value;

            }


        });
    });



    if (modalTwoBtn) {
        modalTwoBtn.addEventListener('click', (event) => { //событие клик на кнопку
            validateForm(modalTwo)
        });
    }
    if (modalOneBtn) {
        modalOneBtn.addEventListener('click', (event) => { //событие клик на кнопку
            validateForm(modalOne)
        });
    }

    if (modalTrackBtn) {
        modalTrackBtn.addEventListener('click', (event) => { //событие клик на кнопку
            validateForm(formTrack)
        });
    }
    if (modalTrackBtn) {
        modalTrackBtn.addEventListener('click', (event) => { //событие клик на кнопку
            validateForm(formNews)
        });
    }
    if (btnChecout) {
        btnChecout.addEventListener('click', (event) => { //событие клик на кнопку
            validateForm(formChecout)
        });
    }
    if (btnBig) {
        btnBig.addEventListener('click', (event) => { //событие клик на кнопку
            validateForm(formCoupon)
        });
    }
    if (btnCheck) {
        btnCheck.addEventListener('click', (event) => { //событие клик на кнопку
            validateForm(formCheck)
        });
    }










    function validateForm(form) {
        let inputText = form.querySelectorAll('.form-control')
        inputText.forEach(input => {
            let visibleError = input.nextElementSibling;
            if (visibleError) {
                visibleError.remove();
            }
            let error = document.createElement('div');
            error.classList.add("invalid-feedback");
            error.innerHTML = "please fill in the entry field";
            if (input.value == "") {
                input.classList.add('is-invalid')
                input.insertAdjacentElement('afterEnd', error);
            } else {
                input.classList.remove('is-invalid');
                error.remove()
                $('#staticBackdrop').modal('show');
            }
        });
    }
});