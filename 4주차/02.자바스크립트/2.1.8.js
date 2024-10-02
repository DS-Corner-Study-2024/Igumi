//async/await: 프로미스를 사용한 코드를 더 깔끔하게 해준다.

async function findAndSaveUser(Users) {
    try {
        let user=await Users.findOne({});
        user.name='zero';
        user=await user.save();
        user=await Users.findOne({gender: 'm'});
    } catch(error) {
        console.error(error);
    }
}

//중첩되는 콜백 함수를 프로미스->async/await로 바꾸면 코드가 훨씬 간결해 진다. (for문과 화살표 함수로 표현가능!)