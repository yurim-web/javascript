const menu = [
  { name: "cookie", price: 3000, kcal: 400 },
  { name: "doughnut", price: 3500, kcal: 500 },
  { name: "yougurt", price: 2000, kcal: 200 },
  { name: "chocolate", price: 2500, kcal: 500 },
];

const price = (x) => x.price <= 3000;
const answer1 = menu.filter(price);
console.log(answer1);

const kcal = (x) => x.kcal <= 300;
menu.filter(kcal);
