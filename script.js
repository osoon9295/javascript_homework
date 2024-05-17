document.querySelector("#container").addEventListener("click", function (e) {
  return e.target.classList.add("clicked");
});

function getSquare(number) {
  return number * number;
}

const result = getSquare(5);
console.log(result); // 25 출력 (5의 제곱)
