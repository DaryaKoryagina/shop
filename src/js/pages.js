import * as $ from 'jquery';

$(document).ready(function($) {
    console.log(2323)
    let modalTwo = document.querySelector('.form_two'); //форма2
    let modalTwoBtn = document.querySelector('.form_two .btn_grey'); //кнопка2
    let modalOne = document.querySelector('.form_one'); //форма-емайл1
    let modalOneBtn = document.querySelector('.form_one .btn_grey'); //кнопка-емайл-1

    let modal = document.querySelector('.modal'); //модалка
    modalTwoBtn.addEventListener('click', (event) => { //событие клик на кнопку
        validateForm(modalTwo)
    });
    modalOneBtn.addEventListener('click', (event) => { //событие клик на кнопку
        validateForm(modalOne)
    });

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