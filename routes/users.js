var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//实现用户提交信息，注册时间
//Response 响应
//Request  请求
router.post('/addUser',(req,res,next)=>{
  //console.log(req.body.userName);
  //用户填写的表单信息可以通过req.body获取到
  res.send('点击注册了')
  console.log(req.body.userName)
  console.log(req.body.password)
  console.log(req.body.passwordC)
})
module.exports = router;
