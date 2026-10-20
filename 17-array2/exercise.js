const products = [
    { id : 1, name : "노트북",price : 1200000, category: "전자", stock:3 },
    { id : 2, name : "마우스",price : 25000, category: "전자", stock:0 },
    { id : 3, name : "책상",price : 150000, category: "가구", stock:5 },
    { id : 4, name : "의자",price : 90000, category: "가구", stock:2 },
    { id : 5, name : "키보드",price : 70000, category: "전자", stock:7 },
];

// map() 메서드를 통해 다음과 같은 화면을 출력하시오
// [
//     '[1 / 5] 노트북 (전자) - 1,200,000원',
//     '[2 / 5] 마우스 (전자) - 25,000원',
//     '[3 / 5] 책상 (가구) - 150,000원',
//     '[4 / 5] 의자 (가구) - 90,000원',
//     '[5 / 5] 키보드 (전자) - 70,000원'
// ]

const result = products.map((item, index, array) => {
    return `[${index+1} / ${array.length}] ${item.name} (${item.category}) - ${item.price.toLocaleString()}원`;
});

// number 타입의 변수(프로퍼티)엔 .toLocaleString() 메서드가 붙음
// .toLocaleString()은 숫자를 이 프로그램을 실행한 해당 지역의 숫자 표기 방법으로 출력해줌
// 우리나라나 미국이나 유럽이나 숫자를 표기할 때 10,000.00
// 중동이나 터키나            숫자를 표기할 때 10.000,00
// -> 이 프로그램을 실행하는 컴퓨터의 OS에 세팅된 지역을 따라서 부여줌

console.log(result);

result.forEach(item => console.log(item));

