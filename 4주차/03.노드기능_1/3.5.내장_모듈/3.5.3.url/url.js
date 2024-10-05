const url=require('url');   //url 모듈 안에 url생성자가 있다.

const {URL}=url;
const myURL=new URL('https://github.com/koh0074');  //host 부분이 있어야 한다.
console.log('new URL(): ', myURL);
console.log('url.format(): ', url.format(myURL));   //url 객체를 원래 상태로 조립