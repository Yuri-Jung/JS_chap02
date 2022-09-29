console.log("----문자열함수----");

// 문자열
// 문자열 변수 사용 시 선언 방법

let str1 = "일반적인 =을 사용한 방법";
let str2 = new String("new키워드를 사용한 방법");

console.log( str1);
console.log(str2);

str1 = "test";
str2 = new String("test");
console.log("일반적인 =을 사용한 방법" + str1);
console.log("new키워드를 사용한 방법" + str2);

//하나는 = 하나는 new
console.log("str1 == str2 : " + (str1 == str2));
console.log("str1 == str2 : " + (str1 === str2));

//둘다 일반적인 방법으로 선언한 경우
str3 = "test";
str4 = "test";
console.log("str3==str4 : " + (str3 == str4));
console.log("str3===str4 : " + (str3 === str4));

// 둘 다 new 키워드 사용하여 생성
str5 = new String("test");
str6 = new String("test");
console.log("str5==str6 : " + (str5 == str6));
console.log("str5===str6 : " + (str5 === str6));


// length : 문자열의 길이를 출력
// slice() : 문자열의 일부를 추출, 원본은 그대로 두고 새문자열을 반환
//           끝 index는 포함하지 않는다.
// 마이너스 값 사용 가능
// 사용법 :
//   변수명.slice(시작index, 끝index);
//   변수명.slice(시작index);
let str7 = "사과, 바나나, 파인애플";
console.log("원본 문자열 : " + str7);
let str8 = str7.slice(4);
console.log("slice(4)로 잘라낸 문자열 : " + str8);
str8 = str7.slice(4,7);
console.log("slice(4,7)로 잘라낸 문자열 : " + str8)
str8 = str7.slice(-9,-6); //뒤에서부터 카운트(-1이 시작). 가장 마지막 값은 나오지 않으니까 (,)는 출력안됨
console.log("slice(-9,-6)로 잘라낸 문자열 : " + str8)
str8 = str7.slice(-9); //뒤에서부터 카운트
console.log("slice(-9)로 잘라낸 문자열 : " + str8)

console.log();


// substring() : slice()와 비슷한 기능, 원본은 그대로 두고 새 문자열을 반환함
// 양수만 사용가능
// 사용법 :
// 변수명.substring(시작index,끝index);
// 변수명.substring(시작index);
//가장 작은 값이 0이기 때문에 (-)를 사용하면 가장 작은 값은 0으로 변환하여 문자열을 가져옴
console.log("원본 문자열 : " + str7);
str8 = str7.substring(4);
console.log("substring(4)로 가져온 문자열 : " +str8);
str8 = str7.substring(4,7);
console.log("substring(4,7)로 가져온 문자열 : " +str8);
str8 = str7.substring(-9);
console.log("substring(-9)로 가져온 문자열 : " +str8); //인식못하고 0부터 가져온다.
str8 = str7.substring(-9,-6);
console.log("substring(-9,-6)로 가져온 문자열 : " +str8); //역시나 (-)를 0 인식못함.
console.log();

// substr() : slice()와 비슷한 기능, 두 번째 매개변수가 추출할 문자열의 길이를 뜻함. 몇 번부터 몇 개 가져와라
//            두번째 매개변수가 없을 경우 문자열의 끝까지 가져옴
// 사용법 :
//    변수명.substr(시작index, 글자수);
//    변수명.substr(시작index);
console.log("원본문자열 : " + str7);
str8 = str7.substr(4,3);
console.log("substr(4,3)으로 가져온 문자열 : " + str8);
str8 = str7.substr(4);
console.log("substr(4)로 가져온 문자열 : " + str8);
console.log();

// replace() : 검색한 문자를 지정한 문자로 변환, 검색된 첫번째 문자열만 변경,
//             검색된 모든 문자열을 변경하려면 정규표현식을 사용해야함.(요거 쪼금 어려움)
//             원본은 그대로 두고 새 문자열을 반환함
// 사용법:
//     변수명.replace(검색할 문자열, 변경할 문자열);
console.log("원본 문자열 :" + str7);
let str9 = str7.replace("바나나", "몽키바나나");
console.log("replace() 사용 후 : " + str9); //변환된 후 출력됨

//공백기호없애기
str9 = str7.replace(", ",""); //(,)와 공백기호 없앰 첫번째 껏만 사라짐.
console.log("replace()로 문자 삭제 : " + str9);
//전체 다 없애고 싶다면
str9 = str7.replace(/, /g, "");
console.log("replace()와 정규표현식으로 검색되는 모든 문자 변경 : " + str9);
console.log();

// toUpperCase() : 영문자를 모두 대문자로 변경
// 사용법 : 새 변수 = 변수명.toUpperCase();
let str10 = "Hello World";
console.log("원본 문자열 : " + str10);
str11 = str10.toUpperCase();
console.log("toUpperCase() 사용 후 "+str11);


// toLowerCase() : 영문자를 모두 소문자로 변경
// 사용법 : 새 변수 = 변수명.toLowerCase();
console.log("원본 문자열 : " + str10);
str11 = str10.toLowerCase();
console.log("toLowerCase() 사용 후 "+str11);
console.log();

//데이터베이스 다룰 때 많이 사용됨 toUpperCase() / toLowerCase()

// concat() : 2개 이상의 문자열을 하나의 긴 문자열로 변환, 새 문자열로 반환
// 사용법 : 새 변수 = 문자열1.concat(문자열2);
console.log("원본문자열 str10: " + str10 + "\t str11 : " + str11);
str12 = str10.concat(" ",str11);
//concat()이나 문자열 + 한 것 결과가 동일하게 나온다.
console.log("concat()사용 후 : " + str12);
str12 = str10 + " " + str11;
console.log("str10 + ' ' + str11 : " + str12);

