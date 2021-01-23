var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: 'Express'});
});
//首页路由配置
// router.get('/index',function(req,res){
//   res.render('index',{})
// });
//登录路由配置
router.get('/login',function(req,res){
  res.render('login',{})
});
//文章详情页路由配置
router.get('/details',function(req,res){
  res.render('details',{})
})
//写文章页路由配置
router.get('/write',function(req,res){
  res.render('write',{})
})
//文章注册页路由配置
router.get('/zhuce',function(req,res){
  res.render('zhuce',{})
})
module.exports = router;
