const colorContainer = document.querySelector('.color-container')
const randomButton = document.querySelector('.color-container button')
const colorText = document.querySelector('.color')
const codeLink = document.querySelectorAll('.code-btn')
const hexChar = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
let code = "RGB"
colorText.textContent = "rgb(0,0,0)"

codeLink.forEach((e) => {
    e.addEventListener('click', () => {
        code = e.textContent
    })
})


const randomNumber = () => {
    if (code === "RGB") {
        return Math.floor(Math.random() * 256)
    } else {
        return hexChar[Math.floor(Math.random() * hexChar.length)]
    }
}

const genrateColor = () => {
    if (code === "RGB") {
        genrateRGB()
    } else {
        genrateHEX()
    }
}

const genrateHEX = () => {
    let hexArr = []
    let HEX = `#`

    for (let i = 0; i < 6; i++) {
        hexArr += [randomNumber()]
    }

    HEX = `#${hexArr}`
    colorContainer.style.backgroundColor = HEX
    colorText.textContent = HEX
}

const genrateRGB = () => {
    let RGB = `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`
    colorContainer.style.backgroundColor = RGB
    colorText.textContent = RGB
}

randomButton.addEventListener('click', () => {
    genrateColor()
})