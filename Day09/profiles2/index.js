import { data } from "./data.js";

const makeCard = (hex_color, img, color, name, job_title, money, mobile) => {
  const mo = money.split("$")[1];
  const newmoney = Number(mo) * 1385.7;

  return `
        <div class="card" style = "background-color :  ${hex_color}">
              <img src="${img}" alt="">
              <div class ="name">
              <strong style = "color : ${color}">${name}</strong>
              <p>${job_title}</p>
              <p>${parseInt(newmoney)}원</p>
              <span class = "mobile">${mobile}</span>
              </div>
              
          </div>
      
      `;
};

const container = document.querySelector(".container");
container.insertAdjacentHTML(
  "beforeend",
  data
    .map((v) =>
      makeCard(
        v.hex_color,
        v.image,
        v.color,
        v.name,
        v.job_title,
        v.money,
        v.mobile
      )
    )
    .join("")
);
