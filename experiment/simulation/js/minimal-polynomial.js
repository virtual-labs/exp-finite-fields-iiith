var flag1 = 0;

function click1(id) {

    const obs1 = document.getElementById("observations1");

    if (flag1 == 0) {
        const selected = document.getElementById(id)
        selected.style.background = "rgb(255, 0, 0)";

        if (id == "ex-1-left-1") {
            flag1 = 1;
        }

        else if (id == "ex-1-left-2") {
            flag1 = 2;
        }

        else if (id == "ex-1-left-3") {
            flag1 = 3;
        }

        else if (id == "ex-1-left-4") {
            flag1 = 4;
        }
        obs1.innerHTML = "You have selected the element(s) of the finite field. Now select the corresponding minimal polynomial."
        obs1.style.color = "black";
    }

    else {
        obs1.innerHTML = "Select the corresponding minimal polynomial.";
        obs1.style.color = "black";
    }

}

function click2(id) {

    const obs1 = document.getElementById("observations1");

    if (flag1 == 0) {
        obs1.innerHTML = "Select the element(s) of the finite field."
        obs1.style.color = "black";
    }

    else {
        const selected = document.getElementById(id);
        selected.style.background = "rgb(255, 0, 0)";

        const left1 = document.getElementById("ex-1-left-1");
        const left2 = document.getElementById("ex-1-left-2");
        const left3 = document.getElementById("ex-1-left-3");
        const left4 = document.getElementById("ex-1-left-4");

        const right1 = document.getElementById("ex-1-right-1");
        const right2 = document.getElementById("ex-1-right-2");
        const right3 = document.getElementById("ex-1-right-3");
        const right4 = document.getElementById("ex-1-right-4");


        if (flag1 == 1 && right2.style.backgroundColor == "rgb(255, 0, 0)") {
            obs1.innerHTML = "<b>Correct Answer!!!</b>";
            obs1.style.color = "green";

            flag1 = 0;

            left1.style.background = "green";
            right2.style.background = "green";

            left1.setAttribute("disabled", true);
            right2.setAttribute("disabled", true);
        }

        else if (flag1 == 2 && right4.style.backgroundColor == "rgb(255, 0, 0)") {
            obs1.innerHTML = "<b>Correct Answer!!!</b>";
            obs1.style.color = "green";

            flag1 = 0;

            left2.style.background = "green";
            right4.style.background = "green";

            left2.setAttribute("disabled", true);
            right4.setAttribute("disabled", true);
        }

        else if (flag1 == 3 && right1.style.backgroundColor == "rgb(255, 0, 0)") {
            obs1.innerHTML = "<b>Correct Answer!!!</b>";
            obs1.style.color = "green";

            flag1 = 0;

            left3.style.background = "green";
            right1.style.background = "green";

            left3.setAttribute("disabled", true);
            right1.setAttribute("disabled", true);
        }

        else if (flag1 == 4 && right3.style.backgroundColor == "rgb(255, 0, 0)") {
            obs1.innerHTML = "<b>Correct Answer!!!</b>";
            obs1.style.color = "green";

            flag1 = 0;

            left4.style.background = "green";
            right3.style.background = "green";

            left4.setAttribute("disabled", true);
            right3.setAttribute("disabled", true);
        }

        else {
            obs1.innerHTML = "<b>Wrong Answer :(</b> <br> Try again.";
            alert('Wrong Answer :(');
            obs1.style.color = "red";

            setTimeout(rightreset1, 1000);
        }

        if (right1.disabled == true && right2.disabled == true && right3.disabled == true && right4.disabled == true) {
            obs1.innerHTML = "<b>Correct Answer!!!</b> <br> You have successfully completed the matching."
        }

    }
}

function rightreset1() {
    const right1 = document.getElementById("ex-1-right-1");
    const right2 = document.getElementById("ex-1-right-2");
    const right3 = document.getElementById("ex-1-right-3");
    const right4 = document.getElementById("ex-1-right-4");

    if (right1.disabled != true) {
        right1.style.background = "rgb(100, 149, 237)";
    }

    if (right2.disabled != true) {
        right2.style.background = "rgb(100, 149, 237)";
    }

    if (right3.disabled != true) {
        right3.style.background = "rgb(100, 149, 237)";
    }

    if (right4.disabled != true) {
        right4.style.background = "rgb(100, 149, 237)";
    }

}

