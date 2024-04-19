var fileinput = document.querySelector("#file-input");
var canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

var brightnessFeedback = document.querySelector("#brightness-feedback")
var grayscaleFeedback = document.querySelector("#greyscale-feedback")
var blurFeedback = document.querySelector("#blur-feedback")

var brightness = document.querySelector("#brightness")
var greyscale = document.querySelector("#Grey-Scale")

// // CROP
// var width_crop = document.querySelector("#width-crop")
// var height_crop = document.querySelector("#height-crop")

// Flip/Rotate
var blur = document.querySelector("#blur")
// var flip = document.querySelector("#flip")


const settings = {}

let image = null


function resetSetings() {

    settings.brightness = "100"
    settings.greyscale = "0"
    settings.blur = "0"

    brightness.value = settings.brightness
    greyscale.value = settings.greyscale
    blur.value = settings.blur

}


function UpdateSetting(key, value) {
    if (!image) return
    settings[key] = value
    renderImage()
}


function generateFilter() {
    const { brightness, greyscale,blur } = settings
    return `brightness(${brightness}%) grayscale(${greyscale}%) blur(${blur}px)`
}


function renderImage() {
    canvas.width = image.width
    canvas.height = image.height

    ctx.filter = generateFilter()
    ctx.drawImage(image, 0, 0)

   //const imageTranslate = Rotate()
//     console.log(imageTranslate)
//    ctx.translate(imageTranslate, imageTranslate)

}


brightness.addEventListener("change", () => {
    UpdateSetting("brightness", brightness.value)
    brightnessFeedback.innerHTML = brightness.value + "%"
})


greyscale.addEventListener("change", () => {
    UpdateSetting("greyscale", greyscale.value)
    grayscaleFeedback.innerHTML = greyscale.value + "%"
})


blur.addEventListener("change", () => {
    UpdateSetting("blur", blur.value)
    blurFeedback.innerHTML = blur.value + "%"
})


function UpdateRotate(key, value) {
    if (!image) return
    settings[key] = value
    console.log(settings[key])
//    Rotate()
}


fileinput.addEventListener("change", () => {
    image = new Image
    image.addEventListener("load", () => {
        resetSetings()
        renderImage()
        // Rotate()
    })
    image.src = URL.createObjectURL(fileinput.files[0])

})

// function Rotate() {
//     const { rotate } = settings
//   return rotate
// }


resetSetings()

