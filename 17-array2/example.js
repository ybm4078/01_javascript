// find 메서드 : 조건에 맞는 첫 번째 요소를 반환하는 메서드
//              조건에 맞는 모든 요소를 돌려주는게 아님!

const arr = ["apple", "banana","melon"];

// arr.find(함수)
// arr.find(() => {})
// arr.find((이번에 순회할 때의 요소) => { 검색의 대한 조건 (true,false가 반환 되게끔)})
// find 메서드는 함수에 기재한 조건이 true인 요소를 반환시키는 메서드
// arr.find((item) => {return item === "banana"} )
arr.find(item => item === "banana");

// arr의 요소가 3개니까 3번 순회함
// 1번째 순회 : item에 "apple"이 들어가서 "apple" === "banana"를 확인하고 false로 종료
// 2번째 순회 : item에 "banana"가 들어사서 "banana" === "banana"를 확인하고 true로 확인하여 "banana"를 리턴하고 find 종료
// 3번째 순회는 없음


const products = [
    { id : 1, name : "노트북",price : 1200000, category: "전자", stock:3 },
    { id : 2, name : "마우스",price : 25000, category: "전자", stock:0 },
    { id : 3, name : "책상",price : 150000, category: "가구", stock:5 },
    { id : 4, name : "의자",price : 90000, category: "가구", stock:2 },
    { id : 5, name : "키보드",price : 70000, category: "전자", stock:7 },
];

// 내 사이트의 상품들 중 상품명이 "책상"이라는 것을 검색해오고 싶다
// products.find(함수);
// products.find(() => {});
// products.find((item) => {});       // 순회할 떄의 그 요소가 들오오는 자리를 나는 item이라고 부르겠다
// products.find((item) => { return item.name === "책상" });  // 순회할 때 들어온 그 요소의 name 프로퍼티 값과 "책상"을 비교
const desk = products.find(item => item.name === "책상");
// desk 안에는 { id : 3, name : "책상",price : 150000, category: "가구", stock:5 } 가 들어감

const speaker = products.find(item => item.name === "스피커");
// 검색을 했는데 조건에 맞는게 없다면 '값이 없다'인거고, 그것은 undefined로 평가됨



// .find() 메서드에 들어가는 매개변수는 1자리 이고, 그 자리는 함수가 들어가며 함수는 () => {}
//                  그래서 그 함수에 대해서만 보게 되면
//                  매개변수 자리엔 총 3개의 값을 find메서드가 넣어줌
//                  (item, index, array) => {}
//                  item : 현재 순회하고 있는 대상 요소
//                  index : 현재 순회라고 있는 대상 요소의 인덱스 번호
//                  array : 원본 array

// 함수라고 하는 녀석은 들어가는 값이 매개변수라는 것과 실제 실행이 되는 내용인 함수 몸통이라고 하는 부분
// 매개변수의 자리가 중요함. 이 함수를 싱행시킬 때 몇 개의 값을 가지고서 실행할 것이냐는 걸 결정
// 함수 몸통을 실행하는데 주어진 인수가 부족하면 실행하는 도중에 문제가 생길 소지가 있고 (안 들어온 값은 undefined로 처리가 되니까)
// 함수 몸통을 실행하는데 주어진 인수가 더 많으면 아무런 문제가 되지 않는다.

// find 메서드는 실행될 떄 매개변수로 들어온 함수에게 매 순회 때마다 3가지 인수를 전달해 줌


const list = [1,2,3,4,5];

list.find(item => item === 4);
// 1 순회 : find 메서드는 주어진 함수에세 매개변수 첫 자리에 이번 순회 때의 요소값인 1, 두번째 자리에 이번 순회 때의 요소 인덱스인 0, 세번째 자리에 원본 array [1,2,3,4,5]
//                                  하지만 우리가 쓴 함수는 (item) => item === 4 이기 때문에 값을 넣어도 받을 수 있는 게 첫번째 자리밖에 받을 수 없음
// 2 순회 : 첫 자리에 요소값 2, 두번째 자리에 인덱스값 1, 세번째 자리에 원본 array [ 1, 2, 3, 4, 5]
// 3 순회 : 첫 자리에 요소값 3, 두번째 자리에 인덱스값 2, 세번째 자리에 원본 array [ 1, 2, 3, 4, 5]
// 4 순회 : ....          (true 가 나와서 상황 종료)
// 5 순회 : ....          (x)

list.find(() => {})
list.find((item, index, array) => {return item === 4});
list.find((item) => {return item === 4});
list.find(item => item === 4);








// findIndex 메서드 : 조건에 맞는 요소릐 "인덱스 번호"를 반환하는 메서드
const deskIndex = products.findIndex(item => item.name === "책상");
// deskIndex라는 변수에는 2가 할당됨

