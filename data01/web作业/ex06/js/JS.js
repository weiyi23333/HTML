function post() {
    document.querySelector('.post').style.display = 'block';
  }
  var tou = ["tou01.jpg", "tou02.jpg", "tou03.jpg", "tou04.jpg"];
  function postSubmit() {
    var newLi = document.createElement("li");
    var touDiv = document.createElement("div");
    var touImg = document.createElement("img");
    var titleH1 = document.createElement("h1");
    var titleH2 = document.createElement("h2");
    var contentP = document.createElement("p");
    var nameSpan = document.createElement("span");
    var timeSpan = document.createElement("span");
  
    var iNum = Math.floor(Math.random() * 4);
    touImg.src = `images/${tou[iNum]}`;
  
    var title = document.querySelector('.title').value;
    titleH1.textContent = title;
 
    
  
    var name = document.querySelector('#sel').value;
    nameSpan.textContent = name;
  
    var myDate = new Date();
    var currentDate = `${myDate.getFullYear()}-${myDate.getMonth() + 1}-${myDate.getDate()} ${myDate.getHours()}:${myDate.getMinutes()}`;
    timeSpan.textContent = currentDate;
  
    touDiv.appendChild(touImg);
    contentP.appendChild(nameSpan);
    contentP.appendChild(timeSpan);
    newLi.append(touDiv, titleH1, contentP);
  
    var ul = document.querySelector('.bbsList');
    ul.insertBefore(newLi, ul.firstChild);
    document.querySelector('.post').style.display = 'none';
  }