function page1() {

    const sec1 = document.getElementById("example1");
    const sec2 = document.getElementById("example2");
    const obs1 = document.getElementById("observations1");


    sec1.style.display = "block";
    sec2.style.display = "none";

    obs1.innerHTML = "";

    const left1 = document.getElementById("ex-1-left-1");
    const left2 = document.getElementById("ex-1-left-2");
    const left3 = document.getElementById("ex-1-left-3");
    const left4 = document.getElementById("ex-1-left-4");

    const right1 = document.getElementById("ex-1-right-1");
    const right2 = document.getElementById("ex-1-right-2");
    const right3 = document.getElementById("ex-1-right-3");
    const right4 = document.getElementById("ex-1-right-4");

    left1.style.background = "rgb(100, 149, 237)";
    left2.style.background = "rgb(100, 149, 237)";
    left3.style.background = "rgb(100, 149, 237)";
    left4.style.background = "rgb(100, 149, 237)";

    right1.style.background = "rgb(100, 149, 237)";
    right2.style.background = "rgb(100, 149, 237)";
    right3.style.background = "rgb(100, 149, 237)";
    right4.style.background = "rgb(100, 149, 237)";

    left1.removeAttribute("disabled");
    left2.removeAttribute("disabled");
    left3.removeAttribute("disabled");
    left4.removeAttribute("disabled");

    right1.removeAttribute("disabled");
    right2.removeAttribute("disabled");
    right3.removeAttribute("disabled");
    right4.removeAttribute("disabled");

    flag1 = 0;
}

function page2() {

    const sec1 = document.getElementById("example1");
    const sec2 = document.getElementById("example2");
    const obs2 = document.getElementById("observations2");


    sec1.style.display = "none";
    sec2.style.display = "block";

    obs2.innerHTML = "";

    const left1 = document.getElementById("ex-2-left-1");
    const left2 = document.getElementById("ex-2-left-2");
    const left3 = document.getElementById("ex-2-left-3");
    const left4 = document.getElementById("ex-2-left-4");
    const left5 = document.getElementById("ex-2-left-5");
    const left6 = document.getElementById("ex-2-left-6");

    const right1 = document.getElementById("ex-2-right-1");
    const right2 = document.getElementById("ex-2-right-2");
    const right3 = document.getElementById("ex-2-right-3");
    const right4 = document.getElementById("ex-2-right-4");
    const right5 = document.getElementById("ex-2-right-5");
    const right6 = document.getElementById("ex-2-right-6");

    left1.style.background = "rgb(100, 149, 237)";
    left2.style.background = "rgb(100, 149, 237)";
    left3.style.background = "rgb(100, 149, 237)";
    left4.style.background = "rgb(100, 149, 237)";
    left5.style.background = "rgb(100, 149, 237)";
    left6.style.background = "rgb(100, 149, 237)";

    right1.style.background = "rgb(100, 149, 237)";
    right2.style.background = "rgb(100, 149, 237)";
    right3.style.background = "rgb(100, 149, 237)";
    right4.style.background = "rgb(100, 149, 237)";
    right5.style.background = "rgb(100, 149, 237)";
    right6.style.background = "rgb(100, 149, 237)";

    left1.removeAttribute("disabled");
    left2.removeAttribute("disabled");
    left3.removeAttribute("disabled");
    left4.removeAttribute("disabled");
    left5.removeAttribute("disabled");
    left6.removeAttribute("disabled");

    right1.removeAttribute("disabled");
    right2.removeAttribute("disabled");
    right3.removeAttribute("disabled");
    right4.removeAttribute("disabled");
    right5.removeAttribute("disabled");
    right6.removeAttribute("disabled");

    flag2 = 0;
}

// Second Example

var flag2 = 0;

function click3(id) {

    const obs2 = document.getElementById("observations2");

    if (flag2 == 0) {
        const selected = document.getElementById(id)
        selected.style.background = "rgb(255, 0, 0)";

        if (id == "ex-2-left-1") {
            flag2 = 1;
        }

        else if (id == "ex-2-left-2") {
            flag2 = 2;
        }

        else if (id == "ex-2-left-3") {
            flag2 = 3;
        }

        else if (id == "ex-2-left-4") {
            flag2 = 4;
        }

        else if (id == "ex-2-left-5") {
            flag2 = 5;
        }

        else if (id == "ex-2-left-6") {
            flag2 = 6;
        }

        obs2.innerHTML = "You have selected the element(s) of the finite field. Now select the corresponding minimal polynomial."
        obs2.style.color = "black";
    }

    else {
        obs2.innerHTML = "Select the corresponding minimal polynomial.";
        obs2.style.color = "black";
    }

}

