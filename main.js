let liItems = document.querySelectorAll('ol li')
let ulItems = document.querySelectorAll('ul li')
let images = document.querySelectorAll('img')
let imgRow = document.querySelector('#row')
let delAll = document.querySelector('#destroy-all')

console.log(liItems);
console.log(ulItems)
console.log(images)
console.log(delAll)


for (let i = 0; i < liItems.length; i++) {
    // console.log(liItems[i].parentElement)
    liItems[i].addEventListener('click', (event) => {
        event.target.style.textDecoration = 'line-through'
    })
}


for (let i = 0; i < ulItems.length; i++) {
    // console.log(liItems[i].parentElement)
    ulItems[i].addEventListener('click', (event) => {
        event.target.style.opacity = 0.3
    })
}


for (let i = 0; i < images.length; i++) {
    // console.log(liItems[i].parentElement)
    images[i].addEventListener('click', (event) => {
        images[i].remove()
    })
}

delAll.addEventListener('click', function(){
    liItems.forEach((li) => {
        li.remove()
    })
    ulItems.forEach((li) => {
        li.remove()
    })
    imgRow.remove()
})