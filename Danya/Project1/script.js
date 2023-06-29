const list = [
    {
        title:'переводчик',
        description:'программа поозволяющая передвить текст с разных языков',
    },
    {
        title:'бот-магазин',
        description:'сервис, с помощью которого можно купить технику и еще всякое'
    },
    {
        title:'тамагочи',
        description:'копия популряной игры'
    }
]

/*  переменные в которые запишем стрелочки */
const prevArr = document.getElementsByClassName('arrs')[0]
const nextArr = document.getElementsByClassName('arrs')[1]

let counter = 0

function prevSlide(){
    if (counter>0){
        counter-=1
    }
    else{
        counter=2
    }
    updateSlide(counter)
}

function nextSlide(){
    if(counter<list.length){
        counter-=1
    }
    updateSlide(counter)
}

function updateSlide(n){
    /* получаем элементы, которые хотим поменять */
    const title = document.getElementsByClassName('slide_title')[0]
    const text = document.getElementsByClassName('slide_text')[0]
    text.innerHTML=list[n].description
    title.innerHTML=list[n].title
}

prevArr.addEventListener('click',()=>prevSlide())
nextArr.addEventListener('click',()=>nextSlide())