const speakerIndex = products.findIndex(item => item.name === "스피커");
// findIndex 메서드는 number 타입의 값을 돌려주도록 강제되어 있음
// 검색에 걸리지 않으면, 결과값으로 -1 을 돌려줌





// filter 메서드 : 조건에 맞는 모든 요소들에 대한 검색을 해주는 메서드
//                              => 그에 대한 반환값은 배열(array)로 반환됨
// products.filter(함수)
// products.filter(() => {} )
// products.filter((이번 순회 때의 해당하는 요소가 들어올 자리) => { return 검색에 필요한 조건을 설정 })
// products.filter((item) => { return item.category === "가구" })
const furniture = products.filter(item => item.category === "가구" );

// furniture = [
//     { id : 3, name : "책상",price : 150000, category: "가구", stock:5 },
//     { id : 4, name : "의자",price : 90000, category: "가구", stock:2 },
// ]

const inStock = products.filter(item => item.stock > 0 ); // 내가 갖고 있는 상품 중 재고 있는 것들을 검색

const food = products.filter(item => item.category === "식품");
// food =[];
// filter 메서드는 배열을 반환값에 준비해놓고, 조건에 맞는 값(true)들을 push함


// 조건에 있는지 없는지 체크를 3방식으로 해본다면,
// find 메서드는 값이 있는지 없는지 체크      =>if (result)
// findIndex 메서드 값이 있는지 없는지 체크   => if (result !== -1)
// filter 메서드로 값이 있는지 없는지 체크    => if(result.length > 0)




// some 메서드 : 배열 요소들 중 하나라도 조건이 만족하면 true, 아니면 false를 반환하는 메서드
//              find 처럼 요소를 순회하다 조건을 만족하는 요소를 만나면 순회를 종료함
//                  => some은 기본값이 false이다가 만족한걸 만나면 true 나옴

// products.some(함수)
// products.some(() => {})
// products.some((이번 순회에 해당하는 요소가 들어노는 자리) = > { return 검색 조건 }
// products.some((p) => { return p.stock === 0})
console.log("some - 품절 상품이 있나?", products.some(p => p.stock===0));  // some - 품절 상품이 있나? true




// every 메서드 : 배열 요소를 순회하며 조건을 판멸하는데, 모두 만족해야 true, 하나라도 만족하지 못하면 false 반환하는 메서드
//                      => every는 기본값이 true이다가 불만족한걸 만나면 false 나옴
console.log("every - 모두 10만원 이하인가?" , products.every(p => p.price <= 100000));






// map 메서드 : 배열 요소를 순회하면서 주어진 함수에 따라 요소를 가공하여 새로운 결과 배열을 리턴하는 메서드
//             리턴 값이 배열이고 그 요소의 갯수는 원본과 같음
// products.map(함수)
// products.map(() => {})
// products.map((item, index, array) => {})
// products.map((item, index, array) => {return item.name});
// products.map(item => {return item.name});'
products.map(item => item.name);
// 1 순회 때 : map의 결과값 : ["노트북"]
// 2 순회 때 : map의 결과값 : ["노트북","마우스"]
// 3 순회 때 :              ["노트북","마우스","책상"]
// 4 순회 때 :              ["노트북","마우스","책상","의자"]
// 5 순회 때 :              ["노트북","마우스","책상","의자","키보드"]
// 최종 map()을 돌린 리턴값 ["노트북","마우스","책상","의자","키보드"]

const salePrices = products.map(item => {
    return { name: item.name, price: item.price * 0.9 }
});

// 1 순회 : 리턴값 : {name: "노트북", price: 1080000 }
// 2 순회 : 리턴값 : {name: "마우스", price: 22500 }
// 3 순회 : 리턴값 : {name: "책상", price: 135000 }
// 4 순회 : 리턴값 : {name: "의자", price: 81000 }
// 5 순회 : 리턴값 : {name: "키보드", price: 63000 }

salePrice = [
    { name: "노트북", price: 1080000 },
    { name: "마우스", price: 22500 },
    { name: "책상", price: 135000 },
    { name: "의자", price: 81000 },
    { name: "키보드", price: 63000 },
];




// reduce 메서드 : 초기값을 마련하고 배열의 요소를 순회해가면서 함수를 실행하며 누적 계산하는 메서드
// reduce(함수,초기값)
// reduce(() =>, 초기값)
// reduce((지금까지의 누적값, 이번 순회에 해당하는 요소) => { return 이번 순회 때 계산한 결과값 }, 초기값)

