// console.log("실행테스트");
console.log("======연산자======");
console.log();
a = 10;
b = 3;
//단순 연산자
console.log("===단순연산자===")
console.log("원본변수 a: " + a+ ",\t b : " + b );

console.log("a + b = " + (a + b) ); // 13
console.log("a - b = " + (a - b) ); // 7
console.log("a * b = " + (a * b) ); // 30
console.log("a / b = " + (a / b) ); // 3.3333
console.log("a % b = " + (a % b)); // 1

console.log("a ** b = " + a ** b); // 1000 ES6에 추가됨.
console.log("a * a * a = " + a * a * a); //1000 이걸 위에서 좀 더 쉽게 할 수 있다.
console.log();

a++;
console.log("a++ = " + a);
++a;
console.log("++a : " + a);
--a;
console.log("--a : " + a);
a--;
console.log("a-- : " + a);
console.log();

console.log("a = 100 : " + (a = 100));
console.log("a += 10 : " + (a +=10));
console.log("a -= 10 : " +(a -=10));
console.log("a *= 2 : " + (a *= 2));
console.log("a /= 2 : " + (a/=2));
console.log("a %= 3 : " + (a %= 3));
console.log("b **= 2 : " + (b **= 2));
console.log();

c = "문자열" + "연결" + "연산자";
console.log("'문자열' + '연결' + '연산자' : " + c );
console.log();

//구조연산자

a = 10;
b = 3;
console.log("=====비교 연산자 ====");
console.log("10 == 5 : " + (10 == 5));
console.log("10 > 5 : " + (10 > 5));
console.log("10 >= 10" + (10 >= 10));
console.log("10 < 5 : " +(10 < 5));
console.log("10 <= 5 : " + (10 <= 5));
console.log("10 != 5 : " + (10 != 5 ));
console.log();

// 자바스크립트에서는 간편한 간소화된 문법을 사용하기 때문에 문자열 데이터 타입의
// 숫자와 숫자 데이터 타입의 숫자의 비교 연산이 가능함
// ==, ===의 차이점은 '==' , ' != '은 데이터타입확인하지 않고 비교 연산만 진행.
// ===, !==는 값과 데이터타입을 모두 확인하여 비교 연산을 진행
console.log("=====연산자() 비교 ====");
console.log("'5' == 5 : " + ('5' == 5 ));
console.log("'5' === 5 : " + ('5' === 5));
console.log("'5' != 5 : " + ('5' != 5 ));
console.log("'5' !== 5 : " + ('5' !== 5 ));
console.log();

//논리형
console.log("====논리형====")
console.log(" 10 > 5 && '5' === 5 :" + (10 > 5 && '5' === 5));
console.log("10 > 5 || '5'  === 5 : " +  (10 > 5 || '5'  === 5)) ;
console.log("!('5' !=5 ) : " + (!('5'!=5 )));
console.log()


// typeof : 데이터타입. 지정한 변수의 데이터타입을 확인
// instanceof : 지정한 변수가 지정한 클래스의 객체인지 확인
console.log("======typeof=====")
console.log("typeof a : " + (typeof a));  //number
a = "자바스크립트";
console.log("typeof a : " + (typeof a)); //string
let time = new Date();  //객체생성
console.log("instanceof : " + (time instanceof Date));  //true
console.log()

//연산자의 우선 순위
console.log("====연산자의 우선순위 ====");
// 1. () 괄호
// 2. (.):멤버(온점) , [] : 배열의 멤버 , ? : 선택적 체이닝 , () : 함수호출
// 3. new
// 4. ++, --, !, ~, typeof, void, delete
// 5. **, * , / , %
// 6. +, -
// 7.  <<, >>, >>> : 비트 연산
// 8. in, instanceof, <, <=, >, >=, ==, ===, !=, !==
// 9. &, ^,|
// 10. &&, ||, ?:
// 11. =, +=, -=, *=, /=, %=, **=









