var MQ = MathQuill.getInterface(2);

// First Example
var mFieldSpan1 = document.getElementById("m-field-1");
var mField1 = MQ.MathField(mFieldSpan1, { spaceBehavesLikeTab: true, });

var mFieldSpan2 = document.getElementById("m-field-2");
var mFieldSpan3 = document.getElementById("m-field-3");
var mFieldSpan4 = document.getElementById("m-field-4");
var mFieldSpan5 = document.getElementById("m-field-5");

function confirm1() {

    const obs1 = document.getElementById("observations1");
    const inp1 = MQ(mFieldSpan1).latex();

    if (inp1.length == 0) {
        obs1.innerHTML = "<b>R2.</b> Enter the answer."
        obs1.style.color = "black";
    }

    else if (inp1 == "x^2+x" || inp1 == "x+x^2") {
        obs1.innerHTML = "<b>R2. Correct Answer!!!</b>";
        obs1.style.color = "green";

        document.getElementById("submit1").setAttribute("disabled", true);
        document.getElementById("submit2").removeAttribute("disabled");

        MQ.MathField(mFieldSpan2, { spaceBehavesLikeTab: true, });
        MQ.MathField(mFieldSpan3, { spaceBehavesLikeTab: true, });
        MQ.MathField(mFieldSpan4, { spaceBehavesLikeTab: true, });
        MQ.MathField(mFieldSpan5, { spaceBehavesLikeTab: true, });


    }

    else {
        obs1.style.color = "red";
        if (obs1.innerHTML == "<b>R2. Wrong Answer :(</b>") {
            obs1.innerHTML = "<b>R2. Wrong Again :(</b>";
        }
        else {
            obs1.innerHTML = "<b>R2. Wrong Answer :(</b>";
        }
    }

}

function confirm2() {
    const obs1 = document.getElementById("observations1");
    const inp2 = MQ(mFieldSpan2).latex();
    const inp3 = MQ(mFieldSpan3).latex();
    const inp4 = MQ(mFieldSpan4).latex();
    const inp5 = MQ(mFieldSpan5).latex();

    if (inp2.length == "0" || inp3.length == "0" || inp4.length == "0" || inp5.length == "0") {
        obs1.innerHTML = "<b>R3.</b> Enter the answer."
        obs1.style.color = "black";
    }

    else if ((inp2 == "x^2+1" || inp2 == "1+x^2") && inp3 == "1" && (inp4 == "x^2+x" || inp4 == "x+x^2") && (inp5 == "1+x" || inp5 == "x+1")) {
        obs1.innerHTML = "<b>R3. Correct Answer!!!</b> <br> The GCD is x<sup>2</sup>+1";
        obs1.style.color = "green";
    }

    else {
        obs1.style.color = "red";
        if (obs1.innerHTML == "<b>R3. Wrong Answer :(</b>") {
            obs1.innerHTML = "<b>R3. Wrong Again :(</b>";
        }
        else {
            obs1.innerHTML = "<b>R3. Wrong Answer :(</b>";
        }
    }
}




// Second Example
var mathFieldSpan1 = document.getElementById("math-field-1");
var mathField1 = MQ.MathField(mathFieldSpan1, { spaceBehavesLikeTab: true, });

var mathFieldSpan2 = document.getElementById("math-field-2");
var mathFieldSpan3 = document.getElementById("math-field-3");
var mathFieldSpan4 = document.getElementById("math-field-4");
var mathFieldSpan5 = document.getElementById("math-field-5");
var mathFieldSpan6 = document.getElementById("math-field-6");
var mathFieldSpan7 = document.getElementById("math-field-7");
var mathFieldSpan8 = document.getElementById("math-field-8");
var mathFieldSpan9 = document.getElementById("math-field-9");


function check1() {

    const obs2 = document.getElementById("observations2");
    const inp1 = MQ(mathFieldSpan1).latex();

    if (inp1.length == 0) {
        obs2.innerHTML = "<b>R2.</b> Enter the answer."
        obs2.style.color = "black";
    }

    else if (inp1 === "x^3") {
        obs2.innerHTML = "<b>R2. Correct Answer!!!</b>";
        obs2.style.color = "green";

        document.getElementById("sub1").setAttribute("disabled", true);
        document.getElementById("sub2").removeAttribute("disabled");

        MQ.MathField(mathFieldSpan2, { spaceBehavesLikeTab: true, });
        MQ.MathField(mathFieldSpan3, { spaceBehavesLikeTab: true, });
        MQ.MathField(mathFieldSpan4, { spaceBehavesLikeTab: true, });
        MQ.MathField(mathFieldSpan5, { spaceBehavesLikeTab: true, });


    }

    else {
        obs2.style.color = "red";
        if (obs2.innerHTML == "<b>R2. Wrong Answer :(</b>") {
            obs2.innerHTML = "<b>R2. Wrong Again :(</b>";
        }
        else {
            obs2.innerHTML = "<b>R2. Wrong Answer :(</b>";
        }
    }

}

