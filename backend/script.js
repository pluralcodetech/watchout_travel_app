let allBooking = document.getElementById("allBooking");
let completed = document.getElementById("completed");
let pending = document.getElementById("pending");
let cancelled = document.getElementById("cancelled");



let t1 = document.querySelector(".t1");
let t2 = document.querySelector(".t2");
let t3 = document.querySelector(".t3");
let t4 = document.querySelector(".t4");

function showCompleted() {
    t2.style.display = "block";
    t1.style.display = "none";
    t3.style.display = "none";
    t4.style.display = "none";
    allBooking.style.fontWeight = "normal";
    pending.style.fontWeight = "normal";
    cancelled.style.fontWeight = "normal";
    completed.style.fontWeight = "900";
}

completed.addEventListener("click", showCompleted);

function showPending() {
    t2.style.display = "none";
    t1.style.display = "none";
    t3.style.display = "block";
    t4.style.display = "none";
    allBooking.style.fontWeight = "normal";
    pending.style.fontWeight = "900";
    cancelled.style.fontWeight = "normal";
    completed.style.fontWeight = "normal";
}

pending.addEventListener("click", showPending);

function showCancelled() {
    t2.style.display = "none";
    t1.style.display = "none";
    t3.style.display = "none";
    t4.style.display = "block";
    allBooking.style.fontWeight = "normal";
    pending.style.fontWeight = "normal";
    cancelled.style.fontWeight = "900";
    completed.style.fontWeight = "normal";
}

cancelled.addEventListener("click", showCancelled);

function showAll() {
    t2.style.display = "none";
    t1.style.display = "block";
    t3.style.display = "none";
    t4.style.display = "none";
    allBooking.style.fontWeight = "900";
    pending.style.fontWeight = "normal";
    cancelled.style.fontWeight = "normal";
    completed.style.fontWeight = "normal";
}

allBooking.addEventListener("click", showAll);







