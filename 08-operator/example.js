
// 1. 산술연산자

console.log(10 + 3); // 13
console.log(10 - 3); // 7
console.log(10 * 3); // 30
console.log(10 / 3); // 3.33333333
// 딱 떨어지지 않는 소숫점 계산을 시키면 믿을 수 없음
console.log(10 % 3); // 1
console.log(2 ** 3); // 8

// 증감 연산자 : 전위 증감 연산자, 후위 증감 연산자
var a = 5;
console.log(a++); // 화면 : 5 , a의 값 : 6
console.log(a); // 화면 : 6
console.log(++a); // 화면 : 7 a의 값 : 7



// 2. 할당 연산자

var total = 10;
total += 5;   // 15-const
// var temp += 5;  // undefined + 5 = 불가능
total -= 3;    // 12
total *= 2;    // 24
total /= 4;    //  6

var message = "안녕";
message += "하세요";       // + 연산이 산술연산이 아닌, 연결연산 동작
console.log(message);     // 안녕하세요



// 3. 비교 연산자
// ==, === 이 있을 때 ===을 기본적으로 사용한다고 생각해야 함
console.log(5 == "5"); // true (느슨한 비교)
console.log(5 === "5"); // fales ( 엄격한 비교 )
console.log(false == 0); // true (-> 컴퓨너 내부적으로 false는 0으로 기록 중)
console.log(true == 1); // true (-> 컴퓨너 내부적으로 true는 1으로 기록 중)
console.log(undefined == null); // true

console.log(5 != "5");  // !true => false
console.log(5 !== "5");  // !false => true


// 4. 삼항 연산자 => 조건식 ? 식1 : 식2

var score = 75;
var result =score >= 60 ? "합격" : "불합격";
console.log(result);


// 5. 논리 연산자

var age = 25;
var hasTicker = true;
console.log(age < 19 || hasTicker);  // true => 논리합(OR) 둘 즁 하나라도 참이면 참
console.log(age >= 19 && hasTicker); // true => 논리곱(AND) : 둘 다 참이어야 참
console.log(!hasTicker);  // false => 부정(not) : 반대값


// 6. typeof  연산자
// 나오는 결과값 8가지
// number, string, boolean, undefined, symbol, bigint, object, function