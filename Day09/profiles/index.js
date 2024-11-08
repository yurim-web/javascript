import { data } from "./data.js";

const makeCard = (img, name, job_title) => {
  return `
      <div class="card">
            <img src="${img}" alt="">
            <div class ="name">
            <strong>${name}</strong>
            <p>${job_title}</p>
            </div>
            
        </div>
    
    `;
};

const container = document.querySelector(".container");
container.insertAdjacentHTML(
  "beforeend",
  data.map((v) => makeCard(v.image, v.name, v.job_title)).join("")
);

// container.innerHTML = `
// ${data.map((v) => makeCard(v.image, v.name, v.job_title)).join("")}`;
