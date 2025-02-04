controller.A.onEvent(ControllerButtonEvent.Repeated, function () {
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
mySprite,
assets.animation`myAnim`,
200,
true
)
