const year = prompt("몇년생이니?");
alert(Number(year) >= 2006 ? "미성년자입니다!" : "성인입니다!");

const length = prompt("키가 몇이니?");
alert(
  Number(length) >= 140
    ? "놀이기구를 탈 수 있습니다"
    : "놀이기구를 탈 수 없습니다"
);

const eng = prompt("영어점수가 몇이니?");
const math = prompt("수학점수가 몇이니?");
const score = (Number(eng) + Number(math)) / 2;
alert(
  Number(eng) >= 60 && Number(math) >= 60 && Number(score) >= 60
    ? "합격입니다"
    : "탈락입니다"
);

const number = prompt("숫자를 입력하시오");
alert(Number(number) % 2 == 0 ? "짝수입니다" : "홀수입니다");

// 1. 유저에게 몇년생인지 물어보고 알럿으로 2006년생 이후면 미성년자 아니면 성인입니다!

// 2. 유저에게 키를 물어보고 140 이상이면
// 알럿으로 해당 놀이기구를 탈 수 있습니다 아니면 탈 수 없습니다.

//3. 유저에게 영어 점수와 수학점수를 물어보고
// 영어점수와 수학점수가 평균이 60점 이상이면 합격이고
//단 둘중 하나라도 60점 이하이면 탈락이고
//또는 평균이 60점 이하여도 탈락입니다.

//4. 유저에게 숫자를 입력받고
// 알럿으로 홀수인지 짝수인지 나타내기
