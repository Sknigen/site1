function myFunction() {
    let a = document.getElementById('name')
    let b = document.getElementById('phone-number')
    let c = document.getElementById('message')
    let client = {
        name : a.value,
        phone : b.value,
        hair : c.value
    }
    if (a.value == '') {
    alert('Введите ваше Имя')
    return false
    } else if (confirm('Ваше имя?   ' + a.value)) {
        
    } else {
        return false
}
    if (b.value > 381000000000) {
        alert('Неверно введен номер телефона, проверте еще раз')
    } else if (b.value < 380000000000) {
        alert('Неверно введен номер телефона, проверте еще раз')
    } else {
        alert('Мы вам перезвоним')  
        
}
}
let mas = ["url('../src/Slider\ img\ 1.png')", "url('../src/Slider\ img\ 2.png')", "url('../src/Sliderimg3.jpg')"]
let i = -1

function back() {
    let obj = document.getElementById('hero-main');

    if (i < mas.length - 1) i++
    else
        i = 0;
        obj.style.backgroundImage = mas[i];
    
}
function next() {
    let obj = document.getElementById("hero-main");

    if (i > 0) i--;
    else
        i = mas.length-1;
        obj.style.backgroundImage = mas[i];
}
let link = document.getElementById("scale-link");


function ChangeScale(size)
{
    link.setAttribute("href", "styles/" + size + ".css");

    SaveScale(size);
}
window.addEventListener("resize", AutoScale); //Масштабируем страницу при растягивании окна

AutoScale(); //Масштабируем страницу после загрузки

function AutoScale()
{
    let width = (document.documentElement.clientWidth);

    //Если вы хотите проверять по размеру экрана, то вам нужно свойство window.screen.width
    if(width > 1280)
    {
   	 ChangeScale("big");
    }
    else if(width <= 1280 && width > 768)
    {
   	 ChangeScale("normal");
    }
    else if(width < 769)
    {
        ChangeScale("small");
    }

}

