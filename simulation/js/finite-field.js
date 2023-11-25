function replaceAlpha(input) {
    input.value = input.value.replace(/alpha/gi, "α");
}

function check1() {

    const obs1 = document.getElementById("observations1");
    const inp1 = document.getElementById("math-field-1").value;

    if (inp1.length == 0) {
        obs1.innerHTML = "<b>Q1.</b> Enter the answer."
        obs1.style.color = "black";
    }

    else if (inp1 === "0") {
        obs1.innerHTML = "<b>Q1. Correct Answer!!!</b>";
        obs1.style.color = "green";
    }

    else {
        obs1.style.color = "red";
        if (obs1.innerHTML == "<b>Q1. Wrong Answer :(</b>") {
            obs1.innerHTML = "<b>Q1. Wrong Again :(</b>";
        }
        else {
            obs1.innerHTML = "<b>Q1. Wrong Answer :(</b>";
        }
    }

}

function check2() {

    const obs1 = document.getElementById("observations1");
    const inp2 = document.getElementById("math-field-2").value;

    if (inp2.length == 0) {
        obs1.innerHTML = "<b>Q2.</b> Enter the answer."
        obs1.style.color = "black";
    }

    else if (inp2 === "1") {
        obs1.innerHTML = "<b>Q2. Correct Answer!!!</b>";
        obs1.style.color = "green";
    }

    else {
        obs1.style.color = "red";
        if (obs1.innerHTML == "<b>Q2. Wrong Answer :(</b>") {
            obs1.innerHTML = "<b>Q2. Wrong Again :(</b>";
        }
        else {
            obs1.innerHTML = "<b>Q2. Wrong Answer :(</b>";
        }
    }
}

function check3() {

    const obs1 = document.getElementById("observations1");
    const inp3 = document.getElementById("math-field-3").value;

    if (inp3.length == 0) {
        obs1.innerHTML = "<b>Q3.</b> Enter the answer."
        obs1.style.color = "black";
    }

    else if (inp3 === "α") {
        obs1.innerHTML = "<b>Q3. Correct Answer!!!</b>";
        obs1.style.color = "green";
    }

    else {
        obs1.style.color = "red";
        if (obs1.innerHTML == "<b>Q3. Wrong Answer :(</b>") {
            obs1.innerHTML = "<b>Q3. Wrong Again :(</b>";
        }
        else {
            obs1.innerHTML = "<b>Q3. Wrong Answer :(</b>";
        }
    }

}


function check4() {

    const obs1 = document.getElementById("observations1");
    const inp4 = document.getElementById("math-field-4").value;

    if (inp4.length == 0) {
        obs1.innerHTML = "<b>Q4.</b> Enter the answer."
        obs1.style.color = "black";
    }

    else if (inp4 === "α^2") {
        obs1.innerHTML = "<b>Q4. Correct Answer!!!</b>";
        obs1.style.color = "green";
    }

    else {
        obs1.style.color = "red";
        if (obs1.innerHTML == "<b>Q4. Wrong Answer :(</b>") {
            obs1.innerHTML = "<b>Q4. Wrong Again :(</b>";
        }
        else {
            obs1.innerHTML = "<b>Q4. Wrong Answer :(</b>";
        }
    }
}

function check5() {

    const obs1 = document.getElementById("observations1");
    const inp5 = document.getElementById("math-field-5").value;

    if (inp5.length == 0) {
        obs1.innerHTML = "<b>Q5.</b> Enter the answer."
        obs1.style.color = "black";
    }

    else if (inp5 === "1+α^2" || inp5 === "α^2+1") {
        obs1.innerHTML = "<b>Q5. Correct Answer!!!</b>";
        obs1.style.color = "green";
    }

    else {
        obs1.style.color = "red";
        if (obs1.innerHTML == "<b>Q5. Wrong Answer :(</b>") {
            obs1.innerHTML = "<b>Q5. Wrong Again :(</b>";
        }
        else {
            obs1.innerHTML = "<b>Q5. Wrong Answer :(</b>";
        }
    }
}

