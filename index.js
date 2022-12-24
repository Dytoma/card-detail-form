
const cardDetail = $('#card-detail');
const cardHolderName = $('#card-holder-name');

const cardNumberInput = $('#number');
const cardNumber = $('.card-number');

const monthInput = $('#month');
const cardMonth = $('.card-month');

const yearInput = $('#year');
const cardYear = $('.card-year');

const ccvInput = $('#ccv');
const cardCcv = $('.ccv-cb-text');

const nameError = $('.error1');
const numberError = $('.error2');
const monthError = $('.error4');
const yearError = $('.error4');
const ccvError = $('.error5');
// const form = $('form');



cardDetail.keyup(function() {
    cardHolderName.text($(this).val());

});

cardDetail.blur(function(){
    if ($(this).val() === '') {
        cardHolderName.text("Jane Appleseed");
        nameError.text("Can't be blank"); 
} else {
    cardHolderName.text = $(this).val();
}
});


cardNumberInput.keyup(function() {
    $(this).val(/(\d{4})(\d{4})(\d{4})(\d{4})/g, "$1 $2 $3 $4");
    cardNumber.html($(this).val());

});

cardNumberInput.blur(function(){
    if ($(this).val() == '') {
        cardNumber.text("0000 0000 0000 0000");
        numberError.text("Can't be blank"); 
    }
    checkIfNumber(cardNumber, numberError);
});



monthInput.on("keyup", function() {

    cardMonth.text($(this).val());

});

monthInput.blur(function(){
    if ($(this).val() == '') {
        cardMonth.text("00");
        monthError.text("Can't be blank"); 
    }
    checkIfNumberdate(monthInput, monthError)
});

yearInput.on("keyup", function() {

    cardYear.text($(this).val());

});

yearInput.blur(function(){
    if ($(this).val() == '') {
        cardYear.text("00");
        yearError.text("Can't be blank"); 
    }
    checkIfNumberdate(yearInput, yearError);
});

ccvInput.on("input", function() {

    cardCcv.text($(this).val());

});

ccvInput.blur(function(){
    if ($(this).val() === '') {
        cardCcv.text("000");
        ccvError.text("Can't be blank"); 
    }
});

function checkIfNumber(input, err) {
    var pattern = /(\d{4})\s(\d{4})\s(\d{4})\s(\d{4})/;
    if (pattern.test(input.val()) === false) {
        err.text("Wrong format, numbers only");
    }
}

function checkIfNumberdate(input, err) {
    var pattern = /\d{2}+/g;
    if (pattern.test(input.val()) === false) {
        err.text("Wrong format, numbers only");
    }
}

// form.submit(function(event) {
//     if (cardDetail.val() == '') {
//         cardDetail.setCustomValidity("Can't be blank");
//     }
//     else if (cardNumberInput.val() == '') {
//         cardNumberInput.setCustomValidity("Can't be blank");
//     }
//     else if (monthInput.val() == '') {
//         monthInput.setCustomValidity("Can't be blank");
//     }
//     else if (yearInput.val() == '') {
//         yearInput.setCustomValidity("Can't be blank");
//     }
//     else if (ccvInput.val() == '') {
//         ccvInput.setCustomValidity("Can't be blank");
//     }

//     event.preventDefault();
// });


