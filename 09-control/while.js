
// while 반복문
// while (조건식) { 반복 실행하는 내용 }
// for 문은 초기식이 있어서 최초 실행되는 변수 게팅 자리가 있었지만, while 그런게 없어서 따로 써줌

var sum = 0;
var n = 1;
while (n < 100) {
    sum += n;
    n++
}


while (true){
    console.log("반복됩니다");
    if (true) {
        break;
    }
}


// do - while 반복문
// do { 최초 1회 보장, 반복되는 코드블록} while(조건식);

var tries = 10;
do {
    console.log("do-while은 최소 한 번은 실행됩니다. tries = " + tries);
} while(tries < 5);



// continue, break

for (var j = 1; j <=10; j++) {
    if (j === 6) {
        break;  // 반복을 진행하다가, j가 6인 사이클에서 for를 종료하겠다
    }
    if (j % 2 == 0) {
        continue; // j가 짝수인 사이클에서는 이 아래로 진핸하지 않겠다
    }
    console.log("홀수 : ", j);
}