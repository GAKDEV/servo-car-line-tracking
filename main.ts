input.onButtonPressed(Button.A, function () {
    if (A == 0) {
        A = 1
    } else if (A == 1) {
        A = 0
    }
})
let C = ""
let A = 0
A = 0
pins.servoSetPulse(AnalogPin.P8, 1500)
pins.servoSetPulse(AnalogPin.P12, 1500)
pins.setPull(DigitalPin.P15, PinPullMode.PullUp)
pins.setPull(DigitalPin.P16, PinPullMode.PullUp)
/**
 * CCW = 2500
 * 
 * Stop = 1500
 * 
 * CW = 500
 * 
 * Pin8 = left
 * 
 * Pin12 = Right
 */
basic.forever(function () {
    if (A == 0) {
        pins.servoSetPulse(AnalogPin.P8, 1500)
        pins.servoSetPulse(AnalogPin.P12, 1500)
    } else if (A == 1) {
        C = "" + pins.digitalReadPin(DigitalPin.P15) + pins.digitalReadPin(DigitalPin.P16)
        if (C == "00") {
            pins.servoSetPulse(AnalogPin.P8, 2500)
            pins.servoSetPulse(AnalogPin.P12, 500)
            basic.pause(200)
        } else if (C == "01") {
            pins.servoSetPulse(AnalogPin.P8, 2500)
            pins.servoSetPulse(AnalogPin.P12, 2500)
            basic.pause(200)
        } else if (C == "10") {
            pins.servoSetPulse(AnalogPin.P8, 500)
            pins.servoSetPulse(AnalogPin.P12, 500)
            basic.pause(200)
        }
    }
})
