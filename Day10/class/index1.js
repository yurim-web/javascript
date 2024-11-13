// class coffee {
//   constructor(name, price, ingredient) {
//     this.name = name;
//     this.price = price;
//     this.ingredient = [];
//   }
//   order() {
//     console.log(`주문하신 ${this.name} 커피 가격은 ${this.price} 입니다.`);
//   }
//   plus(something) {
//     this.ingredient.push(something);
//   }
//   info() {
//     console.log(`들어간 성분은 ${this.ingredient}`);
//   }
// }

// const coffee1 = new coffee("아메리카노", 1500, "모름?");
// coffee1.order();
// coffee1.plus("🍋");
// coffee1.plus("🍊");
// coffee1.info();

// const coffee2 = new coffee("카페라떼", 3500, "모름?");
// coffee2.order();

// ㅠ피자 클래스
// 변수 : 이름, 가격(기본값 : 0원), 토핑(기본값 : 빈배열)
// 함수: 토핑 추가하기, 총 금액 알려주기
//     - 토핑 : 토핑이름, 토핑가격
//    - 금액 :  총가격?

// class pizza {
//   constructor(name) {
//     this.name = name;
//     this.price = 0;
//     this.topping = [];
//   }

//   plus(name, price) {
//     this.topping.push({ name: name, price: price });
//   }
//   info() {
//     console.log(`토핑종류는 : ${this.topping}`);
//   }
// }

// const pizza1 = new pizza("치즈피자");
// pizza1.plus("불고기", 2000);
// pizza1.plus("치즈토핑", 3000);

// pizza1.info();

//영화관 theater

//변수 : 영화제목, 상영관, 현재 관람객 : (기본값 : 0명)
// 함수 :
//        관람객 추가 : 관람객 n명 매개변수로 들어오면 늘어나는 함수
//        영화정보 : 영화제목과 상영관 어디와 현재 총 관람객을 알려주는 함수

class theater {
  constructor(name, theater) {
    this.name = name;
    this.theater = theater;
    this.people = 0;
  }

  plusperson(n) {
    this.people = this.people + n;
  }

  movie() {
    console.log(
      `영화제목은 ${this.name}이과 상영관은 ${this.theater}이고 총관람객은 ${this.people}`
    );
  }
}

const movie1 = new theater("베테랑", "2관");
movie1.plusperson(500);
movie1.movie();
