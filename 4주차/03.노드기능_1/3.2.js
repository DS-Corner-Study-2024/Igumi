function helloWorld() {
    console.log('Hello World');
    helloNode();
}

function helloNode() {
    console.log('Hello Node');
}

helloWorld();

/*노드를 통해 파일을 실행하려면? 
-콘솔에 node [자바스크립트 파일 경로]
-.js 생략 가능 ex)node 3.2
- '>' REPL일 때 입력하는 것 아님!
-파일이나 폴더 이름에 쓸 수 없는 문자: / \ | < >: " ? *
*/