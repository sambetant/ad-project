radio.setGroup(6)
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        if (input.acceleration(Dimension.Y) < -700) {
            basic.showLeds(`
                . . # . .
                . # # # .
                # . # . #
                . . # . .
                . . # . .
                `)
            radio.sendNumber(1)
        }
        if (input.acceleration(Dimension.Y) > 700) {
            basic.showLeds(`
                . . # . .
                . . # . .
                # . # . #
                . # # # .
                . . # . .
                `)
            radio.sendNumber(3)
        }
        if (input.acceleration(Dimension.X) > 600) {
            basic.showLeds(`
                . . # . .
                . . . # .
                # # # # #
                . . . # .
                . . # . .
                `)
            radio.sendNumber(2)
        }
        if (input.acceleration(Dimension.X) < -600) {
            basic.showLeds(`
                . . # . .
                . # . . .
                # # # # #
                . # . . .
                . . # . .
                `)
            radio.sendNumber(4)
        }
        if (Math.abs(input.acceleration(Dimension.X)) < 300 && Math.abs(input.acceleration(Dimension.Y)) < 350) {
            basic.showLeds(`
                # # # # #
                # . . . #
                # . . . #
                # . . . #
                # # # # #
                `)
            radio.sendNumber(0)
        }
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    }
})
