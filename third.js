const timer = document.querySelector("#counter").textContent;

let count = Number(timer);

const interval = setInterval(() => {
  if (count < 5) {
    count += 1;
    document.querySelector("#counter").textContent = count;
  } else {
    clearInterval(interval);
    console.log("종료");
  }
}, 1000);
