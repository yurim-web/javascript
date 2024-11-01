const price = prompt("아메리카노 얼마야?");
const number = prompt("아메리카노 몇개야?");
const americano = Number(price) * Number(number);
alert(`아메리카노의 총 ${number}개의 가격은${americano}임 `);

const box = prompt("정사각형 한변의 길이는 몇인가요?");
const box_length = Number(box) * 4;
const box_extent = Number(box) * Number(box);
alert(`정사각형의 둘레는 ${box_length}이고 넓이는 ${box_extent}입니다!`);

const tryangle = prompt("정삼각형의 밑변은?");
const tryangle_height = prompt("정삼각형의 높이는?");

const tryangle_extent = (Number(tryangle) * Number(tryangle_height)) / 2;
const tryangle_length = Number(tryangle) * 3;
alert(
  `정삼각형의 둘레는 ${tryangle_length}이고 넓이는 ${tryangle_extent}입니다!`
);

const circle = prompt("원의 반지름 길이는 몇인가요?");
const circle_length = Number(circle) * 2 * 3.14;
const circle_extent = Number(circle) * Number(circle) * 3.14;
alert(`원의 둘레는 ${circle_length}이고 넓이는 ${circle_extent}입니다!`);
