const startBtn = document. querySelector('#start')
const screens = document.querySelectorAll('.screen')
const timeList = document.querySelector('#time-list')
const timeEl = document.querySelector('#time')
const board = document.querySelector('#board')
const colors = ['#7fff00','#00ffff','#ff1493','#adff2f','#ffffff','#9acd32']
let time = 0
let score = 0

startBtn.addEventListener('click', (event) => {
event.preventDefault()
screens[0].classList.add('up')
})

timeList.addEventListener('click', event =>{
if(event.target.classList.contains('time-btn')){
time = parseInt(event.target.getAttribute('data-time'))
screens[1].classList.add('up')
startGame()
}
}) 

board.addEventListener('click', event => {
if(event.target.classList.contains('circle')){
score++
event.target.remove()
createRandomCircle()

}
})



function startGame() {
setInterval(decreaseTime, 1000)
createRandomCircle()
setTime(time)
}

function decreaseTime(){
if ( time === 0){
finishGame()
}else{
    let current = --time
    if (current < 10 ){
    current = `0${current}`  
}
setTime(current)
}
}

function setTime(value){
timeEl.innerHTML =`00:${value}`
}

function finishGame(){
timeEl.parentNode .classList.add('hide')
board.innerHTML = `<h1> Выстрелы: <span class="primary"> ${score}</span></h1>`
}

function createRandomCircle(){
const circle = document.createElement('div')
const {width, height} = board.getBoundingClientRect()
const size = getRandomNumbe(15,45)
const x = getRandomNumbe( 0, width - size)
const y = getRandomNumbe( 0, height - size)
const color = getRandomColor()

circle.classList.add('circle')
circle.style.width = `${size}px`
circle.style.height = `${size}px`
circle.style.top = `${y}px`
circle.style.left = `${x}px`
circle.style.backgroundColor = color
circle.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
board.append(circle)


}

 function setColor(event) {
    const element = event.target
    const color = getRandomColor()
    element.style.backgroundColor = color
    }
    
function getRandomColor(){ 
return colors[Math.floor(Math.random()*colors.length)]
 }

 function getRandomColor(){ const index = Math.floor(Math.random() * colors.length)
    return colors[index] }

function getRandomNumbe(min,max){
return Math.round(Math.random()*(max-min)+min)
}

