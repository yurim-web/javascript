// const cart = {
//   purchasedItem: [],
//   totl_price: 0,
//   getItem() {
//     const item_name = prompt("구매물품 입력 ");
//     const item_price = Number(prompt("가격입력"));

//     this.purchasedItem.push(item_name);
//     this.totl_price = this.totl_price + item_price;
//   },
//   showItme() {
//     console.log(
//       `총 구매 물품리스트 ${this.purchasedItem} 총 금액 : ${this.totl_price}`
//     );
//   },
// };

// cart.getItem();
// cart.getItem();

// cart.getItem();

// cart.showItme();

// 헬스장 멤버 오브젝트 만들기!
// 멤버(이름,나이,사는곳)
//리스트 모두 출력

const gym = {
  gymlist: [],
  getmember() {
    const member_name = prompt("이름입력");
    const member_age = Number(prompt("나이입력"));
    const member_adress = prompt("주소입력");
    const obj = { name: member_name, age: member_age, adress: member_adress };

    this.gymlist.push(obj);
  },
};