console.log();


// trim() : 문자열에 포함된 앞,뒤의 공백을 삭제함
// 사용법 : 새 변수 = 문자열.trim();
const str13 = "     공백이 많은 문자열      "
console.log("원본문자열 : " + str13);
let str14 = str13.trim();
console.log("trim()사용 후 : " +str14);

console.log();

// charAt() : 지정한 index에 있는 문자를 반환. 지정한 문자 딱 한개만 나옴
// 사용법 : 새 변수 = 문자열.charAt(index);
console.log("원본문자열 : " + str13);
str14 = str13.charAt(5);
console.log("charAt(5)로 가져온 문자 : " + str14);
console.log();

// split() : 문자열을 지정한 문자를 기준으로 하여 전부 잘라내어 배열로 반환함.
// 굉장히 많이 사용됨
// 사용법 : 새 배열 = 문자열.split(문자);
const str15 = "사과,배,감,귤,복숭아,포도";
console.log("원본 문자열 : " + str15);
console.log(typeof str15);  //string
let arr1 = str15.split(",");
console.log("split() 사용후 : " );
console.log(arr1);
console.log(typeof arr1); //object (배열)로 출력됨
console.log();


// indexOf(): 문자열 내에서 지정한 검색어를 검색하여 해당 index 번호를 반환 앞에서 뒤로
// 사용법 :
//      변수 = 문자열.indexOf(검색어);
//      변수 = 문자열.indexOf(검색어, 검색 위치);
const str16 = "replace()와 정규표현식으로 검색되는 모든 문자 변경 : 사과바나나파인애플";
console.log("원본문자열 : " + str16);
let index = str16.indexOf("모든");
console.log("indexOf('모든')의 위치 :" + index); //24번째에 '모든'이 나온다.
index = str16.indexOf(" ", 30); //뒤에서 29번째
console.log("indexOf(' ',30)의 위치 :" + index);
console.log();

// lastIndexOf(): 문자열 내에서 지정한 검색어를 뒤에서부터 검색하여 해당 index번호 반환 뒤에서 앞으로
// 사용법 :
//      변수 = 문자열.lastIndexOf(검색어);
//      변수 = 문자열.lastIndexOf(검색어, 검색 위치);
console.log("----lastIndexOf()----");
console.log("원본문자열 : " + str16);
index = str16.lastIndexOf(" "); //뒤에서부터 세었을 때 처음으로 나오는 공백
console.log("lastIndexOf(' ')의 위치 :" + index);
// index = str16.lastIndexOf(" ", 30); //30번 이후로 검색했을 때 처음으로 나오는 공백
// console.log("indexOf(' ',30)의 위치 :" + index);
index = str16.lastIndexOf(" ", 17);
console.log("indexOf(' ',17)의 위치 :" + index);
console.log()

// search() : indexOf()와 비슷한 기능을 가지고 있다. 정규표현식에서 사용가능
// indexOf()와 달리 두 번째 매개변수가 없다.
// 사용법 :
//      변수 = 문자열.search(문자열);
console.log("----search()----");
const str17 = "사과,배,감,귤,복숭아,포도,사과,배,감,귤,복숭아,포도";
console.log("원본 문자열 : " + str17);
index = str17.search("감");
console.log("seatch('감')으로 검색한 위치 : " + index);
console.log();

// match() : 정규표현식에서 사용. 검색된 내용을 배열로 변환
// 사용법 :
//      새 배열 = 문자열.match();
console.log("----match()-----")
console.log("원본 문자열 : " + str17);
arr1 = str17.match(/귤/g);
console.log("match(/귤/g)로 검색 : ");
console.log(arr1);
console.log();


// includes() : 지정한 문자열이 존재하는지 아닌지 확인, ES6에서 사용.
// 사용법 :
//      변수 = 문자열.includes(문자열);
console.log("----includes()-----");
console.log("원본 문자열 : " + str17);
let bValue = str17.includes("귤");
console.log("includes('귤')로 확인 : " + bValue); //귤이 들어있으니 true
bValue = str17.includes("한라봉");
console.log("includes('한라봉')로 확인 : " + bValue);

//외전) indexOf로도 확인가능하다?!
index = str17.indexOf("귤"); //0보다 크니 존재한다.
console.log("indexOf('귤')로 확인 : " + index);
index = str17.indexOf("한라봉");
console.log("indexOf('한라봉')로 확인 : " + index); //0보다 작게 나왔으니 없다.
console.log();

// startWith() : 지정한 문자열로 시작하면 true, 아니면 false
// 사용법:
//      변수 = 문자열.startWith(문자열);
console.log("----startWith()-----");
console.log("원본 문자열 : " + str17);
bValue= str17.startsWith("사과");
console.log("startsWith('사과')로 확인 : " + bValue);
bValue= str17.startsWith("바나나");
console.log("startsWith('바나나')로 확인 : " + bValue);
console.log();

// endWith() :  지정한 문자열로 종료하면 true, 아니면 false
console.log("----endWith()-----");
console.log("원본 문자열 : " + str17);
bValue= str17.endsWith("포도"); // 포도로 끝나니까 true
console.log("endsWith('포도')로 확인 : " + bValue);
bValue= str17.endsWith("바나나");
console.log("endsWith('바나나')로 확인 : " + bValue);
console.log();

