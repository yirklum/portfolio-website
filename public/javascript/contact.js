// $(document).ready(function() {
// });

function validateForm() {
    var x = document.forms["contact"]["firstName"].value;
    var y = document.forms["contact"]["lastName"].value;
    var z = document.forms["contact"]["eMail"].value;
    var a = document.forms["contact"]["jobDescription"].value;
    
    if (x == "") {
        alert("First Name is required");
        return false;
    }
    else if (y == "") {
        alert("Last Name is required");
        return false;
    }

    else if (z == "") {
        alert("E-mail address is required");
        return false;
    }

    else if (a == "") {
        alert("Description of request is required");
        return false;
    }
    else {
        $("#confirmation").css("display", "inline-block");
        $(".contact-form").css("display", "none");
    }
}






