controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`walking`,
    200,
    false
    )
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`hand shake`,
    200,
    false
    )
})
let mySprite: Sprite = null
mySprite = sprites.create(assets.image`stick man`, SpriteKind.Player)
