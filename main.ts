input.onButtonPressed(Button.A, function () {
    contador = 0
})
let contador = 0
if (true) {
    contador = 0
}
contador = 0
basic.pause(100)
basic.forever(function () {
    basic.showNumber(contador)
    contador += 1
    basic.pause(1000)
})
basic.forever(function () {
    contador += 1
    basic.showNumber(0)
    if (contador < 20) {
        contador = 0
    }
})
