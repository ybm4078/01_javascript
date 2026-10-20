// var의 문제점
var name = "홍길동";
var name = "김철수"; // 같은 이름으로 다시 선언해도 오류가 나지 않음 -> 개발자의 실수를 잡지 않음


// let : 재선언 불가, 재할당 가능
let score = 80;
// let score = 90; // SyntaxError - 문법오류
score = 90;  // 재할당은 가능

// var는 전역 스코프와 함수 레벨 스코프를 적용받았는데,
// let과 const 거기에 덧붙여 '블록 레벨 스코프'도 적용받음
// 블록 레벨 스코프는 코드 블록 { } 표현된 코드
// if, switch, for, while

if (true) {
    let blockLet = "블록 안의 let"
    var blockVet = "블록 안의 var"
    console.log(blockLet);
}
console.log(blockVet);
//console.log(blockLet);    // ReferenceError: blockLet is not defined

let count = 10;
if (true) {
    let count = 99;
    console.log("블록 안 count : " + count);
}
console.log("블록 밖 count : " + count);


// TDZ (일시적 사각지대)   - 변수 호이스팅에서 var로 선언된 것들이 아무렇지도 않게 어느 때나 접근 가능했다라는 단점 보안책
// 선언되면 메로리 영역은 마련이 되어져 있는 상태이나, 값이 할당(초기화) 되기 전에 접근이 불가능하도록 막음
// console.log(hoistedLet); // ReferenceError: Cannot access 'hoistedLet' before initialization
let hoistedLet = 1;


// const : 재할당(값을 바꾸는) 불가능, 그렇기 때문에 선언과 동시에 깂을 넣어야 됨
// const abc;
const PI = 3.14;
// PI = 3.14159;                       // TypeError: Assignment to constant variable.

// const로 선언된 변수는 불변 => '불변'의 뜻은 Stack 메모리 영역의 값을 바꿀 수 없다.
const user = {name: "홍길동",age:20};
user.age = 21;              // Heap 메모리 영역에 존재하는 프로퍼티 수정 가능
// user = {name:"김철수",age:50}; // 주소값이 다른 새로운 객체를 저장하는 것은 불가능


// 객체 내부까지 바꾸지 못하게 하려면,
const config = Object.freeze({theme:"dark"})
config.theme = "light";  // 웹스톤은 에러가 있다며 빨간줄을 침 , 자바스크립트 엔진은 정상 실행을 하되 해당 줄을 "무시"함
console.log(config);



// 앞으로는 'var'는 무조건 사용하지 않음.
// 기본적으로 변수를 선언할 때에는 const
// const로 썼더니 값을 바꿔야 되네? 싶을 때 let을 씀