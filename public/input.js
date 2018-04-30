document.getElementById('inputName').focus();

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

function gridPage() {
  window.location = 'grid';
}

document.getElementById('inputName').addEventListener('keydown', (e) => {
  if (e.which == 13) {
    document.getElementById('inputAge').focus();
  }
});

document.getElementById('inputAge').addEventListener('keydown', (e) => {
  if (e.which == 13) {
    document.getElementById('buttonSubmit').click();
  }
});