// taco 만들기 프로그램!
// 🦐 🍗 🍳 🧀  🥩
// 매뉴 추가 버튼을 누르면 -> prompt (메뉴입력)후, 새롭게 버튼이 추가됨!
// 🦐(2$) 🍗(3$) 🍳(1$) 🧀(1$)  🥩(1$) 를 누르면
// 타코의 총 가격이 올라갑니다.
// 구매하기 누르면 총 가격 :~~ [눌렀던 이모지] 타코 완성되었습니다!
// 구매후 리셋됨 ㅅㄱ

const skillList = ["🦐", "🍗", "🍳", "🧀", "🥩"];

const makeButton = (skill) => {
  const button = document.createElement("button");
  button.innerHTML = skill;
  button.addEventListener("click", () => {
    alert(`${skill}발동!`);
  });
  return button;
};

skillList.forEach((v) => document.body.appendChild(makeButton(v)));
