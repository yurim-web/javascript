const list = [1, 3, 5, 7, 9];

// map : 요소들 바꾸기!

const plusFive = (x) => {
  return x + 5;
};

const a = list.map(plusFive);
console.log(a);

//filter : 요소 걸르기!

const underFive = (x) => x < 5;
list.filter(underFive); // [1,3]

// 3의배수만 살리기

const triple = (x) => x % 3 == 0;
list.filter(triple);

// everu & some = 요소가 모두 있는지 & 요소가 하나라도 있는지 물어보기

const over5 = (x) => x > 5;
list.every(over5); //false
list.some(over5); //true
