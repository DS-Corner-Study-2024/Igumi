/*
1. 컨트롤러
2.  1:N / N:M
3. Passport 
4. multer
5. X, 여러 번 응답하면 에러 발생
6. dotenv / .env 
7. routes / modules / views
*/

//8
router.post('/img', isLoggedIn, upload.single('img'), afterUploadImage);

//9
exports.renderProfile = (req, res) => {
    res.render('profile', { title: '내 정보 - NodeBird' });
};