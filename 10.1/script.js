const button = document.querySelector('.testBtn');
const icon1 = document.querySelector('.btn_icon1');
const icon2 = document.querySelector('.btn_icon2');

icon1.style.display = 'block';
icon2.style.display = 'none';

let changeIcon = function (){
    if (icon1.style.display == 'block'){
        icon1.style.display = 'none';
        icon2.style.display = 'block';
    }else if(icon2.style.display = 'block'){
        icon2.style.display = 'none';
        icon1.style.display = 'block';
    }
}

button.onclick = function(){
changeIcon();
}

// Я думаю что есть более простой способ через classList.toggle 
// c присвоением класса активности допустим , очень долго пытался ничего не вышло =(
//  удалялся класс active у одного дива но к другому не присваивался
// Можно ли оставить тут примерный код о котором я говорил? 