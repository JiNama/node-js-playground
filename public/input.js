function getInput() {
    var name = $('#inputName').val();
    var age = Number($('#inputAge').val());

    if (name && age) {
        if (Number.isInteger(age)) {
            window.location = './add/' + name + '/' + age;
            setTimeout(function () { window.location = 'localhost:3000'; }, 10);
            alert('Thank you for your input!\nName: ' + name + '\nAge: ' + age);
        } else {
            alert('Oops! Something went wrong. Please make sure you\'re inputting your age as an integer and try again.');
        }
    } else {
        alert('Oops! Something went wrong. Please make sure both fields are filled in before hitting "Submit"!');
    }

    $('#inputName').val('');
    $('#inputAge').val('');

}

function getData() {
    $.getJSON('./list', (data) => alert(JSON.stringify(data, null, 2)));
}

$('#playButton').click(() => {$('#FH').trigger("play");$('#FH').animate({volume: 1}, 500);});
$('#pauseButton').click(() => {
    $('#FH').animate({volume: 0}, 500);
    setTimeout(() => $('#FH').trigger("pause"), 550);
});
$('#stopButton').click(() => $('#FH').trigger("stop"));