function check6() {

    const obs1 = document.getElementById("observations1");
    const inp6 = document.getElementById("math-field-6").value;

    if (inp6.length == 0) {
        obs1.innerHTML = "<b>Q6.</b> Enter the answer."
        obs1.style.color = "black";
    }

    else if (inp6 === "1+α+α^2" || inp6 === "1+α^2+α" || inp6 === "α+α^2+1"
        || inp6 === "α+1+α^2" || inp6 === "α^2+1+α" || inp6 === "α^2+α+1") {
        obs1.innerHTML = "<b>Q6. Correct Answer!!!</b>";
        obs1.style.color = "green";
    }

    else {
        obs1.style.color = "red";
        if (obs1.innerHTML == "<b>Q6. Wrong Answer :(</b>") {
            obs1.innerHTML = "<b>Q6. Wrong Again :(</b>";
        }
        else {
            obs1.innerHTML = "<b>Q6. Wrong Answer :(</b>";
        }
    }
}


function check7() {

    const obs1 = document.getElementById("observations1");
    const inp7 = document.getElementById("math-field-7").value;

    if (inp7.length == 0) {
        obs1.innerHTML = "<b>Q7.</b> Enter the answer."
        obs1.style.color = "black";
    }

    else if (inp7 === "1+α" || inp7 === "α+1") {
        obs1.innerHTML = "<b>Q7. Correct Answer!!!</b>";
        obs1.style.color = "green";
    }

    else {
        obs1.style.color = "red";
        if (obs1.innerHTML == "<b>Q7. Wrong Answer :(</b>") {
            obs1.innerHTML = "<b>Q7. Wrong Again :(</b>";
        }
        else {
            obs1.innerHTML = "<b>Q7. Wrong Answer :(</b>";
        }
    }
}

