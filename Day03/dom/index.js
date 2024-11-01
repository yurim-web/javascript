// js <-> document[dom] <-> html

// const btn = window.document.createElement("button");

// btn.innerHTML = "홍콩여행";
// btn.style.backgroundColor = "orange";

// window.document.body.appendChild(btn);

// 유저에게 원하는 태그를 입력받고
// 유저에게 안의 내용도 입력 받은 후
// 바디 태그에 나타나도록 하는 코드 ㄱㄱ

// const tag = prompt("태그를 입력하시오");
// const content = prompt("내용입력");

// const newtag = window.document.createElement(tag);
// newtag.innerHTML = content;
// window.document.body.appendChild(newtag);

// const tag = prompt("태그를 입력하시오");
// const content = prompt("내용입력");
// const color = prompt("원하는 배경색 입력");

const maketag = {
  tag: "",
  content: "",
  bgcolor: "",
  getinfo() {
    this.tag = prompt("태그를 입력하시오");
    this.content = prompt("내용입력");
    this.bgcolor = prompt("원하는 배경색 입력");
  },

  maketag() {
    const newTag = document.createElement(this.tag);
    newTag.innerHTML = this.content;
    newTag.style.backgroundColor = this.bgcolor;
    document.body.appendChild(newTag);
  },
  start() {
    this.getinfo();
    this.maketag();
  },
};

maketag.start();
maketag.start();

// const gym = {
//   gymlist: [],
//   getmember() {
//     const member_name = prompt("이름입력");
//     const member_age = Number(prompt("나이입력"));
//     const member_adress = prompt("주소입력");
//     const obj = { name: member_name, age: member_age, adress: member_adress };

//     this.gymlist.push(obj);
//   },
// };
