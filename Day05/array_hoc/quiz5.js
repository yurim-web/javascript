const fruits = ["apple", " banana", "kiwi", "pineapple", "mango"];

// 과일리스트에서 과일 단ㅇ어에 알파벳 k,p,m이 하나라도 들어갔느닞 물어보는 코드

fruits.filter((x) => ["k", "p", "m"].some((y) => x.includes(y)));
