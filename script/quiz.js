$(document).ready(function () {
    let step = 1;
    const name = document.getElementById('name');
    const city = document.getElementById('city');
    const btnNext = $('.btn-quiz');

    function changeStep() {
        $('#step-' + step).fadeOut(300, () => {
            $('#step-' + ++step).fadeIn(300);
        });
    }

    btnNext.on('click', () => {
        if (step === 1
            && name.value.length >= 2
            && $('input[name="phone"]').is(':not(:placeholder-shown)')
            && city.value.length >= 3)
            changeStep();
        else if (step < 10 && $('input[name="step-' + step + '"]').is(':checked')) {
            changeStep();
        }
        else if (step === 10 && $('input[name="step-10"]').is(':checked')) {
            changeStep();
            $('.quiz__bottom-part').fadeOut(300);
        }
    });

    $('input[name="phone"]').mask("+7 (999) 999-99-99");
});