const canvas = document.querySelector('canvas')
const ctx = canvas.getContext("2d")

const size = 30

const snake = [
    { x: 200, y: 200 },
    { x: 230, y: 200 },
    //{ x: 260, y: 200 },
    //{ x: 290, y: 200 },
    //{ x: 290, y: 230 }
]

let direction, loopId

const drawSnake = () => {
    ctx.fillStyle = "#9B3CBE"
   
    snake.forEach((position, index) => {

        if (index == snake.length - 1){
            ctx.fillStyle = "#5B2295"
        }
        ctx.fillRect(position.x, position.y, size, size)
    })
} 

const moveSnake = () => {
    if (!direction) return

    const head = snake[snake.length - 1]

    if (direction == "right") {
        snake.push({ x: head.x + size, y: head.y})
    }

    
    if (direction == "left") {
        snake.push({ x: head.x - size, y: head.y})
    }

    
    if (direction == "down") {
        snake.push({ x: head.x , y: head.y + size})
    }

    
    if (direction == "up") {
        snake.push({ x: head.x , y: head.y - size})
    }
    snake.shift()
}

const gameLoop = () => {
    clearInterval(loopId)
    ctx.clearRect(0, 0, 600, 600)

       
    moveSnake() 
    drawSnake() 

   loopId = setTimeout(() => {
        gameLoop()
    }, 300)
}

gameLoop()

// 35:33 PARADA OFC