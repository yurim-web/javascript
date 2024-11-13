// id 인풋태그 만들기!

// 1. id 인풋의 길이가 4~16가 아니면
// 밑에 빨간색 경고 문구로 길이가 4글자 이하 : id 길이가 짧습니다.
// 밑에 빨간색 경고 문구로 길이가 16글자 이하 : id 길이가 너무 깁니다.

//2. 특수문자 !,@,#,* 중에 하나라도 없으면
// 밑에 빨간색 경고문구로 : !,@,#,* 특수문잘들 꼭 포함해야합니다1

//3. 위에 모두 통과되면 밑에 파란색 통과문구로 : 해당 아이디는 유효합니다.

const id = document.getElementById("id");
const text = document.getElementById("text");

id.addEventListener("input", (e) => {
  if (e.target.value.length < 4) {
    text.innerText = "id가 길이가 짧습니다";
    text.style.color = "red";
  } else if (e.target.value.length > 16) {
    text.innerText = "id가 길이가 너무 깁니다";
    text.style.color = "red";
  } else if (!["!", "@", "#", "*"].some((V) => e.target.value.includes(V))) {
    text.style.color = "red";
    text.innerText = "!,@,#,* 특수문자를 꼭 포함해야합니다";
  } else {
    text.style.color = "blue";
    text.innerText = "해당아이디는 유효합니다!";
  }
});
