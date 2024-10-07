let i=5;
setInterval(() => {
    if (i===1) {
        console.log('종료');
        process.exit();
    }
    console.log(i);
    i--;
}, 500);