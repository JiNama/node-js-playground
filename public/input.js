function getInput(){
    var name = $('#inputName').val();
    var age = $('#inputAge').val();

    window.location = './add/' + name + '/' + age;
}