let tovar_list = document.querySelector('.tovar_list')

function createNewItem(data) {
    let tovar_box = document.createElement('div')
    tovar_box.classList.add('tovar-box')
    
    let tovar = document.createElement('div')
    tovar.classList.add('tovar')

    let div_a_img = document.createElement('div')
    div_a_img.classList.add('div_a_img')

    let popup_link = document.createElement('a')
    popup-link.classList.add('popup-link')

    let img = document.createElement('img')
    img.classList.add('img')
    img.alt = "у этого товара не найдена картинка"


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

    let a_link = document.createElement('a')
    a_link.classList.add('a_link')


    let a2 = document.createElement('div')
    a2.classList.add('a')

    let a_link2 = document.createElement('a')
    a_link2.classList.add('a_link')


    let punkt4 = document.createElement('div')
    punkt4.classList.add('punkt')

    let p1_4 = document.createElement('p')
    p1_4.classList.add('p1')

    let p2_4 = document.createElement('p')
    p2_4.classList.add('p2')

    let box = document.createElement('button')
    box.classList.add('box')


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

    a.appendChild(a_link)
    a2.appendChild(a_link2)

    info.appendChild(punkt)
    info.appendChild(punkt2)
    info.appendChild(punkt3)
    info.appendChild(punkt4)

    info.appendChild(a)
    info.appendChild(a2)

    popup_link.appendChild(img)
    div_a_img.appendChild(popup_link)

    tovar.appendChild(div_a_img)
    tovar.appendChild(info)

    tovar_box.appendChild(tovar)
    tovar_box.appendChild(box)
}