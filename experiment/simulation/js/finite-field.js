var MQ = MathQuill.getInterface(2);

var mathFieldSpan1 = document.getElementById("math-field-1");
var mathField1 = MQ.MathField(mathFieldSpan1, { spaceBehavesLikeTab: true, });

var mathFieldSpan2 = document.getElementById("math-field-2");
var mathField2 = MQ.MathField(mathFieldSpan2, { spaceBehavesLikeTab: true, });

var mathFieldSpan3 = document.getElementById("math-field-3");
var mathField3 = MQ.MathField(mathFieldSpan3, { spaceBehavesLikeTab: true, });

var mathFieldSpan4 = document.getElementById("math-field-4");
var mathField4 = MQ.MathField(mathFieldSpan4, { spaceBehavesLikeTab: true, });

var mathFieldSpan5 = document.getElementById("math-field-5");
var mathField5 = MQ.MathField(mathFieldSpan5, { spaceBehavesLikeTab: true, });

var mathFieldSpan6 = document.getElementById("math-field-6");
var mathField6 = MQ.MathField(mathFieldSpan6, { spaceBehavesLikeTab: true, });

var mathFieldSpan7 = document.getElementById("math-field-7");
var mathField7 = MQ.MathField(mathFieldSpan7, { spaceBehavesLikeTab: true, });

var mathFieldSpan8 = document.getElementById("math-field-8");
var mathField8 = MQ.MathField(mathFieldSpan8, { spaceBehavesLikeTab: true, });

