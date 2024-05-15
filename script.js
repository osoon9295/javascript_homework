const btn = document.querySelector(".btn");
const title = document.querySelector(".title");

btn.addEventListener("click", (e) => {
  title.innerHTML = "제목아니다";
});

function sum(num1, num2) {
  console.log(num1 + num2);
}

sum(5, 2);

function isEvenOrOdd(num) {
  console.log(num % 2 === 0 ? "짝수입니다" : "홀수입니다");
}

isEvenOrOdd(5);

const name = "이보영";
const age = 30;

console.log("이름:", name);
console.log("나이:", age);
