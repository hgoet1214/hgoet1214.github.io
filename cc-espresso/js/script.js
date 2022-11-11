function feedback() {
    let confPar = document.getElementById("confirm-submit");

    let fname = document.getElementById("fname").value;

    confPar.innerHTML = "Thanks for your feedback, " + fname + "! We'll get back to you soon.";
}

function signup() {
    var name = prompt('Enter your name');
    var email = prompt('Enter your email')
    alert("Awesome! We'll start sending messages to " + name + " at " + email + " soon.")
}