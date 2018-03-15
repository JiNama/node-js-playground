function getInput(){
    var name = $('#inputName').val();
    var age = $('#inputAge').val();

    window.location = './add/' + name + '/' + age;
    setTimeout(function(){window.location = 'localhost:3000';}, 10);
}

function getData(){
    //var data = 
}