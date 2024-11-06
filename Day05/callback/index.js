// const cook = (a) => {
//   console.log("요리 준비!");
//   a();

//   console.log("요리 완성!");
// };

// const ramen = () => {
//   console.log("물 끓이기");
//   console.log("스프넣기");
//   console.log("라면넣기");
// };

// const Chapagetti = () => {
//   console.log("물 끓이기");
//   console.log("스프넣기");
//   console.log("라면넣기");
// };

// cook(ramen);
// cook(Chapagetti);

// 🧙 ⚡ 🧊 🔥
// skill 이라는 함수가 있고 콜백함수로 다양한 스킬로 받아서 실행되는 함수 구현하기
// skill (번개)
// 마법사 스킬 준비 🧙
//⚡ 스킬 발동!
// 마법사 스킬 완료!

const skill = (a) => {
  console.log("마법사 스킬 준비 🧙");
  a();
  console.log("마법사 스킬 완료!");
};

const attackSkill = (property) => {
  console.log(`${property} 스킬발동!`);
};

const lightning = () => {
  console.log("⚡ 스킬 발동!");
};

const ice = () => {
  console.log("🧊 스킬 발동!");
};

const fire = () => {
  console.log("🔥 스킬 발동!");
};

skill(lightning);
skill(ice);
skill(fire);

//
// 재료 추가 함수 각각 만들어서
// 유저에게 타코 메뉴 선택받아서 콘솔로 타코 만들고 나타내기!

const maketaco = (ingredient) => {
  console.log("타코 만들기");
  ingredient();
  console.log("타코 완성");
};

const shrimp = () => {
  console.log("🦐 타코 만들기");
  console.log("브레드 펼치기");
  console.log("새우 넣기");
  console.log("돌돌말기");
};

const chicken = () => {
  console.log("🍗 타코 만들기");
  console.log("브레드 펼치기");
  console.log("치킨 넣기");
  console.log("돌돌말기");
};

const egg = () => {
  console.log("🍳 타코 만들기");
  console.log("브레드 펼치기");
  console.log("치킨 넣기");
  console.log("돌돌말기");
};

const cheese = () => {
  console.log("🧀 타코 만들기");
  console.log("브레드 펼치기");
  console.log("치킨 넣기");
  console.log("돌돌말기");
};

const beef = () => {
  console.log("🥩 타코 만들기");
  console.log("브레드 펼치기");
  console.log("치킨 넣기");
  console.log("돌돌말기");
};

const menu = Number(
  prompt(
    "어떤 타코를 만드시겠어요? (1. 새우 , 2. 치킨, 3. 계란, 4.치즈,5.소고기"
  )
);

if (menu == 1) {
  maketaco(shrimp);
}
maketaco();
