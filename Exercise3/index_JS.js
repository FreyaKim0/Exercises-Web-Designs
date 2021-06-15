"use strict";

//Q2. The Preferred Campus restricts the programs

var campus = ['Progress', 'Story Arts Centre', 'Downsview'];
var campusSelect = document.getElementById("campus_ID");
var inner = "";

for (var i = 0; i < campus.length; i++) {
    inner = inner + '<option value=i>' + campus[i] + '</option>';
}

campusSelect.innerHTML = inner;

var progress_class = ['General Education', 'Marketing', 'Mechanical Engineering', 'Auto Mechanics', 'Early Childhood Education'];
var story_class = ['General Education', 'Graphic Design', 'Public Relations', 'Advertising'];
var downsview_class = ['General Education', 'Aviation']

function changeCollege(index) {
    var Sinner = "";
    switch (index) {
        case 0:
            for (var i = 0; i < progress_class.length; i++) {
                Sinner = Sinner + '<option value=i>' + progress_class[i] + '</option>';
            }
            break;
        case 1:
            for (var i = 0; i < story_class.length; i++) {
                Sinner = Sinner + '<option value=i>' + story_class[i] + '</option>';
            }
            break;
        case 2:
            for (var i = 0; i < downsview_class.length; i++) {
                Sinner = Sinner + '<option value=i>' + downsview_class[i] + '</option>';
            }
            break;
    }
    var sectorSelect = document.getElementById("interest_program_ID");
    sectorSelect.innerHTML = Sinner;
}

changeCollege(document.getElementById("campus_ID").selectedIndex);

//Q1
var Finalcheck = false;

function validateRequired() {

    //whole form
    var all = document.querySelectorAll("#form_ID input");
    var elementCount = all.length - 1;
    var formValidity = true;

    //Assign ID
    var firstName = document.getElementById("first_name_ID");
    var lastName = document.getElementById("last_name_ID");
    var female = document.getElementById("Female_ID");
    var male = document.getElementById("male_ID");
    var address = document.getElementById("address_ID");
    var country = document.getElementById("country_ID");
    var postCode = document.getElementById("post_code_ID");
    var city = document.getElementById("city_ID");
    var province = document.getElementById("province_ID");
    var email = document.getElementById("email_ID");
    var phone = document.getElementById("phone_ID");
    var highSchool = document.getElementById("hight_school_ID");
    var college = document.getElementById("college_ID");
    var university = document.getElementById("university");
    var educationOther = document.getElementById("education_level_others_ID");
    var yes = document.getElementById("yes_ID");
    var no = document.getElementById("no_ID");
    var campus = document.getElementById("campus_ID");
    var program = document.getElementById("interest_program_ID");
    var findUs = document.getElementById("how_to_find_us_ID");
    var password = document.getElementById("password_ID");
    var comfirmPassword = document.getElementById("comfirm_password_ID");
    var errorDiv = document.getElementById("errorID");

    // a) First name and Last name fields length must be 15 characters 
    //    and begin with an upper case ----> HTML:onkeyup="this.value=this.value.toUpperCase() 
    try {
        if (firstName.value === "" || firstName.value.length > 15 && firstName.value != /[A-Z]/) {
            firstName.style.backgroundColor = "rgb(255,233,233)";
            formValidity = false;
            document.getElementById("first_error").innerHTML = "First name must be 1-15 letters.";
        }
        else {
            firstName.style.background = "white";
            document.getElementById("first_error").innerHTML = "";
        }

        if (lastName.value === "" || lastName.value.length > 15 && lastName.value != /[A-Z]/) {
            lastName.style.backgroundColor = "rgb(255,233,233)";
            formValidity = false;
            document.getElementById("last_error").innerHTML = "Last name must be 1-15 letters.";
        }
        else {
            lastName.style.background = "white";
            document.getElementById("last_error").innerHTML = "";
        }

        // b) Password field length must be 8 to 12 characters 
        //    and must include numbers, dot (.) and back slash (\).   

        if (!/[0-9]/.test(password.value) || !/[\.]/.test(password.value) || !/[\\]/.test(password.value)) {
            password.style.background = "rgb(255,233,233)";
            formValidity = false;
            document.getElementById("password_error").innerHTML = "Password must include at lease one number, one dot (.) and one back slash (\\)";
        }
        else {
            password.style.background = "white";
            document.getElementById("password_error").innerHTML = "";
        }

        //c) Password and Confirm password fields must accept only identical input.

        if (comfirmPassword.value !== password.value) {
            comfirmPassword.style.background = "rgb(255,233,233)";
            formValidity = false;
            document.getElementById("confirm_error").innerHTML = "It's not same as your password";
        }
        else {
            comfirmPassword.style.background = "white";
            document.getElementById("confirm_error").innerHTML = "";
        }

        //d) Phone number allows only ten digits.  

        if (!/\d{10}$/.test(phone.value)) {
            phone.style.background = "rgb(255,233,233)";
            formValidity = false;
            document.getElementById("phone_error").innerHTML = "Phone number should be 10 digit numbers";
        }
        else {
            phone.style.background = "white";
            document.getElementById("phone_error").innerHTML = "";
        }

        //e) Postal code field only allows “A9A 9A9” format for Canada and “99999” for USA.

        if (country.value === "USA" && !/\d{6}$/.test(postCode.value)) {
            postCode.style.background = "rgb(255,233,233)";
            formValidity = false;
            document.getElementById("postcode_error").innerHTML = "USA postcode sample: 999999";
        }
        else {
            postCode.style.background = "white";
            document.getElementById("postcode_error").innerHTML = "";
        }

        if (country.value === "Canada" && !/^[A-Z]\d{1}[A-Z]\d{1}[A-Z]\d{1}$/.test(postCode.value)) {
            postCode.style.background = "rgb(255,233,233)";
            formValidity = false;
            document.getElementById("postcode_error").innerHTML = "Canada postcode sample: A9A9A9";
        }
        else {
            postCode.style.background = "white";
            document.getElementById("postcode_error").innerHTML = "";
        }

        //f) Email address field validates with '@' sign and ‘.’  

        if (!/@/.test(email.value) || !/./.test(email.value)) {
            email.style.background = "rgb(255,233,233)";
            formValidity = false;
            document.getElementById("email_error").innerHTML = "E-mail address should contents '@' and '.' ";
        }
        else {
            email.style.background = "white";
            document.getElementById("email_error").innerHTML = "";
        }
    }
    catch (exception) {
        //blank
    }
    finally {
        Finalcheck = formValidity;
    }

}

//If everything is correct then submit form
function validateForm(evt) {
    if (evt.preventDefault) {
        evt.preventDefault();
        evt.returnValue = false;
    }
    validateRequired();
    if (Finalcheck === true) {
        document.getElementsByTagName("form")[0].submit();
    }
}

//Create and load eventlisteners
function createEventListeners() {
    var form = document.getElementsByTagName("form")[0];
    if (form.addEventListener) {
        form.addEventListener("submit", validateForm, false);
    } else if (form.attachEvent) {
        form.attachEvent("onsubmit", validateForm);
    }
}

if (window.addEventListener) {
    window.addEventListener("load", createEventListeners, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", createEventListeners);
}
