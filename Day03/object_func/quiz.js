// 유저에게 구매물품, 가격을 총 3번 물어보고
// 총 구매 상품 리스트, 총 금액 리스트 나타내려 합니다

// 오브젝트 타입과 함수를 사용해서 코드를 만드세요!

// const goods1 = prompt("무엇을 구매하시겠어요?");
// const price1 = Number(prompt("가격이 얼마죠?"));

// const goods2 = prompt("무엇을 구매하시겠어요?");
// const price2 = Number(prompt("가격이 얼마죠?"));

// const goods3 = prompt("무엇을 구매하시겠어요?");
// const price3 = Number(prompt("가격이 얼마죠?"));

// 고객한테 물어봄!

const cart = {
  purchasedItem: [],
  totl_price: 0,
  getItem() {
    const item_name = prompt("구매물품 입력 ");
    const item_price = Number(prompt("가격입력"));

    this.purchasedItem.push(item_name);
    this.totl_price = this.totl_price + item_price;
  },
  showItme() {
    console.log(
      `총 구매 물품리스트 ${this.purchasedItem} 총 금액 : ${this.totl_price}`
    );
  },
};

cart.getItem();
cart.getItem();

cart.getItem();

cart.showItme();
