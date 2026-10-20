// 1. 배열 만들기와 요소 접근

const fruits = ["바나나","딸기","포도"];
// 배열은 '순서가 있는' 집합 데이터
// 그렇기 떄문에 각 값은 '자리 번호'를 가짐 => 인덱스
// 인덱스 번호는 0부터 시작
console.log(fruits[0]);  // 0번 값을 의미 = "바나나"
console.log(fruits[2]);  // 2번 값을 의미 = "포도"
console.log(fruits[5]);  // 5번 인데스 값을 의미
                        // 없는 값을 참조(접근)하므로 undefined

// javascript는 배열에 여러 타입을 섞어서 담을 수 있음
const mixed = [1,"둘",true,{three:3},[4]];

// 배열의 길이에 대해 알고 싶으면 배열 값이 담긴 변수에 .length
console.log(mixed.length);
console.log(mixed[mixed.length-1]);  // console.log(mixed[4]);


// 요소에 대한 추가 / 삭제
const colors = ["빨강","파랑"]
colors[2]="초록";
colors[0]="주황"; // 변경

console.log(colors);  // ["주황","파랑","초록"];     -> 인덱스 번호 2까지 있음
colors[5] = "보라";   // <- 인덱스 번호를 갑자기 건너 뛰어도 들어감
                     // 그럼 나머지 값을 집어넣지 않았던 인덱스는 어떻게 될까?
console.log(colors);  // [ '주황', '파랑', '초록', <2 empty items>, '보라' ]
console.log(colors.length);   // 6


// Array.isArray() : 매개변수로 제공되는 변수 값이 array 타입인지 반환값 true/false
console.log(typeof fruits);         // object -> typeof 연산자로는 array인지 구분할 수 없음
console.log(Array.isArray(fruits));     // true
console.log(Array.isArray({name: "홍길동"}));  //false


// push(...요소) : 원본 배열에 요소들을 뒤에 덧붙이는 메서드. return값은 완료 후의 length값
// pop() : 원본 배열에서 맨 뒤 요소를 꺼내는 메서드. return값은 꺼내어 삭제된 요소갑
const stack=[];
stack.push("첫번째")       // stack의 값을 ["첫번째']로 만들고, 1이 리턴됐지만 저장할 곳이 없어서 버려짐
stack.push("두번째")
const newLength = stack.push("세번째","네번째"); // 요소들을 집어넣고, 4가 리턴되어서 newLength에 저장
stack.pop(); // stack에서 마지막 요소인 '네번째'를 뽑고 , 리턴 했지만 뭘 해달라고 안 했으니까 버려짐
const last = stack.pop();  // 마지막 요소 "세번째"를 뽑고 , 리턴해서 그값을 last 변수에 저장



// 배열을 가지고 반복 수행 : for문 vs forEach
const scores = [80, 95 ,70];

for (let i = 0; i < scores.length ; i++) {
    console.log(scores[i]);
}

// forEach는 배열의 요소 갯수만큼 순회하며 함수를 실행함
// scores.forEach(함수);
// scores.forEach(() => {});
// scores.forEach((item) => {});
// scores.forEach(item => {});
// scores.forEach(item => { console.log(item); });
// scores,forEach(item => console.log(item));     // 리턴이 없는데도? 중괄호 생략을?
                                                    // console.log() 메서드는
                                                    // return이 없음 => return undefined; 와 같음

scores.forEach(item => console.log(item));


// forEach호 합계 구하기
let total = 0;
for (let i = 0; i < scores.length; i++) {
    total += scores[i];
}
console.log(total);

scores.forEach(item  => total += item);