function check2() {
    const obs2 = document.getElementById("observations2");
    const inp2 = MQ(mathFieldSpan2).latex();
    const inp3 = MQ(mathFieldSpan3).latex();
    const inp4 = MQ(mathFieldSpan4).latex();
    const inp5 = MQ(mathFieldSpan5).latex();

    if (inp2.length == "0" || inp3.length == "0" || inp4.length == "0" || inp5.length == "0") {
        obs2.innerHTML = "<b>R3.</b> Enter all the fields."
        obs2.style.color = "black";
    }
    else if ((inp2 == "x^2+1" || inp2 == "1+x^2") && inp3 == "1" && inp4 == "x^3" && inp5 == "x") {
        obs2.innerHTML = "<b>R3. Correct Answer!!!</b>";
        obs2.style.color = "green";

        document.getElementById("sub2").setAttribute("disabled", true);
        document.getElementById("sub3").removeAttribute("disabled");

        MQ.MathField(mathFieldSpan6, { spaceBehavesLikeTab: true, });
        MQ.MathField(mathFieldSpan7, { spaceBehavesLikeTab: true, });
        MQ.MathField(mathFieldSpan8, { spaceBehavesLikeTab: true, });
        MQ.MathField(mathFieldSpan9, { spaceBehavesLikeTab: true, });
    }

    else {
        obs2.style.color = "red";
        if (obs2.innerHTML == "<b>R3. Wrong Answer :(</b>") {
            obs2.innerHTML = "<b>R3. Wrong Again :(</b>";
        }
        else {
            obs2.innerHTML = "<b>R3. Wrong Answer :(</b>";
        }
    }
}

function check3() {
    const obs2 = document.getElementById("observations2");
    const inp6 = MQ(mathFieldSpan6).latex();
    const inp7 = MQ(mathFieldSpan7).latex();
    const inp8 = MQ(mathFieldSpan8).latex();
    const inp9 = MQ(mathFieldSpan9).latex();

    if (inp6.length == "0" || inp7.length == "0" || inp8.length == "0" || inp9.length == "0") {
        obs2.innerHTML = "<b>R4.</b> Enter all the fields."
        obs2.style.color = "black";
    }
    else if ((inp6 == "x+1" || inp6 == "1+x") && inp7 == "x" && (inp8 == "1+x^4" || inp8 == "x^4+1") && (inp9 == "x+1" || inp9 == "1+x")) {
        obs2.innerHTML = "<b>R4. Correct Answer!!!</b> <br> The GCD is 1+x<sup>4</sup>";
        obs2.style.color = "green";

    }

    else {
        obs2.style.color = "red";
        if (obs2.innerHTML == "<b>R4. Wrong Answer :(</b>") {
            obs2.innerHTML = "<b>R4. Wrong Again :(</b>";
        }
        else {
            obs2.innerHTML = "<b>R4. Wrong Answer :(</b>";
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

    document.getElementById("m-field-1").innerHTML = "";
    document.getElementById("m-field-2").innerHTML = "";
    document.getElementById("m-field-3").innerHTML = "";
    document.getElementById("m-field-4").innerHTML = "";
    document.getElementById("m-field-5").innerHTML = "";

    MQ.MathField(mFieldSpan1, { spaceBehavesLikeTab: true, });

    document.getElementById("submit1").removeAttribute("disabled");
    document.getElementById("submit2").setAttribute("disabled", true);
}

function page2() {

    const sec1 = document.getElementById("example1");
    const sec2 = document.getElementById("example2");
    const obs2 = document.getElementById("observations2");

    sec1.style.display = "none";
    sec2.style.display = "block";

    obs2.innerHTML = "";

    document.getElementById("math-field-1").innerHTML = "";
    document.getElementById("math-field-2").innerHTML = "";
    document.getElementById("math-field-3").innerHTML = "";
    document.getElementById("math-field-4").innerHTML = "";
    document.getElementById("math-field-5").innerHTML = "";
    document.getElementById("math-field-6").innerHTML = "";
    document.getElementById("math-field-7").innerHTML = "";
    document.getElementById("math-field-8").innerHTML = "";
    document.getElementById("math-field-9").innerHTML = "";

    MQ.MathField(mathFieldSpan1, { spaceBehavesLikeTab: true, });
    
    document.getElementById("sub1").removeAttribute("disabled");
    document.getElementById("sub2").setAttribute("disabled", true);
    document.getElementById("sub3").setAttribute("disabled", true);
}





