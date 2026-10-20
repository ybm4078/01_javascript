
// 1. 숫자 unm이 짝수면 "짝수". 홀수이면 "홀수"를 출력하세요
// (%, 삼항 연산자를 사용해서)
var num = 17;
console.log(num % 2 === 0 ? "짝수" : "홀수");


// 2. 총 금액 total에 배송비 3000원을 +=로 더한 뒤 출력하세요
var total = 25000;
console.log(total+=3000);


// 3. 아래 비교 결과를 예상해 주석으로 적은뒤 확인하세요
console.log(1 =="1")             // true
console.log(1 ==="1")            // false
console.log(null == undefined)     // true
console.log("b" > "a")          // true


// 나이 age가 13 이상 19이하면 true를 출력하세요 &&사용
var age = 16;
console.log(age>=13 && age <=19);

// 5. 아래 코드의 출력 결과를 순서대로 예상한 뒤 실행해서 확인하세요
var x= 3;
console.log(x++);
console.log(++x);
console.log(x);
// 예상 값 : 3,5,5