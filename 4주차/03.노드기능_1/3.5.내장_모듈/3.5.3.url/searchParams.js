//search 부분 보통 주소를 통해 데이터 전달 키=값, 키가 여러개일 경우 &로 구분
//search 다루기 위해 searchParams사용

const myURL=new URL('https://www.google.com/search?q=%EA%B9%83%ED%97%88%EB%B8%8C&oq=%EA%B9%83%ED%97%88%EB%B8%8C&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTITCAEQLhiDARjHARixAxjRAxiABDIICAIQRRgnGDsyBggDEEUYOzIGCAQQRRg7MgwIBRAjGCcYgAQYigUyCggGEAAYsQMYgAQyBwgHEAAYgAQyBwgIEAAYgATSAQkzMjU1ajBqMTWoAgCwAgA&sourceid=chrome&ie=UTF-8');
console.log('searchParams: ', myURL.searchParams);

/*
.getAll(키) .get(키) .has(키) .keys() .values() .append(키, 값) .set(키, 값) .delete(키) .toString()
*/