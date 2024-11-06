// const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//1.  짝수만 살리기
// const even = (x) => x % 2 == 0;
// list.filter(even);

//2. 5보다 크면 살리기

// const underfive = (x) => x > 5;
// list.filter(underfive);

//3. 각 수를 제곱을 한 다음에 50보다 작으면 살리기
// const square = (x) => x ** 2;
// const fifty = (x) => x <= 50;
// list.map(square).filter(fifty);

const fruits = ["apple", "banana", "kiwi", "melon", "watermelon", "grape"];

// 1.문자의 길이가 5글자 보다 큰 과일들만 살리기

const overfive = (x) => x.length > 5;
const answer1 = fruits.filter(overfive);
console.log(answer1);

//2. 알파벳 i 가 들어관 과일만 살리기
const ifilter = (x) => x.includes("i");
const answer2 = fruits.filter(ifilter);
console.log(answer2);

//3. melon이 들어간 과일만 살리기\

const melon = (x) => x.includes("melon");
const answer3 = fruits.filter(melon);
console.log(answer3);
