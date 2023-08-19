
// Function to validate the Name field
function validateName() {
  var nameInput = $('#username').val();

  if (nameInput === '') {
    $('#name').text('Name is required.');
    $('#username').css({ 'border-color': '2px solidred', 'box-shadow': '0 0 5px red' });
    $('#valid1').text('');
    return false;
  } else if (!/^[A-Z][a-z]*[!@#$%^&*]?(\d{1,4}|[a-z]*)$/.test(nameInput)) {
    $('#name').text('Name should Start With Capital letter');
    $('#username').css({ 'border-color': '2px solidred', 'box-shadow': '0 0 5px red' });
    $('#valid1').text('');
    return false;
  } else if (nameInput.length < 3) {
    $('#name').text('Name should be at least 3 characters long.');
    $('#username').css({ 'border-color': '2px solidred', 'box-shadow': '0 0 5px red' });
    $('#valid1').text('');
    return false;
  } else {
    $('#name').text('');
    $('#valid1').text('Name is valid!');
    $('#username').css({ 'border-color': '2px solid green', 'box-shadow': '0 0 5px green' });
    return true;
  }
}

// Event handler for input change
$('#username').on('input', function () {
  validateName();
  $('#mailid').on('input', function () {
    validateEmail();
    $('#dateOfBirth').on('input', function () {
      validatedate();
      $('#pnum').on('input', function () {
        validatephone();
        $('#gridRadios1,#gridRadios2,#gridRadios3').on('input', function () {
          genderValidation();
          $('#placedrop').on('input', function () {
            validateplace();
            $('#defaultCheck1').on('input', function () {
              validatecheck();
            });
          });
        });
      });
    });
  });


});

// function to validate the email field

function validateEmail() {
  var emailinput = $('#mailid').val();

  if (emailinput === '') {
    $('#email').text('Email is required');
    $('#valid2').text('');
    $('#mailid').css({ 'border-color': '2px solidred', 'box-shadow': '0 0 5px red' });
    return false;
  }
  else if (!/^[\w.-]+@([\w-]+\.)+(com|in)$/.test(emailinput)) {
    $('#email').text('Enter the valid mailid');
    $('#mailid').css({ 'border-color': '2px solidred', 'box-shadow': '0 0 5px red' });
    $('#valid2').text('');
    return false;
  }
  else {
    $('#email').text('');
    $('#valid2').text('Email is valid!');
    $('#mailid').css({ 'border-color': '2px solid green', 'box-shadow': '0 0 5px green' });
    return true;
  }
}


// function to validate the  date of birth

function validatedate() {
  var dateinput = $('#dateOfBirth').val();

  if (dateinput == null || dateinput == '') {
    $('#dateOfBirthrErr').text('Date is required');
    $('#valid3').text('');
    $('#dateOfBirth').css({ 'border-color': '2px solidred', 'box-shadow': '0 0 5px red' });
    return false;

  }
  else {
    $('#dateOfBirthrErr').text('');
    $('#valid3').text('Date is valid');
    $('#dateOfBirth').css({ 'border-color': '2px solid green', 'box-shadow': '0 0 5px green' });
    return true;
  }
}



// function to validate phone number

function validatephone() {
  var phoneinput = $('#pnum').val();
  console.log(phoneinput)

  if (phoneinput === '') {
    $('#phone').text('Enter the Phonenumber');
    $('#valid4').text('');
    $('#pnum').css({ 'border-color': '2px solidred', 'box-shadow': '0 0 5px red' });
    return false;
  }
  else if (phoneinput.length > 10) {
    $('#phone').text('Enter the 10 digits');
    $('#valid4').text('');
    $('#pnum').css({ 'border-color': '2px solidred', 'box-shadow': '0 0 5px red' });
    return false;
  }
  else if (phoneinput.length < 10) {
    $('#phone').text('Enter the 10 digits');
    $('#valid4').text('');
    $('#pnum').css({ 'border-color': '2px solidred', 'box-shadow': '0 0 5px red' });
    return false;
  }
  else if (!/^[6-9]\d{9}$/.test(phoneinput)) {
    $('#phone').text('Number starts with 6,7,8,9');
    $('#valid4').text('');
    $('#pnum').css({ 'border-color': '2px solidred', 'box-shadow': '0 0 5px red' });
    return false;
  }
  else {
    $('#phone').text('')
    $('#valid4').text('p.number is valid')
    $('#pnum').css({ 'border-color': '2px solid green', 'box-shadow': '0 0 5px green' });
    return true;
  }

}

// gender validation

function genderValidation() {
  var gender = $(' input[type="radio"]:checked').val();
  console.log("-------- ", gender)
  
  if (!gender) {
    $('#genderError').text('select the gender');
    $('#gridRadios1').css({ 'border-color': '2px solidred', 'box-shadow': '0 0 5px red' });
    $('#gridRadios2').css({ 'border-color': '2px solidred', 'box-shadow': '0 0 5px red' });
    $('#gridRadios3').css({ 'border-color': '2px solidred', 'box-shadow': '0 0 5px red' });
    return false;
  }
  else {
    $('#genderError').text('');
    $('#gridRadios1').css({ 'border-color': '2px solid black', 'box-shadow': '0 0 0px black' });
    $('#gridRadios2').css({ 'border-color': '2px solid black', 'box-shadow': '0 0 0px black' });
    $('#gridRadios3').css({ 'border-color': '2px solid black', 'box-shadow': '0 0 0px black' });
    return true;
  }
}


// function for place validation

function validateplace() {
  var placeinput = $('#placedrop').val();
  console.log(placeinput)

  if (placeinput == 0) {
    $('#droperror').text('please select your place');
    $('#placedrop').css({ 'border-color': '2px solid red', 'box-shadow': '0 0 5px red' });
    $('#valid6').text('');
    return false;
  } else {
    $('#droperror').text('');
    $('#placedrop').css({ 'border-color': '2px solid green', 'box-shadow': '0 0 5px green' });
    return true;
  }
}


// function to  validate checkbox

function validatecheck() {

  var checkinput = $(' input[type="checkbox"]:checked').val();
  console.log("---------", checkinput)

  if (checkinput == undefined) {
    $('#checkerror').text('please agree the terms');
    $('#defaultCheck1').css({ 'border-color': '2px solid red', 'box-shadow': '0 0 5px red' });
    return false;

  } else {
    $('#checkerror').text('');
    $('#defaultCheck1').css({ 'border-color': '2px solid green', 'box-shadow': '0 0 5px green' });
    return true;
  }
}


// Event handler for form submission
$('form').on('submit', function (e) {
// Prevent form submission if the validation fails
console.log(e)
if (!validateName()) {
  if (!validateEmail()) {
    if (!validatedate()) {
      if (!validatephone()) {
        if (!genderValidation()) {
          if (!validateplace()) {
            if (!validatecheck()) {
              e.preventDefault();
            }
          }
        }
      }
    }
  }
}

});


$('#submitButton').on('click', function form() {
  

  if (validateName()) {
    if (validateEmail()) {
      if (validatedate()) {
        if (validatephone()) {
          if (genderValidation()) {
            if (validateplace()) {
              if (validatecheck()) {
               
                var modal = new bootstrap.Modal($("#exampleModal"));
                modal.show();


              }
            }
          }
        }
      }
    }
  }

});

$('#ok').on('click', function form() {
  location.reload();
});




