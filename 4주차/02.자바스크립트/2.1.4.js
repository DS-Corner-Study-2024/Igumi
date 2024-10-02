//화살표 함수
/*const add = (x,y) => x+y;
console.log(add(1,2));*/

const relation= {
    name: 'zero',
    friends: ['nero', 'hero', 'xero'], 
    logFriends() {
        this.friends.forEach(friend=> {
            console.log(this.name, friend);
        })
    },
};
relation.logFriends();