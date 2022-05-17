input.onButtonPressed(Button.A, function () {
    basic.pause(randint(1000, 1000000))
    control.waitMicros(6000)
})
input.onGesture(Gesture.Shake, function () {
    while (true) {
        images.arrowImage(ArrowNames.North).showImage(0)
        images.arrowImage(ArrowNames.NorthEast).showImage(0)
        images.arrowImage(ArrowNames.East).showImage(0)
        images.arrowImage(ArrowNames.SouthEast).showImage(0)
        images.arrowImage(ArrowNames.South).showImage(0)
        images.arrowImage(ArrowNames.SouthWest).showImage(0)
        images.arrowImage(ArrowNames.West).showImage(0)
        images.arrowImage(ArrowNames.NorthWest).showImage(0)
    }
})
