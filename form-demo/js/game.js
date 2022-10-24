let fname = "";

// function for greet
function greet() {
    // grab greet paragraph
    let greetParagraph = document.getElementById("greet");

    // get values
    fname = document.getElementById("fname").value;
    let age = document.getElementById("age").value;
    let lname = document.getElementById("lname").value;

    // show result
    greetParagraph.innerHTML = "Greetings " + age + " year old " + fname + " " + lname + "!";
}

function trivia() {
    let triviaAnswer = document.getElementById("trivia-answer");

    // get checked values
    let chocoSelect = document.getElementById("chocolate").checked;
    let tunaSelect = document.getElementById("tuna").checked;
    let honeySelect = document.getElementById("honey").checked;

    // decide what to put
    if (chocoSelect) {
        triviaAnswer.innerHTML = fname + ", you are wrong. Choco fiend, eh?";
    } else if (tunaSelect) {
        triviaAnswer.innerHTML = fname + ", you are wrong. Ew, gross!";
    } else if (honeySelect) {
        triviaAnswer.innerHTML = fname + ", you are right! Sweet, sweet honey!";
    } else {
        triviaAnswer.innerHTML = fname + ", did you even answer the question? Do it again.";
    }
}

function twotru() {
    let answer = document.getElementById("twotru-ans");

    // get checked vals
    let selBalti = document.getElementById("baltimore").checked;
    let selGran = document.getElementById("grandmother").checked;
    let selComm = document.getElementById("commonapp").checked;

    // decide what to put
    if (selBalti) {
        answer.innerHTML = fname + ", that's not a lie. Some distant family member traced our familiar Calverts all the way back to the Baron's parents.";
    } else if (selGran) {
        answer.innerHTML = fname + ", that's the lie! I share first, middle, last with my GREAT-grandmother... meaning my name is on a lot of fancy stuff, including artwork, awards, and a forest outside St. Louis.";
    } else if (selComm) {
        answer.innerHTML = fname + ", that's not a lie. It features a 2003 Subaru Forester, a 2017 Toyota Sienna, and the idea of a Kia Niro.";
    } else {
        answer.innerHTML = fname + ", did you even answer the question? You're better than this.";
    }
}

function twolie() {
    let answer = document.getElementById("twolie-ans");

    // get checked vals
    let selTrack = document.getElementById("track").checked;
    let selAlias = document.getElementById("alias").checked;
    let selSports = document.getElementById("sports").checked;

    // decide what to put
    if (selTrack && selAlias && selSports) {
        answer.innerHTML = fname + ", pretty sure the instructions were choose two.";
    } else if (selTrack && selAlias) {
        answer.innerHTML = fname + ", you got both lies! I've only competed in discus and shot put in track, so I only have those two records, and, while Catnip and Simba are two of my camp names, I've never gone by Nutella despite being a Hazel(nut). The sports are the truth; in fact, I once played on two soccer teams and a volleyball team at the same time in 7th grade, and I was on two basketball teams at once in freshman year.";
    } else if (selSports && selTrack || selSports && selAlias) {
        answer.innerHTML = fname + ", you missed one. I've only competed in discus and shot put in track, so I only have those two records, and, while Catnip and Simba are two of my camp names, I've never gone by Nutella despite being a Hazel(nut). The sports are the truth; in fact, I once played on two soccer teams and a volleyball team at the same time in 7th grade, and I was on two basketball teams at once in freshman year.";
    } else {
        answer.innerHTML = fname + ", okay, try checking two boxes this time. You can do it.";
    }
}