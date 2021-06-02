var logo1 = document.querySelector("#logo-1");
var logo2 = document.querySelector("#logo-2");
var logo3 = document.querySelector("#logo-3");
var logo4 = document.querySelector("#logo-4");

var logod1 = document.querySelector("#logo1");
var logod2 = document.querySelector("#logo2");
var logod3 = document.querySelector("#logo3");
var logod4 = document.querySelector("#logo4");

function hover1() {
    logo1.style.display = 'flex'
};
function leave1() {
    logo1.style.display = 'none'
};
function hover2() {
    logo2.style.display = 'flex'
};
function leave2() {
    logo2.style.display = 'none'
};
function hover3() {
    logo3.style.display = 'flex'
};
function leave3() {
    logo3.style.display = 'none'
};
function hover4() {
    logo4.style.display = 'flex'
};
function leave4() {
    logo4.style.display = 'none'
};

logod1.addEventListener("mouseenter", hover1);
logod1.addEventListener("mouseleave", leave1);
logod2.addEventListener("mouseenter", hover2);
logod2.addEventListener("mouseleave", leave2);
logod3.addEventListener("mouseenter", hover3);
logod3.addEventListener("mouseleave", leave3);
logod4.addEventListener("mouseenter", hover4);
logod4.addEventListener("mouseleave", leave4);

console.log(logod1)