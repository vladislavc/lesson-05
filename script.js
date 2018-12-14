/*

Создайте элемент 'p', при клике на котором появляется картинка размером 100px

При наведении указателя мышки на картинку ее размер должен плавно увеличиваться до 200px

При клике на картинке она должна исчезать

*/

var newp = document.createElement("p")
var newimg = document.createElement("img")

newp.innerText = "Нажми на строку и появится картинка"
newimg.src = "https://s1.1zoom.ru/big0/330/Waves_Ocean_Sea_546989_1280x800.jpg"
newimg.style.width = "100px"
newimg.style.height = "100px"
newimg.style.transition = "transform .5s ease"

document.body.appendChild(newp)

newp.onclick = function(e) {
    this.contains(newimg)
        ? this.removeChild(newimg)
        : this.appendChild(newimg)
}
newimg.onmouseover = function(e) {
    newimg.style.transform = "scale(2)"
}
newimg.onmouseout = function(e) {
    newimg.style.transform = "scale(1)"
}


/* 

Создайте коллекцию html-элементов

Итерируйте эту коллекцию, добавляя с помощью метода addEventListener обработчика clickHandler события click каждому элементу

Создайте несколько различных обработчиков ( массив )

В цикле добавьте каждому элементу "собственного" обработчика события click.

*/


var elemarray = ['p','p','div','img','p']
function settext (e) {
    this.innerText = `Добавляем по клику текст в элемент ${this.nodeName}`
}
function settextandstyle (e) {
    this.innerText = `Добавляем онмаусаут стилизированный текст в элемент ${this.nodeName}`
    this.style.color = "red"
}
function setsrc (e) {
    this.src = "https://s1.1zoom.ru/big0/330/Waves_Ocean_Sea_546989_1280x800.jpg"
}

function addCollection (_parent = "body") {
    var _d = document
    var _body = _d.querySelector(_parent)
    for (var i in elemarray) {
        _curr = _d.createElement(elemarray[i])
        switch (elemarray[i]) {
            case "p":
                _curr.innerText = "Изначальный текст"
                _curr.addEventListener("click", settext)
                break
            case "img":
                _curr.alt = "Картинка клик"
                _curr.style = "width:100px;height:100px;"
                _curr.addEventListener("click", setsrc)
                break
            default:
                _curr.innerText = "Изначальный текст не параграфа"
                _curr.addEventListener("mouseout", settextandstyle)
                break
        }
        _body.appendChild(_curr)
    }
}
addCollection("body")