function check8() {

    const obs1 = document.getElementById("observations1");
    const inp8 = document.getElementById("math-field-8").value;

    if (inp8.length == 0) {
        obs1.innerHTML = "<b>Q8.</b> Enter the answer."
        obs1.style.color = "black";
    }

    else if (inp8 === "α+α^2" || inp8 === "α^2+α") {
        obs1.innerHTML = "<b>Q8. Correct Answer!!!</b>";
        obs1.style.color = "green";
    }

    else {
        obs1.style.color = "red";
        if (obs1.innerHTML == "<b>Q8. Wrong Answer :(</b>") {
            obs1.innerHTML = "<b>Q8. Wrong Again :(</b>";
        }
        else {
            obs1.innerHTML = "<b>Q8. Wrong Answer :(</b>";
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

    var forms = document.getElementsByTagName("form");
    for (var i = 0; i < 8; i++) {
        forms[i].reset();
    }

}

function page2() {

    const sec1 = document.getElementById("example1");
    const sec2 = document.getElementById("example2");
    const obs2 = document.getElementById("observations2");


    sec1.style.display = "none";
    sec2.style.display = "block";

    obs2.innerHTML = "";

    var forms = document.getElementsByTagName("form");
    for (var i = 8; i < forms.length; i++) {
        forms[i].reset();
    }

}


// Example-2

function confirm1() {

    const obs2 = document.getElementById("observations2");
    const inp1 = document.getElementById("m-field-1").value;

    if (inp1.length == 0) {
        obs2.innerHTML = "<b>Q1.</b> Enter the answer."
        obs2.style.color = "black";
    }

    else if (inp1 === "0") {
        obs2.innerHTML = "<b>Q1. Correct Answer!!!</b>";
        obs2.style.color = "green";
    }

    else {
        obs2.style.color = "red";
        if (obs2.innerHTML == "<b>Q1. Wrong Answer :(</b>") {
            obs2.innerHTML = "<b>Q1. Wrong Again :(</b>";
        }
        else {
            obs2.innerHTML = "<b>Q1. Wrong Answer :(</b>";
        }
    }

}

function confirm2() {

    const obs2 = document.getElementById("observations2");
    const inp2 = document.getElementById("m-field-2").value;

    if (inp2.length == 0) {
        obs2.innerHTML = "<b>Q2.</b> Enter the answer."
        obs2.style.color = "black";
    }

    else if (inp2 === "1") {
        obs2.innerHTML = "<b>Q2. Correct Answer!!!</b>";
        obs2.style.color = "green";
    }

    else {
        obs2.style.color = "red";
        if (obs2.innerHTML == "<b>Q2. Wrong Answer :(</b>") {
            obs2.innerHTML = "<b>Q2. Wrong Again :(</b>";
        }
        else {
            obs2.innerHTML = "<b>Q2. Wrong Answer :(</b>";
        }
    }

}

function confirm3() {

    const obs2 = document.getElementById("observations2");
    const inp3 = document.getElementById("m-field-3").value;

    if (inp3.length == 0) {
        obs2.innerHTML = "<b>Q3.</b> Enter the answer."
        obs2.style.color = "black";
    }

    else if (inp3 === "α") {
        obs2.innerHTML = "<b>Q3. Correct Answer!!!</b>";
        obs2.style.color = "green";
    }

    else {
        obs2.style.color = "red";
        if (obs2.innerHTML == "<b>Q3. Wrong Answer :(</b>") {
            obs2.innerHTML = "<b>Q3. Wrong Again :(</b>";
        }
        else {
            obs2.innerHTML = "<b>Q3. Wrong Answer :(</b>";
        }
    }

}

function confirm4() {

    const obs2 = document.getElementById("observations2");
    const inp4 = document.getElementById("m-field-4").value;

    if (inp4.length == 0) {
        obs2.innerHTML = "<b>Q4.</b> Enter the answer."
        obs2.style.color = "black";
    }

    else if (inp4 === "α^2") {
        obs2.innerHTML = "<b>Q4. Correct Answer!!!</b>";
        obs2.style.color = "green";
    }

    else {
        obs2.style.color = "red";
        if (obs2.innerHTML == "<b>Q4. Wrong Answer :(</b>") {
            obs2.innerHTML = "<b>Q4. Wrong Again :(</b>";
        }
        else {
            obs2.innerHTML = "<b>Q4. Wrong Answer :(</b>";
        }
    }

}

function confirm5() {

    const obs2 = document.getElementById("observations2");
    const inp5 = document.getElementById("m-field-5").value;

    if (inp5.length == 0) {
        obs2.innerHTML = "<b>Q5.</b> Enter the answer."
        obs2.style.color = "black";
    }

    else if (inp5 === "α^3") {
        obs2.innerHTML = "<b>Q5. Correct Answer!!!</b>";
        obs2.style.color = "green";
    }

    else {
        obs2.style.color = "red";
        if (obs2.innerHTML == "<b>Q5. Wrong Answer :(</b>") {
            obs2.innerHTML = "<b>Q5. Wrong Again :(</b>";
        }
        else {
            obs2.innerHTML = "<b>Q5. Wrong Answer :(</b>";
        }
    }

}

function confirm6() {

    const obs2 = document.getElementById("observations2");
    const inp6 = document.getElementById("m-field-6").value;

    if (inp6.length == 0) {
        obs2.innerHTML = "<b>Q6.</b> Enter the answer."
        obs2.style.color = "black";
    }

    else if (inp6 === "1+α" || inp6 === "α+1") {
        obs2.innerHTML = "<b>Q6. Correct Answer!!!</b>";
        obs2.style.color = "green";
    }

    else {
        obs2.style.color = "red";
        if (obs2.innerHTML == "<b>Q6. Wrong Answer :(</b>") {
            obs2.innerHTML = "<b>Q6. Wrong Again :(</b>";
        }
        else {
            obs2.innerHTML = "<b>Q6. Wrong Answer :(</b>";
        }
    }

}

function confirm7() {

    const obs2 = document.getElementById("observations2");
    const inp7 = document.getElementById("m-field-7").value;

    if (inp7.length == 0) {
        obs2.innerHTML = "<b>Q7.</b> Enter the answer."
        obs2.style.color = "black";
    }

    else if (inp7 === "α+α^2" || inp7 === "α^2+α") {
        obs2.innerHTML = "<b>Q7. Correct Answer!!!</b>";
        obs2.style.color = "green";
    }

    else {
        obs2.style.color = "red";
        if (obs2.innerHTML == "<b>Q7. Wrong Answer :(</b>") {
            obs2.innerHTML = "<b>Q7. Wrong Again :(</b>";
        }
        else {
            obs2.innerHTML = "<b>Q7. Wrong Answer :(</b>";
        }
    }

}

function confirm8() {

    const obs2 = document.getElementById("observations2");
    const inp8 = document.getElementById("m-field-8").value;

    if (inp8.length == 0) {
        obs2.innerHTML = "<b>Q8.</b> Enter the answer."
        obs2.style.color = "black";
    }

    else if (inp8 === "α^2+α^3" || inp8 === "α^3+α^2") {
        obs2.innerHTML = "<b>Q8. Correct Answer!!!</b>";
        obs2.style.color = "green";
    }

    else {
        obs2.style.color = "red";
        if (obs2.innerHTML == "<b>Q8. Wrong Answer :(</b>") {
            obs2.innerHTML = "<b>Q8. Wrong Again :(</b>";
        }
        else {
            obs2.innerHTML = "<b>Q8. Wrong Answer :(</b>";
        }
    }

}

function confirm9() {

    const obs2 = document.getElementById("observations2");
    const inp9 = document.getElementById("m-field-9").value;


    if (inp9.length == 0) {
        obs2.innerHTML = "<b>Q9.</b> Enter the answer."
        obs2.style.color = "black";
    }

    else if (inp9 == "1+α+α^3" || inp9 == "1+α^3+α"
        || inp9 == "α+1+α^3" || inp9 == "α+α^3+1"
        || inp9 == "α^3+α+1" || inp9 == "α^3+1+α") {
        obs2.innerHTML = "<b>Q9. Correct Answer!!!</b>";
        obs2.style.color = "green";
    }

    else {
        obs2.style.color = "red";
        if (obs2.innerHTML == "<b>Q9. Wrong Answer :(</b>") {
            obs2.innerHTML = "<b>Q9. Wrong Again :(</b>";
        }
        else {
            obs2.innerHTML = "<b>Q9. Wrong Answer :(</b>";
        }
    }

}

function confirm10() {

    const obs2 = document.getElementById("observations2");
    const inp10 = document.getElementById("m-field-10").value;

    if (inp10.length == 0) {
        obs2.innerHTML = "<b>Q10.</b> Enter the answer."
        obs2.style.color = "black";
    }

    else if (inp10 === "α^2+1" || inp10 === "1+α^2") {
        obs2.innerHTML = "<b>Q10. Correct Answer!!!</b>";
        obs2.style.color = "green";
    }

    else {
        obs2.style.color = "red";
        if (obs2.innerHTML == "<b>Q10. Wrong Answer :(</b>") {
            obs2.innerHTML = "<b>Q10. Wrong Again :(</b>";
        }
        else {
            obs2.innerHTML = "<b>Q10. Wrong Answer :(</b>";
        }
    }

}

function confirm11() {

    const obs2 = document.getElementById("observations2");
    const inp11 = document.getElementById("m-field-11").value;

    if (inp11.length == 0) {
        obs2.innerHTML = "<b>Q11.</b> Enter the answer."
        obs2.style.color = "black";
    }

    else if (inp11 === "α^3+α" || inp11 === "α+α^3") {
        obs2.innerHTML = "<b>Q11. Correct Answer!!!</b>";
        obs2.style.color = "green";
    }

    else {
        obs2.style.color = "red";
        if (obs2.innerHTML == "<b>Q11. Wrong Answer :(</b>") {
            obs2.innerHTML = "<b>Q11. Wrong Again :(</b>";
        }
        else {
            obs2.innerHTML = "<b>Q11. Wrong Answer :(</b>";
        }
    }

}

function confirm12() {

    const obs2 = document.getElementById("observations2");
    const inp12 = document.getElementById("m-field-12").value;

    if (inp12.length == 0) {
        obs2.innerHTML = "<b>Q12.</b> Enter the answer."
        obs2.style.color = "black";
    }

    else if (inp12 == "1+α+α^2" || inp12 == "1+α^2+α"
        || inp12 == "α+1+α^2" || inp12 == "α+α^2+1"
        || inp12 == "α^2+α+1" || inp12 == "α^2+1+α") {
        obs2.innerHTML = "<b>Q12. Correct Answer!!!</b>";
        obs2.style.color = "green";
    }

    else {
        obs2.style.color = "red";
        if (obs2.innerHTML == "<b>Q12. Wrong Answer :(</b>") {
            obs2.innerHTML = "<b>Q12. Wrong Again :(</b>";
        }
        else {
            obs2.innerHTML = "<b>Q12. Wrong Answer :(</b>";
        }
    }

}

function confirm13() {

    const obs2 = document.getElementById("observations2");
    const inp13 = document.getElementById("m-field-13").value;

    if (inp13.length == 0) {
        obs2.innerHTML = "<b>Q13.</b> Enter the answer."
        obs2.style.color = "black";
    }

    else if (inp13 == "α^3+α+α^2" || inp13 == "α^3+α^2+α"
        || inp13 == "α+α^3+α^2" || inp13 == "α+α^2+α^3"
        || inp13 == "α^2+α+α^3" || inp13 == "α^2+α^3+α") {
        obs2.innerHTML = "<b>Q13. Correct Answer!!!</b>";
        obs2.style.color = "green";
    }

    else {
        obs2.style.color = "red";
        if (obs2.innerHTML == "<b>Q13. Wrong Answer :(</b>") {
            obs2.innerHTML = "<b>Q13. Wrong Again :(</b>";
        }
        else {
            obs2.innerHTML = "<b>Q13. Wrong Answer :(</b>";
        }
    }

}

function confirm14() {

    const obs2 = document.getElementById("observations2");
    const inp14 = document.getElementById("m-field-14").value;

    if (inp14.length == 0) {
        obs2.innerHTML = "<b>Q14.</b> Enter the answer."
        obs2.style.color = "black";
    }

    else if (inp14 == "1+α+α^2+α^3" || inp14 == "1+α+α^3+α^2"
        || inp14 == "1+α^2+α+α^3" || inp14 == "1+α^2+α^3+α"
        || inp14 == "1+α^3+α+α^2" || inp14 == "1+α^3+α^2+α"
        || inp14 == "α+1+α^2+α^3" || inp14 == "α+1+α^3+α^2"
        || inp14 == "α+α^2+1+α^3" || inp14 == "α+α^2+α^3+1"
        || inp14 == "α+α^3+1+α^2" || inp14 == "α+α^3+α^2+1"
        || inp14 == "α^2+1+α+α^3" || inp14 == "α^2+1+α^3+α"
        || inp14 == "α^2+α+1+α^3" || inp14 == "α^2+α+α^3+1"
        || inp14 == "α^2+α^3+1+α" || inp14 == "α^2+α^3+α+1"
        || inp14 == "α^3+1+α^2+α" || inp14 == "α^3+1+α+α^2"
        || inp14 == "α^3+α^2+1+α" || inp14 == "α^3+α^2+α+1"
        || inp14 == "α^3+α+1+α^2" || inp14 == "α^3+α+α^2+1"
    ) {
        obs2.innerHTML = "<b>Q14. Correct Answer!!!</b>";
        obs2.style.color = "green";
    }

    else {
        obs2.style.color = "red";
        if (obs2.innerHTML == "<b>Q14. Wrong Answer :(</b>") {
            obs2.innerHTML = "<b>Q14. Wrong Again :(</b>";
        }
        else {
            obs2.innerHTML = "<b>Q14. Wrong Answer :(</b>";
        }
    }

}

function confirm15() {

    const obs2 = document.getElementById("observations2");
    const inp15 = document.getElementById("m-field-15").value;

    if (inp15.length == 0) {
        obs2.innerHTML = "<b>Q15.</b> Enter the answer."
        obs2.style.color = "black";
    }

    else if (inp15 == "α^3+1+α^2" || inp15 == "α^3+α^2+1"
        || inp15 == "1+α^3+α^2" || inp15 == "1+α^2+α^3"
        || inp15 == "α^2+1+α^3" || inp15 == "α^2+α^3+1") {
        obs2.innerHTML = "<b>Q15. Correct Answer!!!</b>";
        obs2.style.color = "green";
    }

    else {
        obs2.style.color = "red";
        if (obs2.innerHTML == "<b>Q15. Wrong Answer :(</b>") {
            obs2.innerHTML = "<b>Q15. Wrong Again :(</b>";
        }
        else {
            obs2.innerHTML = "<b>Q15. Wrong Answer :(</b>";
        }
    }

}

function confirm16() {

    const obs2 = document.getElementById("observations2");
    const inp16 = document.getElementById("m-field-16").value;

    if (inp16.length == 0) {
        obs2.innerHTML = "<b>Q16.</b> Enter the answer."
        obs2.style.color = "black";
    }

    else if (inp16 === "α^3+1" || inp16 === "1+α^3") {
        obs2.innerHTML = "<b>Q16. Correct Answer!!!</b>";
        obs2.style.color = "green";
    }

    else {
        obs2.style.color = "red";
        if (obs2.innerHTML == "<b>Q16. Wrong Answer :(</b>") {
            obs2.innerHTML = "<b>Q16. Wrong Again :(</b>";
        }
        else {
            obs2.innerHTML = "<b>Q16. Wrong Answer :(</b>";
        }
    }

}



