window.addEventListener("scroll", () => {
  console.log(scrollY);
});

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

setTimeout(() => {
  console.log("3초후에 출력되는 텍스트입니다.");
}, 3000);
