// 1. 나이 age에 따라서 요금을 출력하세요.
// 7세 이하 "무료", 8~19 "청소년 5000원", 20세 이상 "성인 10000원"
var age = 15;

if (age <= 7) {
    console.log("무료")
} else if (age <= 19) {
    console.log("청소년 5000원")
} else if (age >= 20) {
    console.log("성인 10000원")
}

// 2. month(1~12)에 따라 계절을 풀력하세요 (switch 이동)
// 3,4,5 봄 / 6, 7, 8 여름 / 9, 10, 11 가을 / 12, 1, 2 겨울
var month = 11;
switch (month) {
    case 3:
    case 4:
    case 5:
        console.log("봄");
        break;
    case 5:
    case 6:
    case 7:
        console.log("여름");
        break;
    case 8:
    case 9:
    case 10:
        console.log("가을");
        break;
    case 11:
    case 12:
    case 1:
        console.log("겨울");
        break;
}
// 3. 1부터 100까지의 수 중 3배수의 합을 구해 출력하세요
var v = 0;
for (var sum =1; sum <= 100; sum++) {
    if (sum % 3 === 0) {
        v += sum;
    }
    console.log(v);
}
// 4. 구구단 5단을 출력하세요.
for (var i = 5; i <= 5; i++) {
    for (var k = 1; k <= 9; k++) {
        console.log(`${i} * ${k} = ${i * k}`);
    }
}
// 5. 1부터 차례로 더하다가 합이 100을 넘는 순간의 숫자와 합을 구하세요 (while + break 이용)