/*quiz
1. (map()), (filter()) 메소드는 원본 배열을 변경하지 않고 새로운 배열을 반환한다.

2. 배열의 각 요소에 대해 주어진 함수를 한 번씩 호출하는 메소드는 (.forEach()) 이다.

3. 객체에 저장된 함수를 (메소드)라고 부른다.

4. (delete) 연산자를 사용하여 객체의 속성을 삭제할 수 있다.

5. 메소드 내부에서 (this) 를 사용하면, 그 객체의 다른 속성이나 메소드에 접근할 수 있다.

6. 키의 값에 접근하는 방법은 총 2가지로, (점) 연산자를 활용하는 방법과 (대괄호) 표기법을 활용하는 방법이 있다.

7. 내부 속성의 값을 반환하는 메소드는 (getter)이고, 속성 값을 안전하게 재할당할 수 있도록 해주는 메소드는 (setter)이다.*/


//Q.8
const numbers=[10,20,30,40,50];

numbers.forEach((num)=>{
    console.log(num);
})


//Q.9
const car={
    brand:"Tesla",
    model: "S",
    batteryLevel: 85,
    provideInfo() {
        return `This is a ${this.brand} ${this.model}, and the battery level is at ${this.batteryLevel}%.`
    }
};

console.log(car.provideInfo());