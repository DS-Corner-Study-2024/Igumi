/*
1. 몽고디비
2. 컴퍼스
3. CRUD
4. ODM
5. 자바스크립트 객체
6. 주소
7. _id
*/

//8
/*
nodejs> db.users.updateOne({ name: 'nero' }, { $set: { comment: '안녕하세요 이 필드를 바꿔보겠습니다!' } });
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 0,
  upsertedCount: 0
}

//9
nodejs> db.users.find({}, { _id: 0, name: 1, married: 1 });
[
  { "name" : "zero", "married" : false },
  { "name" : "nero", "married" : true }
]
*/