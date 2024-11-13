// class : 변수들 + 함수들
// student : [이름,성별,나이,수강목록] + []

class student {
  //   name = "이유림";
  //   age = 25;
  constructor(name, age, major) {
    this.name = name;
    this.age = age;

    this.major = major;
  }

  hello() {
    console.log(
      `안녕하세요 저는 ${this.name}이고 나이는 ${this.age}이고 전공은 ${this.major}입니다.`
    );
  }
  past() {
    console.log(`10년전 저의 나이는 ${this.age - 10}살 입니다`);
  }
}

const a = new student("율미", 22, "컴퓨터공학과");
a.hello();
a.past();

const b = new student("나으리", 32, "경영학과");
b.hello();
b.past();

// 커피 클래스
// 변수 : 이름, 가격, 성분
// 함수 : 주문하기 : 주문하신 ${} 커피 가격은 ${} 입니다.

class coffee {
  constructor(name, price, ingredient) {
    this.name = name;
    this.price = price;
    this.ingredient = [];
  }
  order() {
    console.log(`주문하신 ${this.name} 커피 가격은 ${this.price} 입니다.`);
  }
  plus(something) {
    this.ingredient.push(something);
  }
  info() {
    console.log(`들어간 성분은 ${this.ingredient}`);
  }
}

const coffee1 = new coffee("아메리카노", 1500, "모름?");
coffee1.order();
coffee1.plus("🍋");
coffee1.plus("🍊");
coffee1.info();

const coffee2 = new coffee("카페라떼", 3500, "모름?");
coffee2.order();
