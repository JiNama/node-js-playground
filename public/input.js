function getInput() {
    var name = $('#inputName').val();
    var age = Number($('#inputAge').val());

    if (name && age) {
        if (Number.isInteger(age)) {
            alert('Thank you for your input!\nName: ' + name + '\nAge: ' + age);
            window.location = './add/' + name + '/' + age;
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

$('#playButton').click(() => { $('#musicPlayer').trigger('play'); $('#musicPlayer').animate({ volume: 1 }, 500); });
$('#pauseButton').click(() => {
    $('#musicPlayer').animate({ volume: 0 }, 500);
    setTimeout(() => $('#musicPlayer').trigger('pause'), 500);
});
$('#stopButton').click(() => {
    $('#musicPlayer').animate({ volume: 0 }, 500);
    setTimeout(() => $('#musicPlayer').trigger('pause'), 500);
    setTimeout(() => $('#musicPlayer').prop("currentTime", 0), 550);
});

function gridPage() {
    window.location = 'grid';
}

function changedSong() {
    var getSong = $('#selectSong').val();
    if (getSong == 'Modern Slavery') {
        $('#musicPlayer').attr('src', 'music/modernslavery.mp3');
    } else if (getSong == 'Faded Heart') {
        $('#musicPlayer').attr('src', 'music/fadedheart.mp3');
    } else if (getSong == 'Dancing In The Moonlight') {
        $('#musicPlayer').attr('src', 'music/dancinginthemoonlight.mp3');
    }
}