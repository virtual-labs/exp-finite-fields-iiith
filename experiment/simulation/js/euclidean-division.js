const mField1 = document.getElementById("m-field-1");
const mField2 = document.getElementById("m-field-2");
const mField3 = document.getElementById("m-field-3");
const mField4 = document.getElementById("m-field-4");
const mField5 = document.getElementById("m-field-5");

function confirm1() {

    const obs1 = document.getElementById("observations1");
    const inp1 = mField1.value;

    if (inp1.length == 0) {
        obs1.innerHTML = "Enter the answer."
        obs1.style.color = "black";
    }

    else if (inp1 == "x^2+x" || inp1 == "x+x^2") {
        obs1.innerHTML = "<b>Correct Answer!!!</b>";
        obs1.style.color = "green";

        document.getElementById("submit1").setAttribute("disabled", true);
        document.getElementById("submit2").removeAttribute("disabled");

        mField1.setAttribute("disabled", true);
        mField2.removeAttribute("disabled");
        mField3.removeAttribute("disabled");
        mField4.removeAttribute("disabled");
        mField5.removeAttribute("disabled");

    }

    else {
        obs1.style.color = "red";
        if (obs1.innerHTML == "<b>Wrong Answer :(</b>") {
            obs1.innerHTML = "<b>Wrong Again :(</b>";
        }
        else {
            obs1.innerHTML = "<b>Wrong Answer :(</b>";
        }
    }

}

function confirm2() {
    const obs1 = document.getElementById("observations1");
    const inp2 = mField2.value;
    const inp3 = mField3.value;
    const inp4 = mField4.value;
    const inp5 = mField5.value;

    if (inp2.length == "0" || inp3.length == "0" || inp4.length == "0" || inp5.length == "0") {
        obs1.innerHTML = "Enter the answer."
        obs1.style.color = "black";
    }

    else if ((inp2 == "x^2+1" || inp2 == "1+x^2") && inp3 == "1" && (inp4 == "x^2+x" || inp4 == "x+x^2") && (inp5 == "1+x" || inp5 == "x+1")) {
        obs1.innerHTML = "<b>Correct Answer!!!</b> <br> The GCD is x<sup>2</sup>+1";
        obs1.style.color = "green";
    }

    else {
        obs1.style.color = "red";
        if (obs1.innerHTML == "<b>Wrong Answer :(</b>") {
            obs1.innerHTML = "<b>Wrong Again :(</b>";
        }
        else {
            obs1.innerHTML = "<b>Wrong Answer :(</b>";
        }
    }
}




// Second Example
const mathField1 = document.getElementById("math-field-1");
const mathField2 = document.getElementById("math-field-2");
const mathField3 = document.getElementById("math-field-3");
const mathField4 = document.getElementById("math-field-4");
const mathField5 = document.getElementById("math-field-5");
const mathField6 = document.getElementById("math-field-6");
const mathField7 = document.getElementById("math-field-7");
const mathField8 = document.getElementById("math-field-8");
const mathField9 = document.getElementById("math-field-9");


function check1() {

    const obs2 = document.getElementById("observations2");
    const inp1 = mathField1.value;

    if (inp1.length == 0) {
        obs2.innerHTML = "Enter the answer."
        obs2.style.color = "black";
    }

    else if (inp1 === "x^3") {
        obs2.innerHTML = "<b>Correct Answer!!!</b>";
        obs2.style.color = "green";

        document.getElementById("sub1").setAttribute("disabled", true);
        document.getElementById("sub2").removeAttribute("disabled");

        mathField1.setAttribute("disabled", true);
        mathField2.removeAttribute("disabled");
        mathField3.removeAttribute("disabled");
        mathField4.removeAttribute("disabled");
        mathField5.removeAttribute("disabled");
    }

    else {
        obs2.style.color = "red";
        if (obs2.innerHTML == "<b>Wrong Answer :(</b>") {
            obs2.innerHTML = "<b>Wrong Again :(</b>";
        }
        else {
            obs2.innerHTML = "<b>Wrong Answer :(</b>";
        }
    }

}

