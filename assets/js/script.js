var numbers = /^[0-9]+$/;
var letters = /^[A-Za-z]+$/;
var letterNumber = /^[0-9a-zA-Z]+$/;
var symbol = /^[a-zA-Z0-9.]+@/;

function firstName() {
    var fname = document.getElementsByName("firstname")[0].value;
    var fnameWarngTxtLetter = document.getElementById("fname-warng-txt-letters")
    var fnameWarngTxtNumber = document.getElementById("fname-warng-txt-number")
    var fnameWarngTxtRequired = document.getElementById("fname-warng-txt-required")

    if (fname.match(letters)){
        fnameWarngTxtLetter.style.visibility = "hidden";
        fnameWarngTxtNumber.style.visibility = "hidden";
        fnameWarngTxtRequired.style.visibility = "hidden";
    }else if(fname.match(numbers)) {
        fnameWarngTxtLetter.style.visibility = "hidden";
        fnameWarngTxtNumber.style.visibility = "visble";
        fnameWarngTxtRequired.style.visibility = "hidden";
    }else if(fname.match(letterNumber)) {
        fnameWarngTxtLetter.style.visibility = "visible";
        fnameWarngTxtNumber.style.visibility = "visible";
        fnameWarngTxtRequired.style.visibility = "hidden";
    }else if(fname == "") {
        fnameWarngTxtRequired.style.visibility = "visible";
        fnameWarngTxtLetter.style.visibility = "visible";
        fnameWarngTxtNumber.style.visibility = "visible";
    }
    // return false;
}


function emailForm() {
    // document.getElementById("emaillabel").innerHTML = "jalfn"
    var email = document.getElementsByName("email")[0].value;
    var emailWarngTxt = document.getElementById("email-warng-txt");
    var emailWarngRequired = document.getElementById("email-warng-txt-required");

    if(email.match(symbol)){
        emailWarngTxt.style.visibility = "hidden";
        emailWarngRequired.style.visibility = "hidden";
    }else if(email.length == '') {
        emailWarngTxt.style.visibility = "hidden";
        emailWarngRequired.style.visibility = "visible";
    }else if(!email.match(symbol)){
        emailWarngTxt.style.visibility = "visible";
        emailWarngRequired.style.visibility = "hidden";
    }
    // return false;
}

function messageForm() {
    var message = document.getElementsByName("message")[0].value;
    var messageWarngTxt = document.getElementById("messg-wrng-txt")

    if(message.match(letters) || message.match(letterNumber) || message.match(numbers)) {
        messageWarngTxt.style.visibility = "hidden";
    }else if(message.length == '') {
        messageWarngTxt.style.visibility = "visible";
    }
    // return false;
}