function click4(id) {

    const obs2 = document.getElementById("observations2");

    if (flag2 == 0) {
        obs2.innerHTML = "Select the element(s) of the finite field."
        obs2.style.color = "black";
    }

    else {
        const selected = document.getElementById(id);
        selected.style.background = "rgb(255, 0, 0)";

        const left1 = document.getElementById("ex-2-left-1");
        const left2 = document.getElementById("ex-2-left-2");
        const left3 = document.getElementById("ex-2-left-3");
        const left4 = document.getElementById("ex-2-left-4");
        const left5 = document.getElementById("ex-2-left-5");
        const left6 = document.getElementById("ex-2-left-6");

        const right1 = document.getElementById("ex-2-right-1");
        const right2 = document.getElementById("ex-2-right-2");
        const right3 = document.getElementById("ex-2-right-3");
        const right4 = document.getElementById("ex-2-right-4");
        const right5 = document.getElementById("ex-2-right-5");
        const right6 = document.getElementById("ex-2-right-6");

        if (flag2 == 1 && right5.style.backgroundColor == "rgb(255, 0, 0)") {
            obs2.innerHTML = "<b>Correct Answer!!!</b>";
            obs2.style.color = "green";

            flag2 = 0;

            left1.style.background = "green";
            right5.style.background = "green";

            left1.setAttribute("disabled", true);
            right5.setAttribute("disabled", true);
        }

        else if (flag2 == 2 && right3.style.backgroundColor == "rgb(255, 0, 0)") {
            obs2.innerHTML = "<b>Correct Answer!!!</b>";
            obs2.style.color = "green";

            flag2 = 0;

            left2.style.background = "green";
            right3.style.background = "green";

            left2.setAttribute("disabled", true);
            right3.setAttribute("disabled", true);
        }

        else if (flag2 == 3 && right4.style.backgroundColor == "rgb(255, 0, 0)") {
            obs2.innerHTML = "<b>Correct Answer!!!</b>";
            obs2.style.color = "green";

            flag2 = 0;

            left3.style.background = "green";
            right4.style.background = "green";

            left3.setAttribute("disabled", true);
            right4.setAttribute("disabled", true);
        }

        else if (flag2 == 4 && right2.style.backgroundColor == "rgb(255, 0, 0)") {
            obs2.innerHTML = "<b>Correct Answer!!!</b>";
            obs2.style.color = "green";

            flag2 = 0;

            left4.style.background = "green";
            right2.style.background = "green";

            left4.setAttribute("disabled", true);
            right2.setAttribute("disabled", true);
        }

        else if (flag2 == 5 && right6.style.backgroundColor == "rgb(255, 0, 0)") {
            obs2.innerHTML = "<b>Correct Answer!!!</b>";
            obs2.style.color = "green";

            flag2 = 0;

            left5.style.background = "green";
            right6.style.background = "green";

            left5.setAttribute("disabled", true);
            right6.setAttribute("disabled", true);
        }

        else if (flag2 == 6 && right1.style.backgroundColor == "rgb(255, 0, 0)") {
            obs2.innerHTML = "<b>Correct Answer!!!</b>";
            obs2.style.color = "green";

            flag2 = 0;

            left6.style.background = "green";
            right1.style.background = "green";

            left6.setAttribute("disabled", true);
            right1.setAttribute("disabled", true);
        }

        else {
            obs2.innerHTML = "<b>Wrong Answer :(</b> <br> Try again.";
            alert('Wrong Answer :(');
            obs2.style.color = "red";

            setTimeout(rightreset2, 1000);
        }

        if (right1.disabled == true && right2.disabled == true && right3.disabled == true
            && right4.disabled == true && right5.disabled == true && right6.disabled == true) {
            obs2.innerHTML = "<b>Correct Answer!!!</b> <br> You have successfully completed the matching."
        }

    }
}

function rightreset2() {
    const right1 = document.getElementById("ex-2-right-1");
    const right2 = document.getElementById("ex-2-right-2");
    const right3 = document.getElementById("ex-2-right-3");
    const right4 = document.getElementById("ex-2-right-4");
    const right5 = document.getElementById("ex-2-right-5");
    const right6 = document.getElementById("ex-2-right-6");

    if (right1.disabled != true) {
        right1.style.background = "rgb(100, 149, 237)";
    }

    if (right2.disabled != true) {
        right2.style.background = "rgb(100, 149, 237)";
    }

    if (right3.disabled != true) {
        right3.style.background = "rgb(100, 149, 237)";
    }

    if (right4.disabled != true) {
        right4.style.background = "rgb(100, 149, 237)";
    }

    if (right5.disabled != true) {
        right5.style.background = "rgb(100, 149, 237)";
    }

    if (right6.disabled != true) {
        right6.style.background = "rgb(100, 149, 237)";
    }

}

