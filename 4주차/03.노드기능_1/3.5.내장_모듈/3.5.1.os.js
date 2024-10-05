//노드는 운영체제에 접근, 요청한 주소 정보 가져오기 등 다양한 기능을 하는 모듈 제공

const os=require('os');

console.log('os.arch(): ', os.arch());

console.log('os.homedir(): ', os.homedir());

console.log('os.freemem(): ', os.freemem());

/*->일반적으로 자주 사용되진 않는다.
-운영체제 정보 
.arch() .platform() .type() .uptime() .hostname() .release()
-경로
.homedir() .tmpdir()
-메모리 정보
.cups() .freemem() .totalmem()
-에러 정보
.constants
*/