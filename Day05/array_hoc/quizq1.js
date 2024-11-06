const fruits = ["orange", "strawberry", "melon", "peach", "pineapple"];

//1. 각 요소를 문자의길이로 바꾸기

const length = (x) => x.length;

const lengthresult = fruits.map(length);
console.log(lengthresult);

//2. 각 요소를 대문자화 시키기

const upper = (x) => x.toUpperCase();

const upperresult = fruits.map(upper);
console.log(upperresult);

//3. 각 요소에서 문자의 길이가 5글자 이하이면

const message = (x) => (x.length < 6 ? "🍎" : "🍋");

const messageresult = fruits.map(message);
console.log(messageresult);
