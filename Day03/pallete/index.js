const changeBox = (x) => {
  const box = document.querySelector(".box");
  box.style.backgroundColor = x;
};
// 색깔을 바꿔주는 함수

const bigBox = () => {
  const box = document.querySelector(".box");
  box.style.width = "200px";
  box.style.height = "200px";
};

const smallBox = () => {
  const box = document.querySelector(".box");
  box.style.width = "100px";
  box.style.height = "100px";
};
