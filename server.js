const express = require('express')
const mongoose = require('mongoose')

const DB_URL = 'mongodb://localhost:27017/test'
mongoose.connect(DB_URL)
mongoose.connection.on('connected',function(){
  console.log('数据库连接成功')
})

const News = mongoose.model('stus',new mongoose.Schema({
  title: {
    type: String,
    require: true
  },
  imgs: {
    type: String,
    require: true
  },
  quote: {
    type: String,
    require: true
  },
  infoOne: {
    type: String,
    require: true
  },
  infoTwo: {
    type: String,
    require: true
  },
  infoThree: {
    type: String,
    require: true
  },
  infoFour: {
    type: String,
    require: true
  }
}))

const app = express();
app.get('/',function(req,res){
  res.setHeader('Access-Control-Allow-Origin','*')
  res.send('<h1>Hello world!<h1>')
})

app.get('/news',function(req,res){
  res.setHeader('Access-Control-Allow-Origin','*');
  News.find({},function(err,doc){
    //将数据以json格式发送
    res.json(doc); 
  })
})

app.listen(27017,function(){
  console.log('监听27017端口中....');
})