//구조 분해 할당
const CandyMachine = {
    status: {
        name: 'node',
        count: 5,
    },
    getCandy() {
        this.status.count--;
        return this.status.count;
    },
};
const {getCandy, status: {count}}=CandyMachine;
