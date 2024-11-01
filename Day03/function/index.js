// 함수특) 입력 & 출력

function fly(x) {
  console.log("비행기 이륙");
  console.log(`${x}로 출발`);
}

// add
// minus
// multi
// square(제곱)

function add(a, b) {
  return a + b;
}

function minus(a, b) {
  return a - b;
}

function multi(a, b) {
  return a * b;
}

function square(a, b) {
  return a ** b;
}

const a = add(3, 4); // 7
const b = prompt("입력하셈 아무 데이터");

// 화살표 함수
// ()=> {}

const add = (a, b) => {
  return a + b;
};

const minus = (a, b) => {
  return a - b;
};

const multi = (a, b) => {
  return a * b;
};

const square = (a, b) => {
  return a ** b;
};

const morning = {
  main: "밥",
  sub: "계란",
  cook: () => {
    console.log("요리중");
  },
};

morning.cook();

// clac 오브젝트를 만들고

const clac = {
  add: (a, b) => {
    return a + b;
  },
  substract: (a, b) => {
    return a - b;
  },
  multiply: (a, b) => {
    return a * b;
  },
  device: (a, b) => {
    return a / b;
  },
  square: (a, b) => {
    return a * b;
  },
};