// products의 재고 합계를 구하는 예제
// products.reduce()
// products.reduce(() => {} , 0)     //우리가 구하고 싶은 값인 "재고 합계"는 초기값이 0
// products.reduce((sum, item) => { return sum+item.scock} , 0)

// reduce가 실행되면 초기값이 0을 세팅
// 1순회 때 -> reduce는 sum에 0, item 이번 순회 요소를 집어넣어줌, 함수 몸통이 실행되어서, 0+3=3을 리턴  -> 이 리턴값이 다음 순회 때 sum 값이 됨
// 2순회 때 -> reduce는 sum에 3, item 이번 순회 요소, 3+0=3을 리턴 -> 다름 순회 sum이 3
// 3순회 때 -> reduce는 sum에 3, item 이번 순회 요소, 3+5=8을 리턴 -> 다름 순회 sum이 8

// 마지막 순회 때 -> 계산을 다 마치고 나온 리턴값이 결과로 나감




// sort 메서드 : 원본 배열의 요소를 순회해가면서 정렬하는 메서드
// 오름차순 (ascending / asc) - 작은 값에서부터 큰 값으로 정렬 할 때     / 가나다순 a~z
// 내림차순 (descending / desc) - 큰 값에서부터 작은 값으로 정렬 할 때   /

// sort(함수)
// sort(() => {})
// sort((앞요소, 뒷요소) => { return 순서를 바꿀지 말지를 결정하는 코드 })
// 순서를 바꿀지 말지를 결정하는 코드 결과값이 양수면 자리를 바꾸고 아니면 지나감

// 안에 들어있는 비교 대상이 숫자라면
const nums = [5, 2, 8, 1];
// nums.sort();
// nums.sort(() => {});
nums.sort((a, b) => { return a- b });   //오름차순
// 첫번째 순회 -> a:5, b:2  -> 5-2=3   => 결과값이 양수가 나왔으므로 자리를 바꿈  => [2,5,8,1]
// 두번째 순회 -> a:5, b:8  -> 5-8=-3  => 결과값이 음수, 그냥 지나감            => [2,5,8,1]
// 세번째 순회 -> a:8, b:1  -> 8-1=7   => 결과값이 양수, 자리를 바꿈            => [2,5,1,8]
// 마지막 순회 -> 맨 앞 요소와 방금 전 순회의 결과를 비교 -> 2-1=1 => 결과값이 양수, a 앞으로 배치됨 => [1,2,5,8]

nums.sort((a, b) => { return b - a; });  // 내림차순


// products의 가격을 오름차순으로 정렬하고 싶다.
// 정렬 대상은 요소에 대해서 정렬하는거지만, 그 비교대상은 요소가 갖고 있는 가격
products.sort((a, b) => { return a.price - b.price; });
// 정렬이 끝나면 products가 변해버렸다
// 그렇다면 , products그래도 있고 새로운 정렬된 녀석을 만들고 싶다면
// 앝은 복사를 해도 되는지 깊은 복사를 해야하는지 판단하고, 그 방법에 따라 객체를 새로 생성한 뒤 sort를 돌리면 된다!



// 비교 대상이 문자라면?
products.sort((a, b) => { return a.name.localeCompare(b.name); });      //오름차순
products.sort((a, b) => { return b.name.localeCompare(a.name); });      //내림차순

// string 타입인 변수에 사용할 수 있느 .localeCompare() 메서드
//          .localeCompare() 메서드 : a 변수를 기준으로 매개변수를 들어온 문자열을 비교해주는 메서드 -1,0,1 중 하나를 반환
//      ("가").localeCompare("나")    => -1           // 앞의 문자가 뒤에 문자보다 앞서있다  => 오름차순
//      ("나").localeCompare("가")    => 1            // 뒤에 문자가 앞에 문자보다 앞서있다  => 내림차순




// 메서드 체이닝


// 재고가 있는 전자 제품의 이름을 가격 낮은 순으로 정렬해서 결과를 보고싶다
// const result1 = products.filter((item) => item.stock > 0);
// const result2 = result1.filter((item) => item.category === "전자");
// result2.sort((a,b) => { return a.price - b.price });
// const result = result2.map(item => { return item.name });
// result.forEach((item) => console.log(item));

// 중간 단계에 있는 값들조차(이 계산 이외에는 쓸모가 없는) 메모리에 저장해서 사용해야 된다.
// 메서드 체이닝 : 연속적으로 일어나야 하는 계산에 대해서 결과값을 따로 저장하지 않고 메서드를 연결 실행하는 것
const temp1 = products.filter((item) => item.stock > 0)
    .filter((item) => item.category === "전자")
    .sort((a,b) => { return a.price - b.price });

temp1.map(item => { return item.name })
    .forEach((item) => console.log(item));






