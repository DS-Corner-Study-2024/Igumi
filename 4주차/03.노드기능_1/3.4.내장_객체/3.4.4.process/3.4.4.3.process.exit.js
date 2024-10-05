//실행중인 노드 프로세스를 수동으로 멈추기 위해

let i=1;
setInterval(()=> {
    if(i===5) {
        console.log('종료!');
        process.exit();
    }
    console.log(i);
    i++;
},1000);