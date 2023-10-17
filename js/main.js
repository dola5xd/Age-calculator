let span_year = document.getElementById("year");
let span_month = document.getElementById("month");
let span_day = document.getElementById("day");

let in_year = document.querySelector(".years");
let in_month = document.querySelector(".months");
let in_day = document.querySelector(".days");

let year = new Date().getFullYear();
let month = new Date().getMonth() + 1;
let day = new Date().getDate();
let button = document.getElementById("btn");
console.log(year);
console.log(month);
console.log(day);

button.addEventListener("click", function (e) {
  e.preventDefault();
  if (in_year.value === "" && in_year.value.length > 4) {
    span_year.innerText = "--";
  } else if (in_month.value === "") {
    span_month.innerText = "--";
  } else if (in_day.value === "") {
    span_day.innerText = "--";
  }
  span_year.innerText = year - in_year.value;
  span_month.innerText = month - in_month.value;
  span_day.innerText = day - in_day.value;
});
