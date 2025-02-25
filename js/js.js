let lastRenderTime = 0
const SNAKE_SPEED = 1

function main(currentTime) {
    window.requestAnimationFrame(main)
    const secondSinceLastRender = (currentTime - lastRemderTime) / 1000
    if (secondSinceLastRender < 1 / SNAKE_SPEED) return


    
    lastRenderTime = currentTime
    console.log(secondSinceLastRender)
}

window.requestAnimationFrame(main)