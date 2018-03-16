function getInput(){
    var name = $('#inputName').val();
    var age = Number($('#inputAge').val());

    if (Number.isInteger(age)){
        window.location = './add/' + name + '/' + age;
        setTimeout(function(){window.location = 'localhost:3000';}, 10);
        alert('Thank you for your input!\nName: ' + name + '\nAge: ' + age);
    }else{
        alert('Oops! Something went wrong. Please make sure you\'re inputting your age as an integer and try again.');
    }
    $('#inputName').val('');
    $('#inputAge').val('');
}

function getData(){
    //var data = 
}