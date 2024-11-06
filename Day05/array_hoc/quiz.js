// 1. 각각요소를 3배 해서 콘솔로 나타내기

const list = [1, 3, 5, 7, 9];
const multiply = (x) => {
  return x * 3;
};

const multiresult = list.map(multiply);
console.log(multiresult);

//2. 각각 요소를 더하기 100 해서 콘솔로 나타내기!

const add = (x) => x + 100;
const addresult = list.map(add);
console.log(addresult);

//3. 각각 요소를 6보다 작으면 두배 크면 세배해서 큰솔로 나타내기!

const compare = (x) => (x < 6 ? x * 2 : x * 3);

const compareresult = list.map(compare);
console.log(compareresult);

//4. 각각 요소를 3의 배수가 아니면 +10 맞으면 두배해서 큰솔로 나타내기!

const drainage = (x) => (x % 3 != 0 ? x + 10 : x * 3);

const drainageresult = list.map(drainage);
console.log(drainageresult);

const list1 = [10, 20, 30, 40, 50];

//1. 30보다 작으면 각 요소를 두배, 아니면 그냥 그대로

const change = (x) => (x < 30 ? x * 2 : x);

const changeresult = list1.map(change);
console.log(changeresult);

// 2. 30이면 "🍔" 로 바꾸고, 아니면 "🍕"로 바꾸기

const food = (x) => (x == 30 ? "🍔" : "🍕");
const foodresult = list1.map(food);
console.log(foodresult);
