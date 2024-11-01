// const first_num = prompt("첫번째 숫자는?");

// const second_num = prompt("두번째 숫자는?");

// const a = Number(first_num);
// const b = Number(second_num);

// alert(`${first_num}와 ${second_num}의 합은 : ${a + b}`);

// alert(Number(first_num) + Number(second_num));

const age = prompt("몇살이야?");
const year = 2025 - Number(age);
alert(`당신은 ${year}생 입니다!`);

const won = prompt("현재 원화는?");
const yen_rate = 0.11;
const yen = Number(won) * yen_rate;
alert(`${won}원은 ${yen}입니다`);

const btc = prompt("비트코인 BTC는?");
const won_rate = 25100279000;
const won1 = Number(btc) * won_rate;
alert(`${btc}Btc는 ${won1}원 입니다.`);
