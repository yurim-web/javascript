const coffee = "ice americano";

coffee.toUpperCase(); // 대문자화! -> ICE AMERICANO
coffee.toLocaleUpperCase(); // 소문자화! -> ice americano
coffee.charAt(0); // 몇번째 뭔지 알려줌 -> i
coffee.indexOf("am"); // am이 몇번째 있는지 알려줌 -> 4
coffee.includes("ce"); // ce가 포함하는지 알려줌 -> [true] / false
coffee.startsWith("a"); // a로 시작하는지 알려줌 -> true / [false]
coffee.slice(0, 4); // 0번째부터 3번째까지 짤라서 줌 ! -> ice
coffee.replace("ice", "hot"); // ice 를 hot 으로 바꾸기 -> hot americano
coffee.repeat(2); // 해당 단어 2번 반복하기!

const kidsCafe = ["타요키즈카페", "하츄핑키즈카페", "점핑키즈카페"];
kidsCafe.push("애완키즈카페");
kidsCafe.pop();
kidsCafe.unshift("무인키즈카페");
kidsCafe.shift();

kidsCafe.reverse(); // 순서거꾸로 하기
kidsCafe.sort(); // 순서대로 줄 세우기(정렬하기)

kidsCafe.includes("하츄핑키즈카페"); // 포함하는지 물어보기
kidsCafe.slice(0, 1); // 자르기
