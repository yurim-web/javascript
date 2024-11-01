// const, let, if, this
// this :

// 일반함수, 화살표 함수

// 오브젝트에서 함수를 넣을 떄
// 일반함수에서는  this가 먹힘
// 화살표함수에서는 this가 먹힘

// 일반함수는 리액트에서 안씀

const student = {
  name: "전지현",
  hello: function () {
    console.log(`안녕하세요 ${this.name}입니다.`);
  },
};
// 일반함수

const student1 = {
  name: "최지현",
  hello() {
    console.log(`안녕하세요 ${this.name}입니다.`);
  },
};
// 일반함수 => 일반함수 단축 버전! !!

const student2 = {
  name: "김지현",
  hello: () => {
    console.log(`안녕하세요 ${this.name}입니다.`);
  },
};
// 화살표 함수라서 안나옴!!!
