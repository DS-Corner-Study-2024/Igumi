/*
-path 속성
.sep: 경로 구분자(/) .delimiter: 환경변수 구분자(;)

-path 메소드
.dirname(경로) .extname(경로) .basename(경로, 확장자) .parse(경로) .format(객체) .normalize(경로)
.isAbsolute(경로) .relative(기준경로, 비교경로) .join(경로, ... - 절대경로) .resolve(경로, .. - 상대경로)

+절대경로는 루트폴더가 기준
상대경로는 현재 파일이 기준

노드는 require.main파일을 기준으로 상대경로로 인식

=> path모듈은 \\ \와 같은 경우에 오류가 발생할 수 있는 문제를 알아서 처리한다. 
=> 필요할 때 찾아 쓰기! 앞으로 자주 사용
*/