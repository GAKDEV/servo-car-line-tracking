def on_button_pressed_a():
    pins.servo_set_pulse(AnalogPin.P0, 500)
input.on_button_pressed(Button.A, on_button_pressed_a)

pins.servo_set_pulse(AnalogPin.P0, 1500)

