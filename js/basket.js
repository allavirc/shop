let bodyBox = document.querySelector('.body_box')

function createNewItem(data) {
    let box = document.createElement('div')
    box.classList.add('box')
    
    let tovarBox = document.createElement('div')
    tovarBox.classList.add('tovar-box')

    let tovar = document.createElement('div')
    tovar.classList.add('tovar')
    // tovar.innerText = 'Цена'

    let div_img = document.createElement('div')
    div_img.classList.add('div_img')
    
    let img = document.createElement('img')
    img.classList.add('img')
    img.src = data['image']
    img.alt = "у этого товара не найдена картинка"

    div_img.appendChild(img)

    let info = document.createElement('div')
    info.classList.add('info')

    let punkt = document.createElement('div')
    punkt.classList.add('punkt')

    let p1 = document.createElement('p')
    p1.classList.add('p1')

    let p2 = document.createElement('p')
    p2.classList.add('p2')

    let punkt2 = document.createElement('div')
    punkt2.classList.add('punkt')

    let p1_2 = document.createElement('p')
    p1_2.classList.add('p1')

    let p2_2 = document.createElement('p')
    p2_2.classList.add('p2')

    let punkt3 = document.createElement('div')
    punkt3.classList.add('punkt')

    let p1_3 = document.createElement('p')
    p1_3.classList.add('p1')

    let p2_3 = document.createElement('p')
    p2_3.classList.add('p2')

    let a = document.createElement('div')
    a.classList.add('a')

    let link_a = document.createElement('a')
    link_a.classList.add('link_a')

    let a2 = document.createElement('div')
    a2.classList.add('a')

    let link_a2 = document.createElement('a')
    link_a2.classList.add('link_a')

    let punkt4 = document.createElement('div')
    punkt4.classList.add('punkt')

    let p1_4 = document.createElement('p')
    p1_4.classList.add('p1')

    let p2_4 = document.createElement('p')
    p2_4.classList.add('p2')


    p1.innerText = "НаименованиЕ:"
    p2.innerText = data['title']
    punkt.appendChild(p1)
    punkt.appendChild(p2)

    p1_2.innerText = "Артикул:"
    p2_2.innerText = data['article']
    punkt2.appendChild(p1_2)
    punkt2.appendChild(p2_2)

    p1_3.innerText = "Страна изготовителя:"
    p2_3.innerText = data['code']
    punkt3.appendChild(p1_3)
    punkt3.appendChild(p2_3)

    p1_4.innerText = "Цена:"
    p2_4.innerText = data['price']
    punkt4.appendChild(p1_4)
    punkt4.appendChild(p2_4)

    a.appendChild(link_a)
    a2.appendChild(link_a2)

    info.appendChild(punkt)
    info.appendChild(punkt2)
    info.appendChild(punkt3)
    info.appendChild(punkt4)

    info.appendChild(a)
    info.appendChild(a2)

    tovar.appendChild(div_img)
    tovar.appendChild(info)
    tovarBox.appendChild(tovar)
    box.appendChild(tovarBox)

    box.innerHTML += `<div class="count_container">
    <div style="height: 40px;">Выберите количество</div>
    <div class="counter" data-counter>

      <div class="counter__button counter__button_minus">-</div>
      <div class="counter__input"><input type="text" disabled placeholder="0"></div>
      <div class="counter__button counter__button_plus">+</div>

    </div>

    <div class="button"><a href="#">Удалить товар из корзины</a></div>

  </div>`


    bodyBox.appendChild(box)

}

async function getDataFromServer() {
    let result = await fetch("http://172.28.0.76:8000/api/v1/products", {
        method: "GET",
        headers: {
            Authorization: `JWT ${localStorage.getItem('access')}`
        }
    })
    .then(res => res.json())
    .then(data => {
        if(data['results'].length >= 0) {
            data['results'].forEach(element => {
                createNewItem(element)
            });
        }
    })
}

getDataFromServer()