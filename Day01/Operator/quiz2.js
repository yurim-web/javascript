// 1. 유저에게 mbti 성향 물어보기
// 1) e 입니까 i 입니까?
// 2) s 입니까 n 입니까?
// 3) t 입니까 f 입니까?
// 4) p 입니까 j 입니까?
// 당신의 성향은 외향적이며 감각적이며 감성적이며 계획적이시군요!

const mbti_es = prompt("e입니까 i입니까?");
const result_es = "e" || "E" ? "외향적" : "내향적";

const mbti_sn = prompt("s 입니까 n 입니까?");
const result_sn = "s" || "S" ? "감각적" : "직관적";

const mbti_tf = prompt("t 입니까 f 입니까?");
const result_tf = "t" || "T" ? "이성적" : "감성적";

const mbti_pj = prompt("p 입니까 j 입니까?");
const result_pj = "p" || "P" ? "즉흥적" : "계획적";

alert(
  `당신의 성향은 ${result_es}이며,  ${result_sn}이며, ${result_tf}이며, ${result_pj}입니다!!!!!`
);

// 2. 유저에게 10000~99999 정수를 입력 받고 각 숫자의 단위를 붙혀서 나타내기

const num1 = Number(prompt("10000~99999 정수를 입력"));
const first = parseInt(num1 / 10000);
const second = parseInt((num1 % 10000) / 1000);
const third = parseInt((num1 % 1000) / 100);
const fourth = parseInt((num1 % 100) / 10);
const fifth = parseInt(num1 % 10);

alert(`${first}만${second}천${third}백${fourth}십${fifth} `);

// 3. 유저에게 정수를 입력 받고 시분초로 나타내기

const time = Number(prompt("정수를 입력하시죠"));
const time_h = time / 3600;
const time_num = Number(time % 3600);
const time_m = time_num / 60;
const time_s = time_num % 60;

alert(`${time}은 ${time_h}시간 ${time_m}분 ${time_s}초 입니다!`);
