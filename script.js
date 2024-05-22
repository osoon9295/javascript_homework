// 문제 8

const user = {
  이름: "병수",
  나이: 20,
  주소: "시골",
};

// 1.
localStorage.setItem("user", JSON.stringify(user));
// 2.
console.log(JSON.parse(localStorage.getItem("user")));
// 3.
const user2 = JSON.parse(localStorage.getItem("user"));
const newUser = { ...user2, 나이: 30 };
// console.log(newAge);
localStorage.setItem("user", JSON.stringify(newUser));

// 4.
localStorage.removeItem("user");
console.log(JSON.parse(localStorage.getItem("user")));

// 문제 1

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => res.json())
  .then((data) => console.log(data));