function check2() {
    const obs2 = document.getElementById("observations2");
    const inp2 = mathField2.value;
    const inp3 = mathField3.value;
    const inp4 = mathField4.value;
    const inp5 = mathField5.value;

    if (inp2.length == "0" || inp3.length == "0" || inp4.length == "0" || inp5.length == "0") {
        obs2.innerHTML = "Enter all the fields."
        obs2.style.color = "black";
    }
    else if ((inp2 == "x^2+1" || inp2 == "1+x^2") && inp3 == "1" && inp4 == "x^3" && inp5 == "x") {
        obs2.style.color = "green";
        if (obs2.innerHTML == "<b>Correct Answer!!!</b>") {
            obs2.innerHTML = "<b>Correct Again!!!</b>";
        }
        else {
            obs2.innerHTML = "<b>Correct Answer!!!</b>";
        }

        document.getElementById("sub2").setAttribute("disabled", true);
        document.getElementById("sub3").removeAttribute("disabled");

        mathField2.setAttribute("disabled", true);
        mathField3.setAttribute("disabled", true);
        mathField4.setAttribute("disabled", true);
        mathField5.setAttribute("disabled", true);

        mathField6.removeAttribute("disabled");
        mathField7.removeAttribute("disabled");
        mathField8.removeAttribute("disabled");
        mathField9.removeAttribute("disabled");
    }

    else {
        obs2.style.color = "red";
        if (obs2.innerHTML == "<b>Wrong Answer :(</b>") {
            obs2.innerHTML = "<b>Wrong Again :(</b>";
        }
        else {
            obs2.innerHTML = "<b>Wrong Answer :(</b>";
        }
    }
}

function check3() {
    const obs2 = document.getElementById("observations2");
    const inp6 = mathField6.value;
    const inp7 = mathField7.value;
    const inp8 = mathField8.value;
    const inp9 = mathField9.value;

    if (inp6.length == "0" || inp7.length == "0" || inp8.length == "0" || inp9.length == "0") {
        obs2.innerHTML = "Enter all the fields."
        obs2.style.color = "black";
    }
    else if ((inp6 == "x+1" || inp6 == "1+x") && inp7 == "x" && (inp8 == "1+x^4" || inp8 == "x^4+1") && (inp9 == "x+1" || inp9 == "1+x")) {
        obs2.innerHTML = "<b>Correct Answer!!!</b> <br> The GCD is 1+x";
        obs2.style.color = "green";

    }

    else {
        obs2.style.color = "red";
        if (obs2.innerHTML == "<b>Wrong Answer :(</b>") {
            obs2.innerHTML = "<b>Wrong Again :(</b>";
        }
        else {
            obs2.innerHTML = "<b>Wrong Answer :(</b>";
        }
    }
}

function page1() {

    const sec1 = document.getElementById("example1");
    const sec2 = document.getElementById("example2");
    const obs1 = document.getElementById("observations1");

    sec1.style.display = "block";
    sec2.style.display = "none";

    obs1.innerHTML = "";

    mField1.removeAttribute("disabled");
    mField2.setAttribute("disabled", true);
    mField3.setAttribute("disabled", true);
    mField4.setAttribute("disabled", true);
    mField5.setAttribute("disabled", true);


    document.getElementById("submit1").removeAttribute("disabled");
    document.getElementById("submit2").setAttribute("disabled", true);

    document.getElementById("form1").reset();
    document.getElementById("form2").reset();
}

function page2() {

    const sec1 = document.getElementById("example1");
    const sec2 = document.getElementById("example2");
    const obs2 = document.getElementById("observations2");

    sec1.style.display = "none";
    sec2.style.display = "block";

    obs2.innerHTML = "";

    mathField1.removeAttribute("disabled");
    mathField2.setAttribute("disabled", true);
    mathField3.setAttribute("disabled", true);
    mathField4.setAttribute("disabled", true);
    mathField5.setAttribute("disabled", true);
    mathField6.setAttribute("disabled", true);
    mathField7.setAttribute("disabled", true);
    mathField8.setAttribute("disabled", true);
    mathField9.setAttribute("disabled", true);

    document.getElementById("sub1").removeAttribute("disabled");
    document.getElementById("sub2").setAttribute("disabled", true);
    document.getElementById("sub3").setAttribute("disabled", true);

    document.getElementById("form3").reset();
    document.getElementById("form4").reset();
    document.getElementById("form5").reset();
}





