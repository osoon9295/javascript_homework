// 문제 1 *
const people = [
  { 이름: "철수", 나이: 19, 성별: "남" },
  { 이름: "짱구", 나이: 20, 성별: "남" },
  { 이름: "유리", 나이: 21, 성별: "여" },
];

console.log(people);

// 문제 2 **
const peopleContainer = document.querySelector(".people-container");

people.forEach((person) => {
  const html = `<div>
                <h2>${person.이름}</h2>
                <p>${person.나이}</p>
                <p>${person.성별}</p>
                </div>`;
  peopleContainer.insertAdjacentHTML("beforeend", html);
});

// 문제 3 *
const female = people.find((person) => person.성별 === "여");

console.log(female);

// 문제 4 *
const male = people.filter((person) => person.성별 === "남");

console.log(male);

// 문제 5 **
const after10years = people.map((person) => {
  return { 이름: person.이름, 나이: person.나이 + 10, 성별: person.성별 };
});

console.log("after10years==>", after10years);
console.log("people==>", people);

// 문제 6 ***
const sortedArray = [...people];

sortedArray.sort((a, b) => b.나이 - a.나이);

console.log("sortedArray==>", sortedArray);
console.log("people==>", people);

// 문제 7 ***
const user = {
  이름: "병수",
  나이: 20,
  주소: "시골",
};

// console.log(({ 이름, 나이, 주소 } = user));
// 또는

const { 이름, 나이, 주소 } = user;

console.log({ 이름 });
console.log({ 나이 });
console.log({ 주소 });
