// write your code here
let baseUrl =  'http://localhost:3000/ramens'
let imgDiv = document.querySelector('#ramen-menu')
let deetsDiv = document.querySelector('#ramen-detail')
let deetsImg = document.getElementsByClassName('detail-image')[0]
let h2 = document.getElementsByClassName('name')[0]
let h3 = document.getElementsByClassName('restaurant')[0]
let rating = document.querySelector('#rating-display')
let comment = document.querySelector('#comment-display')
let form = document.querySelector('#new-ramen')
let newName = document.querySelector('#new-name')
let newRestaurant = document.querySelector('#new-restaurant')
let newImg = document.querySelector('#new-image')
let newRating = document.querySelector('#new-rating')
let newComment = document.querySelector('#new-comment')
// console.log(newRating)
// console.log(newComment)

function init (){
    fetch (baseUrl)
    .then (resp => resp.json())
    .then (noodles => {
        console.log(noodles)
        noodles.forEach(renderNoodles)
    })
}

function renderNoodles (noodle){
    noodleImg = document.createElement('img')
    noodleImg.src = noodle.image
    noodleImg.id = noodle.id
    imgDiv.append(noodleImg)
    noodleImg.addEventListener("click", (e) => {
        console.log(e)
        deetsImg.src = noodle.image
        h2.textContent = noodle.name
        h3.textContent = noodle.restaurant
        rating.textContent = noodle.rating
        comment.textContent = noodle.comment
    })
}

form.addEventListener('submit', uploadNew)

function uploadNew (e){
    e.preventDefault()
    console.log(e)
    let newUpperImg = document.createElement('img')
    newUpperImg.src = newImg.value
    imgDiv.append(newUpperImg)
    newUpperImg.addEventListener ('click', (e) => {
        console.log(e)
        deetsImg.src = newImg.value
        h2.textContent = newName.value
        h3.textContent = newRestaurant.value
        rating.textContent = newRating.value
        comment.textContent = newComment.value
    })
}

init()