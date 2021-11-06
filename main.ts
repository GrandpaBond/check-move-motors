input.onButtonPressed(Button.A, function () {
    speed += -1
    basic.showNumber(speed)
    go(Motor, speed)
})
input.onButtonPressed(Button.AB, function () {
    Motor = 1 - Motor
    speed = 0
})
input.onButtonPressed(Button.B, function () {
    speed += 1
    basic.showNumber(speed)
    go(Motor, speed)
})
function go (is_R: number, speed: number) {
    if (is_R == 1) {
        Kitronik_Move_Motor.motorOff(Kitronik_Move_Motor.Motors.MotorLeft)
        if (speed > 0) {
            Kitronik_Move_Motor.motorOn(Kitronik_Move_Motor.Motors.MotorRight, Kitronik_Move_Motor.MotorDirection.Forward, speed)
        } else {
            Kitronik_Move_Motor.motorOn(Kitronik_Move_Motor.Motors.MotorRight, Kitronik_Move_Motor.MotorDirection.Reverse, 0 - speed)
        }
    } else {
        Kitronik_Move_Motor.motorOff(Kitronik_Move_Motor.Motors.MotorRight)
        if (speed > 0) {
            Kitronik_Move_Motor.motorOn(Kitronik_Move_Motor.Motors.MotorLeft, Kitronik_Move_Motor.MotorDirection.Forward, speed)
        } else {
            Kitronik_Move_Motor.motorOn(Kitronik_Move_Motor.Motors.MotorLeft, Kitronik_Move_Motor.MotorDirection.Reverse, 0 - speed)
        }
    }
}
let speed = 0
let Motor = 0
let moveMotorZIP = Kitronik_Move_Motor.createMoveMotorZIPLED(4)
Motor = 0
basic.forever(function () {
	
})
