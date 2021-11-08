let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let myForm = document.getElementById("myForm");
let myForm2 = document.getElementById("myForm2");
let myText = document.getElementById("myText");




function switchToBranch() {
    myForm2.style.display = "block";
    myForm.style.display = "none";
    btn2.style.backgroundColor = "#0646A2";
    btn2.style.color = "#ffffff";
    btn1.style.backgroundColor = "#ffffff";
    btn1.style.color = "#0646A2";
    btn1.style.border = "1px solid #0646A2";
    myText.innerHTML = "Branch";
}

function switchToAdmin() {
    myForm2.style.display = "none";
    myForm.style.display = "block";
    btn1.style.backgroundColor = "#0646A2";
    btn1.style.color = "#ffffff";
    btn2.style.border = "1px solid #0646A2";
    btn2.style.backgroundColor = "#ffffff";
    btn2.style.color = "#0646A2";
    myText.innerHTML = "Admin";
}

btn1.addEventListener("click", switchToAdmin);


btn2.addEventListener("click", switchToBranch);

