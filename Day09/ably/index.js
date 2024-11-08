import { ablyData } from "./data.js";

const makeCard = (
  image,
  discount_rate,
  price,
  market_name,
  name,
  sell_count
) => {
  return `
     <div class="box">
        <img src="${image}" alt="">
        <strong class = "title"><span class ="sale">${discount_rate}%</span>${price}</strong>
        <p>${market_name}</p>
        <p>${name}</p>
        <p class ="people">${sell_count}개구매중</p>
        </div>
        
        `;
};
const container = document.querySelector(".container");
container.insertAdjacentHTML(
  "beforeend",
  ablyData
    .map((v) =>
      makeCard(
        v.item_entity.item.image,
        v.item_entity.item.discount_rate,
        v.item_entity.item.price,
        v.item_entity.item.market_name,
        v.item_entity.item.name,
        v.item_entity.item.sell_count
      )
    )
    .join("")
);
