const list = [
  { name: "hot americano", price: 2000, shot: 2 },
  { name: "ice americano", price: 2500, shot: 2 },
  { name: "hot latte", price: 3000, shot: 2 },
  { name: "ice latte", price: 3500, shot: 2 },
  { name: "ice mocha", price: 3500, shot: 3 },
];

//1. 리스트에서 이름을 모두 대문자화 시키기!

const upper = (x) => {
  x.name = x.name.toUpperCase();
  return x;
};

const resultupper = list.map(upper);
console.log(resultupper);

//2. 리스트에서 가격을 인플레이션으로 10% 올리기!

const high = (x) => {
  x.price = x.price * 1.1;
  return x;
};

const highresult = list.map(high);
console.log(highresult);

//3. 리스트에서 샷을 투샷 추가하기

const plusshot = (x) => {
  x.shot = x.shot + 2;
  return x;
};

const plusresult = list.map(plusshot);
console.log(plusresult);

//4. price를 엔화를 적용한 yenprice  추가하기
const plusyen = (x) => {
  x.yenprice = x.price * 0.11;
  return x;
};

const yenpriceresult = list.map(plusyen);
console.log(yenpriceresult);
