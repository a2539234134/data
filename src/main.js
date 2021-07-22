// 先获取两个按钮
const btn_up = document.getElementById('up-title');
const btn_down = document.getElementById('down-title');
const h1 = document.getElementById('title-h1');
const imgss = document.getElementById('imgss');
const quote = document.getElementById('quote');
const info1 = document.getElementById('info1');
const info2 = document.getElementById('info2');
const info3 = document.getElementById('info3');
const info4 = document.getElementById('info4');
let i = 0;

const xhr = new XMLHttpRequest();
xhr.open('GET','http://localhost:27017/news');
xhr.send();

xhr.onreadystatechange = function(){
  if(xhr.readyState===4){
    if(xhr.status >=200 && xhr.status < 300){
      console.log(xhr.response);
      var obj = JSON.parse(xhr.response);
      console.log(obj);
      console.log(obj.length);
      // 打开页面后，默认显示第一条数据
      h1.innerHTML = obj[i].title;
      imgss.innerHTML = obj[i].imgs;
      quote.innerHTML = obj[i].quote;
      info1.innerHTML = obj[i].infoOne;
      info2.innerHTML = obj[i].infoTwo;
      info3.innerHTML = obj[i].infoThree;
      info4.innerHTML = obj[i].infoFour;

      btn_up.onclick = function(){
        if(i!=0){
          --i;
          // console.log(i);
        }else if(i==0){
          i=obj.length-1;
        }
        h1.innerHTML = obj[i].title;
        imgss.innerHTML = obj[i].imgs;
        quote.innerHTML = obj[i].quote;
        info1.innerHTML = obj[i].infoOne;
        info2.innerHTML = obj[i].infoTwo;
        info3.innerHTML = obj[i].infoThree;
        info4.innerHTML = obj[i].infoFour;
        
      }

      btn_down.onclick = function(){
        // obj.length-1 很重要
        if(i < obj.length-1){
          ++i;
          // console.log(i);
        }else if(i == obj.length-1){
          i=0;
        }
        h1.innerHTML = obj[i].title;
        imgss.innerHTML = obj[i].imgs;
        quote.innerHTML = obj[i].quote;
        info1.innerHTML = obj[i].infoOne;
        info2.innerHTML = obj[i].infoTwo;
        info3.innerHTML = obj[i].infoThree;
        info4.innerHTML = obj[i].infoFour;
      }

    }
  }
}
