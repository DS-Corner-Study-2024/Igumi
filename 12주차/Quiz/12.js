/*
1. HTTP
2. 양방향
3. Socket.IO
4. 폴링 방식
5. 방(room)
6. 몽고디비
7. 소켓 이벤트 리스너
*/
//8
/*
const Room = require('../schemas/room');
const Chat = require('../schemas/chat');
const { removeRoom: removeRoomService } = require('../services'); 
...
exports.removeRoom = async (req, res, next) => {
  try {
    await removeRoomService(req.params.id);		---(1)
    res.send('ok');					---(2)
  } catch (error) {
    console.error(error);
    next(error);
  }
};
*/
//9
/*
const Room = require('../schemas/room');
const Chat = require('../schemas/chat');
const { removeRoom: removeRoomService } = require('../services'); 
...
exports.removeRoom = async (req, res, next) => {
  try {
    await removeRoomService(req.params.id);		---(1)
    res.send('ok');					---(2)
  } catch (error) {
    console.error(error);
    next(error);
  }
};
*/s