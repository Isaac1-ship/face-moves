controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite = sprites.create(assets.image`stick man`, SpriteKind.Player)
    animation.runImageAnimation(
    mySprite,
    assets.animation`hand shake`,
    200,
    true
    )
})
let mySprite: Sprite = null
let mySprite2 = sprites.create(assets.image`stick man`, SpriteKind.Player)
animation.runImageAnimation(
mySprite2,
assets.animation`walking`,
200,
true
)