function check1() {

    const obs1 = document.getElementById("observations1");
    const inp1 = MQ(mathFieldSpan1).latex();

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
    const inp2 = MQ(mathFieldSpan2).latex();

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
    const inp3 = MQ(mathFieldSpan3).latex();

    if (inp3.length == 0) {
        obs1.innerHTML = "<b>Q3.</b> Enter the answer."
        obs1.style.color = "black";
    }

    else if (inp3 === "\\alpha") {
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
    const inp4 = MQ(mathFieldSpan4).latex();

    if (inp4.length == 0) {
        obs1.innerHTML = "<b>Q4.</b> Enter the answer."
        obs1.style.color = "black";
    }

    else if (inp4 === "\\alpha^2") {
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
    const inp5 = MQ(mathFieldSpan5).latex();

    if (inp5.length == 0) {
        obs1.innerHTML = "<b>Q5.</b> Enter the answer."
        obs1.style.color = "black";
    }

    else if (inp5 === "1+\\alpha^2" || inp5 === "\\alpha^2+1") {
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
    const inp6 = MQ(mathFieldSpan6).latex();

    if (inp6.length == 0) {
        obs1.innerHTML = "<b>Q6.</b> Enter the answer."
        obs1.style.color = "black";
    }

    else if (inp6 === "1+\\alpha+\\alpha^2" || inp6 === "1+\\alpha^2+\\alpha" || inp6 === "\\alpha+\\alpha^2+1"
        || inp6 === "\\alpha+1+\\alpha^2" || inp6 === "\\alpha^2+1+\\alpha" || inp6 === "\\alpha^2+\\alpha+1") {
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
    const inp7 = MQ(mathFieldSpan7).latex();

    if (inp7.length == 0) {
        obs1.innerHTML = "<b>Q7.</b> Enter the answer."
        obs1.style.color = "black";
    }

    else if (inp7 === "1+\\alpha" || inp7 === "\\alpha+1") {
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
    const inp8 = MQ(mathFieldSpan8).latex();

    if (inp8.length == 0) {
        obs1.innerHTML = "<b>Q8.</b> Enter the answer."
        obs1.style.color = "black";
    }

    else if (inp8 === "\\alpha+\\alpha^2" || inp8 === "\\alpha^2+\\alpha") {
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

    document.getElementById("math-field-1").innerHTML = "";
    document.getElementById("math-field-2").innerHTML = "";
    document.getElementById("math-field-3").innerHTML = "";
    document.getElementById("math-field-4").innerHTML = "";
    document.getElementById("math-field-5").innerHTML = "";
    document.getElementById("math-field-6").innerHTML = "";
    document.getElementById("math-field-7").innerHTML = "";
    document.getElementById("math-field-8").innerHTML = "";

    var mathFieldSpan1 = document.getElementById("math-field-1");
    MQ.MathField(mathFieldSpan1, { spaceBehavesLikeTab: true, });

    var mathFieldSpan2 = document.getElementById("math-field-2");
    MQ.MathField(mathFieldSpan2, { spaceBehavesLikeTab: true, });

    var mathFieldSpan3 = document.getElementById("math-field-3");
    MQ.MathField(mathFieldSpan3, { spaceBehavesLikeTab: true, });

    var mathFieldSpan4 = document.getElementById("math-field-4");
    MQ.MathField(mathFieldSpan4, { spaceBehavesLikeTab: true, });

    var mathFieldSpan5 = document.getElementById("math-field-5");
    MQ.MathField(mathFieldSpan5, { spaceBehavesLikeTab: true, });

    var mathFieldSpan6 = document.getElementById("math-field-6");
    MQ.MathField(mathFieldSpan6, { spaceBehavesLikeTab: true, });

    var mathFieldSpan7 = document.getElementById("math-field-7");
    MQ.MathField(mathFieldSpan7, { spaceBehavesLikeTab: true, });

    var mathFieldSpan8 = document.getElementById("math-field-8");
    MQ.MathField(mathFieldSpan8, { spaceBehavesLikeTab: true, });
}

function page2() {

    const sec1 = document.getElementById("example1");
    const sec2 = document.getElementById("example2");
    const obs2 = document.getElementById("observations2");


    sec1.style.display = "none";
    sec2.style.display = "block";

    obs2.innerHTML = "";

    document.getElementById("m-field-1").innerHTML = "";
    document.getElementById("m-field-2").innerHTML = "";
    document.getElementById("m-field-3").innerHTML = "";
    document.getElementById("m-field-4").innerHTML = "";
    document.getElementById("m-field-5").innerHTML = "";
    document.getElementById("m-field-6").innerHTML = "";
    document.getElementById("m-field-7").innerHTML = "";
    document.getElementById("m-field-8").innerHTML = "";
    document.getElementById("m-field-9").innerHTML = "";
    document.getElementById("m-field-10").innerHTML = "";
    document.getElementById("m-field-11").innerHTML = "";
    document.getElementById("m-field-12").innerHTML = "";
    document.getElementById("m-field-13").innerHTML = "";
    document.getElementById("m-field-14").innerHTML = "";
    document.getElementById("m-field-15").innerHTML = "";
    document.getElementById("m-field-16").innerHTML = "";

    var mFieldSpan1 = document.getElementById("m-field-1");
    MQ.MathField(mFieldSpan1, { spaceBehavesLikeTab: true, });

    var mFieldSpan2 = document.getElementById("m-field-2");
    MQ.MathField(mFieldSpan2, { spaceBehavesLikeTab: true, });

    var mFieldSpan3 = document.getElementById("m-field-3");
    MQ.MathField(mFieldSpan3, { spaceBehavesLikeTab: true, });

    var mFieldSpan4 = document.getElementById("m-field-4");
    MQ.MathField(mFieldSpan4, { spaceBehavesLikeTab: true, });

    var mFieldSpan5 = document.getElementById("m-field-5");
    MQ.MathField(mFieldSpan5, { spaceBehavesLikeTab: true, });

    var mFieldSpan6 = document.getElementById("m-field-6");
    MQ.MathField(mFieldSpan6, { spaceBehavesLikeTab: true, });

    var mFieldSpan7 = document.getElementById("m-field-7");
    MQ.MathField(mFieldSpan7, { spaceBehavesLikeTab: true, });

    var mFieldSpan8 = document.getElementById("m-field-8");
    MQ.MathField(mFieldSpan8, { spaceBehavesLikeTab: true, });

    var mFieldSpan9 = document.getElementById("m-field-9");
    MQ.MathField(mFieldSpan9, { spaceBehavesLikeTab: true, });

    var mFieldSpan10 = document.getElementById("m-field-10");
    MQ.MathField(mFieldSpan10, { spaceBehavesLikeTab: true, });

    var mFieldSpan11 = document.getElementById("m-field-11");
    MQ.MathField(mFieldSpan11, { spaceBehavesLikeTab: true, });

    var mFieldSpan12 = document.getElementById("m-field-12");
    MQ.MathField(mFieldSpan12, { spaceBehavesLikeTab: true, });

    var mFieldSpan13 = document.getElementById("m-field-13");
    MQ.MathField(mFieldSpan13, { spaceBehavesLikeTab: true, });

    var mFieldSpan14 = document.getElementById("m-field-14");
    MQ.MathField(mFieldSpan14, { spaceBehavesLikeTab: true, });

    var mFieldSpan15 = document.getElementById("m-field-15");
    MQ.MathField(mFieldSpan15, { spaceBehavesLikeTab: true, });

    var mFieldSpan16 = document.getElementById("m-field-16");
    MQ.MathField(mFieldSpan16, { spaceBehavesLikeTab: true, });

}


// Example-2

var mFieldSpan1 = document.getElementById("m-field-1");
var mField1 = MQ.MathField(mFieldSpan1, { spaceBehavesLikeTab: true, });

var mFieldSpan2 = document.getElementById("m-field-2");
var mField2 = MQ.MathField(mFieldSpan2, { spaceBehavesLikeTab: true, });

var mFieldSpan3 = document.getElementById("m-field-3");
var mField3 = MQ.MathField(mFieldSpan3, { spaceBehavesLikeTab: true, });

var mFieldSpan4 = document.getElementById("m-field-4");
var mField4 = MQ.MathField(mFieldSpan4, { spaceBehavesLikeTab: true, });

var mFieldSpan5 = document.getElementById("m-field-5");
var mField5 = MQ.MathField(mFieldSpan5, { spaceBehavesLikeTab: true, });

var mFieldSpan6 = document.getElementById("m-field-6");
var mField6 = MQ.MathField(mFieldSpan6, { spaceBehavesLikeTab: true, });

var mFieldSpan7 = document.getElementById("m-field-7");
var mField7 = MQ.MathField(mFieldSpan7, { spaceBehavesLikeTab: true, });

var mFieldSpan8 = document.getElementById("m-field-8");
var mField8 = MQ.MathField(mFieldSpan8, { spaceBehavesLikeTab: true, });

var mFieldSpan9 = document.getElementById("m-field-9");
var mField9 = MQ.MathField(mFieldSpan9, { spaceBehavesLikeTab: true, });

var mFieldSpan10 = document.getElementById("m-field-10");
var mField10 = MQ.MathField(mFieldSpan10, { spaceBehavesLikeTab: true, });

var mFieldSpan11 = document.getElementById("m-field-11");
var mField11 = MQ.MathField(mFieldSpan11, { spaceBehavesLikeTab: true, });

var mFieldSpan12 = document.getElementById("m-field-12");
var mField12 = MQ.MathField(mFieldSpan12, { spaceBehavesLikeTab: true, });

var mFieldSpan13 = document.getElementById("m-field-13");
var mField13 = MQ.MathField(mFieldSpan13, { spaceBehavesLikeTab: true, });

var mFieldSpan14 = document.getElementById("m-field-14");
var mField14 = MQ.MathField(mFieldSpan14, { spaceBehavesLikeTab: true, });

var mFieldSpan15 = document.getElementById("m-field-15");
var mField15 = MQ.MathField(mFieldSpan15, { spaceBehavesLikeTab: true, });

var mFieldSpan16 = document.getElementById("m-field-16");
var mField16 = MQ.MathField(mFieldSpan16, { spaceBehavesLikeTab: true, });

function confirm1() {

    const obs2 = document.getElementById("observations2");
    const inp1 = MQ(mFieldSpan1).latex();

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
    const inp2 = MQ(mFieldSpan2).latex();

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
    const inp3 = MQ(mFieldSpan3).latex();

    if (inp3.length == 0) {
        obs2.innerHTML = "<b>Q3.</b> Enter the answer."
        obs2.style.color = "black";
    }

    else if (inp3 === "\\alpha") {
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
    const inp4 = MQ(mFieldSpan4).latex();

    if (inp4.length == 0) {
        obs2.innerHTML = "<b>Q4.</b> Enter the answer."
        obs2.style.color = "black";
    }

    else if (inp4 === "\\alpha^2") {
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
    const inp5 = MQ(mFieldSpan5).latex();

    if (inp5.length == 0) {
        obs2.innerHTML = "<b>Q5.</b> Enter the answer."
        obs2.style.color = "black";
    }

    else if (inp5 === "\\alpha^3") {
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
    const inp6 = MQ(mFieldSpan6).latex();

    if (inp6.length == 0) {
        obs2.innerHTML = "<b>Q6.</b> Enter the answer."
        obs2.style.color = "black";
    }

    else if (inp6 === "1+\\alpha" || inp6 === "\\alpha+1") {
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
    const inp7 = MQ(mFieldSpan7).latex();

    if (inp7.length == 0) {
        obs2.innerHTML = "<b>Q7.</b> Enter the answer."
        obs2.style.color = "black";
    }

    else if (inp7 === "\\alpha+\\alpha^2" || inp7 === "\\alpha^2+\\alpha") {
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
    const inp8 = MQ(mFieldSpan8).latex();

    if (inp8.length == 0) {
        obs2.innerHTML = "<b>Q8.</b> Enter the answer."
        obs2.style.color = "black";
    }

    else if (inp8 === "\\alpha^2+\\alpha^3" || inp8 === "\\alpha^3+\\alpha^2") {
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

// For four use this
// const plus=inp9.replace(/[^+]/g, "").length; //Number of occurences of plus symbol
// const one=inp9.replace(/[^1]/g, "").length; //Number of occurences of 1
// const alpha = (inp9.match(/\\alpha/g) || []).length;
// const alpha2 = (inp9.match(/\\alpha\^2/g) || []).length;
// const alpha3 = (inp9.match(/\\alpha\^3/g) || []).length;

function confirm9() {

    const obs2 = document.getElementById("observations2");
    const inp9 = MQ(mFieldSpan9).latex();



    if (inp9.length == 0) {
        obs2.innerHTML = "<b>Q9.</b> Enter the answer."
        obs2.style.color = "black";
    }

    else if (inp9 == "1+\\alpha+\\alpha^3" || inp9 == "1+\\alpha^3+\\alpha"
        || inp9 == "\\alpha+1+\\alpha^3" || inp9 == "\\alpha+\\alpha^3+1"
        || inp9 == "\\alpha^3+\\alpha+1" || inp9 == "\\alpha^3+1+\\alpha") {
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
    const inp10 = MQ(mFieldSpan10).latex();

    if (inp10.length == 0) {
        obs2.innerHTML = "<b>Q10.</b> Enter the answer."
        obs2.style.color = "black";
    }

    else if (inp10 === "\\alpha^2+1" || inp10 === "1+\\alpha^2") {
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
    const inp11 = MQ(mFieldSpan11).latex();

    if (inp11.length == 0) {
        obs2.innerHTML = "<b>Q11.</b> Enter the answer."
        obs2.style.color = "black";
    }

    else if (inp11 === "\\alpha^3+\\alpha" || inp11 === "\\alpha+\\alpha^3") {
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
    const inp12 = MQ(mFieldSpan12).latex();

    if (inp12.length == 0) {
        obs2.innerHTML = "<b>Q12.</b> Enter the answer."
        obs2.style.color = "black";
    }

    else if (inp12 == "1+\\alpha+\\alpha^2" || inp12 == "1+\\alpha^2+\\alpha"
        || inp12 == "\\alpha+1+\\alpha^2" || inp12 == "\\alpha+\\alpha^2+1"
        || inp12 == "\\alpha^2+\\alpha+1" || inp12 == "\\alpha^2+1+\\alpha") {
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
    const inp13 = MQ(mFieldSpan13).latex();

    if (inp13.length == 0) {
        obs2.innerHTML = "<b>Q13.</b> Enter the answer."
        obs2.style.color = "black";
    }

    else if (inp13 == "\\alpha^3+\\alpha+\\alpha^2" || inp13 == "\\alpha^3+\\alpha^2+\\alpha"
        || inp13 == "\\alpha+\\alpha^3+\\alpha^2" || inp13 == "\\alpha+\\alpha^2+\\alpha^3"
        || inp13 == "\\alpha^2+\\alpha+\\alpha^3" || inp13 == "\\alpha^2+\\alpha^3+\\alpha") {
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
    const inp14 = MQ(mFieldSpan14).latex();

    if (inp14.length == 0) {
        obs2.innerHTML = "<b>Q14.</b> Enter the answer."
        obs2.style.color = "black";
    }

    else if (inp14 == "1+\\alpha+\\alpha^2+\\alpha^3" || inp14 == "1+\\alpha+\\alpha^3+\\alpha^2"
        || inp14 == "1+\\alpha^2+\\alpha+\\alpha^3" || inp14 == "1+\\alpha^2+\\alpha^3+\\alpha"
        || inp14 == "1+\\alpha^3+\\alpha+\\alpha^2" || inp14 == "1+\\alpha^3+\\alpha^2+\\alpha" 
        || inp14 == "\\alpha+1+\\alpha^2+\\alpha^3" || inp14 == "\\alpha+1+\\alpha^3+\\alpha^2"
        || inp14 == "\\alpha+\\alpha^2+1+\\alpha^3" || inp14 == "\\alpha+\\alpha^2+\\alpha^3+1"
        || inp14 == "\\alpha+\\alpha^3+1+\\alpha^2" || inp14 == "\\alpha+\\alpha^3+\\alpha^2+1" 
        || inp14 == "\\alpha^2+1+\\alpha+\\alpha^3" || inp14 == "\\alpha^2+1+\\alpha^3+\\alpha"
        || inp14 == "\\alpha^2+\\alpha+1+\\alpha^3" || inp14 == "\\alpha^2+\\alpha+\\alpha^3+1"
        || inp14 == "\\alpha^2+\\alpha^3+1+\\alpha" || inp14 == "\\alpha^2+\\alpha^3+\\alpha+1"
        || inp14 == "\\alpha^3+1+\\alpha^2+\\alpha" || inp14 == "\\alpha^3+1+\\alpha+\\alpha^2"
        || inp14 == "\\alpha^3+\\alpha^2+1+\\alpha" || inp14 == "\\alpha^3+\\alpha^2+\\alpha+1"
        || inp14 == "\\alpha^3+\\alpha+1+\\alpha^2" || inp14 == "\\alpha^3+\\alpha+\\alpha^2+1"  
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
    const inp15 = MQ(mFieldSpan15).latex();

    if (inp15.length == 0) {
        obs2.innerHTML = "<b>Q15.</b> Enter the answer."
        obs2.style.color = "black";
    }

    else if (inp15 == "\\alpha^3+1+\\alpha^2" || inp15 == "\\alpha^3+\\alpha^2+1"
        || inp15 == "1+\\alpha^3+\\alpha^2" || inp15 == "1+\\alpha^2+\\alpha^3"
        || inp15 == "\\alpha^2+1+\\alpha^3" || inp15 == "\\alpha^2+\\alpha^3+1") {
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
    const inp16 = MQ(mFieldSpan16).latex();

    if (inp16.length == 0) {
        obs2.innerHTML = "<b>Q16.</b> Enter the answer."
        obs2.style.color = "black";
    }

    else if (inp16 === "\\alpha^3+1" || inp16 === "1+\\alpha^3") {
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



