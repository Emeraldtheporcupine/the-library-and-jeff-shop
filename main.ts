namespace SpriteKind {
    export const Book = SpriteKind.create()
    export const Book2 = SpriteKind.create()
    export const Number = SpriteKind.create()
    export const Book3 = SpriteKind.create()
    export const Door = SpriteKind.create()
    export const Paper = SpriteKind.create()
    export const Code = SpriteKind.create()
    export const LockCode = SpriteKind.create()
    export const NUmberCode = SpriteKind.create()
    export const BeginingDoor = SpriteKind.create()
    export const FigureSence = SpriteKind.create()
    export const FigureNotSence = SpriteKind.create()
}
function InEndDoor () {
    InDoor = 1
    Figure.setVelocity(0, 0)
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    mySprite3.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    mySprite5.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    mySprite7.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    mySprite8.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    Figure.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    RobloxPlayer.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    tiles.setCurrentTilemap(tilemap`level2`)
    scene.setBackgroundImage(img`
        666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666
        666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666
        666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666
        666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666
        666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666
        666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666
        666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666
        666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666
        666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666
        666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666
        666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666
        666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666
        666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666
        666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666
        666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666
        666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666
        666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666
        666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666
        666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666
        666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666
        666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666
        666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666
        666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666
        666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666
        666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666
        666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666
        666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666
        666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666
        666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666
        666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666
        666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666
        666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666
        666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666
        666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666
        666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666
        666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666
        666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666
        666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666
        666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666
        666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666
        666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666
        666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666
        666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666
        666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666
        666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666
        666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666
        666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666
        666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666
        666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666
        666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666
        666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666
        666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666
        666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666
        666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666
        666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666
        666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccccccccccccccccccccccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666
        666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccccccccccccccccccccccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666
        666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccccccccccccccccccccccccccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666
        666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccccccccccccccccccccccccccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666
        666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111bbbbbbbeeecceee11111bbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666
        666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111bbbbbbbeeecceee11111bbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666
        666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee11bbbbbbbbbbeeecceee111bbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666
        666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee11bbbbbbbbbbeeecceee111bbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666
        666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbeeecceeebbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666
        666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbeeecceeebbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666
        666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbeeecceeebbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666
        666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbeeecceeebbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666
        666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbeeecceeebbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666
        666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbeeecceeebbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666
        666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccccceeeeeeeecceeeeeeeeccccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666
        666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccccceeeeeeeecceeeeeeeeccccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666
        666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccccceeeeeeeecceeeeeeeeccccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666
        666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666
        666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666
        666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6666666666666666666666666666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666
        666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6666666666666666666666666666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666
        666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee8888888888888888888888888888888888888888888eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666
        666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee8888888888888888888888888888888888888888888eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666
        666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee888888886666666666666666666666666666666668888888eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666
        666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee888888886666666666666666666666666666666668888888eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666
        666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee666666666666666666666666666666666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666
        666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee666666666666666666666666666666666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666
        666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee666666666666666666666666666666666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666
        666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee666666666666666666666666666666666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666
        666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee666666666666666666666666666666666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666
        666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee666666666666666666666666666666666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666
        666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6666666666666666666666666666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666
        666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6666666666666666666666666666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666
        666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666
        666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666
        666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666
        666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666
        666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666
        666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666
        666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666
        666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666
        666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666
        666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666
        666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666
        666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666
        666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666
        666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666
        666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666
        666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666
        666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666
        666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666
        666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666
        666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666
        666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666
        666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666
        666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666
        666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666
        666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666
        666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666
        666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666
        666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666
        666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666
        666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666
        666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666
        666666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666666666666666
        `)
    mySprite11 = sprites.create(img`
        . b c b . 
        b b b b b 
        b b c b b 
        b b c b b 
        b b c b b 
        b b b b b 
        . b c b . 
        `, SpriteKind.NUmberCode)
    mySprite12 = sprites.create(img`
        . b c b . 
        b b b b b 
        b b c b b 
        b b c b b 
        b b c b b 
        b b b b b 
        . b c b . 
        `, SpriteKind.NUmberCode)
    mySprite13 = sprites.create(img`
        . b c b . 
        b b b b b 
        b b c b b 
        b b c b b 
        b b c b b 
        b b b b b 
        . b c b . 
        `, SpriteKind.NUmberCode)
    mySprite11.setPosition(55, 73)
    mySprite12.setPosition(75, 73)
    mySprite13.setPosition(97, 73)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Book2, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.none, 500)
    mySprite4 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . 1 . . . 1 . . . . . . 1 . . . 
        . . 1 . 1 . . 1 1 1 . . 1 . . . 
        . . . 1 . . . . . . . . 1 . . . 
        . . 1 . 1 . . 1 1 1 . . 1 . . . 
        . 1 . . . 1 . . . . . . 1 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Number)
    tiles.placeOnTile(mySprite4, tiles.getTileLocation(0, 5))
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    OutofDoor()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.BeginingDoor, function (sprite, otherSprite) {
    if (BeginingDoorOpen == 0) {
        BeginingDoorOpen = 1
        animation.runImageAnimation(
        mySprite10,
        [img`
            f f f . . . 6 . . 6 . . . f f f 
            f e e e 6 6 . . . . 6 6 e e e f 
            f e e 6 6 6 e . . e 6 6 6 e e f 
            f e 6 6 6 e e . . e e 6 6 6 e f 
            . 6 6 6 e e e . . e e e 6 6 6 . 
            . 6 6 e e e e . . e e e e 6 6 . 
            . . e e e e . . . . e e e e . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            f f f f . . 6 . . 6 . . f f f f 
            e e e e . 6 . . . . 6 . e e e e 
            e e e e 6 . . . . . . 6 e e e e 
            e e e 6 6 . . . . . . 6 6 e e e 
            e 6 6 6 e . . . . . . e 6 6 6 e 
            6 6 e e e e . . . . e e e e 6 6 
            . e e e e . . . . . . e e e e . 
            . e e e . . . . . . . . e e e . 
            . e e . . . . . . . . . . e e . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            f f f f f . . . . . . f f f f f 
            e e e e e . . . . . . e e e e e 
            e e e e e . . . . . . e e e e e 
            6 6 6 6 6 . . . . . . 6 6 6 6 6 
            6 6 6 6 6 . . . . . . 6 6 6 6 6 
            6 6 6 6 6 . . . . . . 6 6 6 6 6 
            e e e e e . . . . . . e e e e e 
            e e e e e . . . . . . e e e e e 
            e e e e e . . . . . . e e e e e 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        175,
        false
        )
        Figure.setVelocity(-15, 0)
    } else {
        animation.runImageAnimation(
        mySprite10,
        [img`
            f f f f f . . . . . . f f f f f 
            e e e e e . . . . . . e e e e e 
            e e e e e . . . . . . e e e e e 
            6 6 6 6 6 . . . . . . 6 6 6 6 6 
            6 6 6 6 6 . . . . . . 6 6 6 6 6 
            6 6 6 6 6 . . . . . . 6 6 6 6 6 
            e e e e e . . . . . . e e e e e 
            e e e e e . . . . . . e e e e e 
            e e e e e . . . . . . e e e e e 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        200,
        false
        )
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (CrouchDown == 0) {
        CrouchDown = 1
        RobloxPlayer.setImage(img`
            . 2 f 2 f 2 . 
            2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 
            . 2 2 2 2 2 . 
            `)
        controller.moveSprite(RobloxPlayer, 25, 25)
    } else if (CrouchDown == 1) {
        CrouchDown = 0
        RobloxPlayer.setImage(img`
            . 5 f 5 f 5 . 
            5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 
            . 5 5 5 5 5 . 
            `)
        controller.moveSprite(RobloxPlayer, 50, 50)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Book3, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.none, 500)
    mySprite6 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 1 . . . . . . . 1 1 1 . . 
        . 1 . 1 . 1 . 1 1 1 . 1 . 1 . . 
        . . 1 1 1 . . . . . . . 1 1 . . 
        . . 1 1 1 . . 1 1 1 . . . 1 . . 
        . 1 . . . 1 . . . . . . . 1 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Number)
    tiles.placeOnTile(mySprite6, tiles.getTileLocation(0, 4))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Door, function (sprite, otherSprite) {
    InEndDoor()
})
scene.onHitWall(SpriteKind.Enemy, function (sprite, location) {
    FigureMovement()
})
function FigureMovement () {
    if (CrouchDown == 1) {
        if (HitWall == 0) {
            HitWall = 1
            Figure.setVelocity(0, 15)
        } else if (HitWall == 1) {
            HitWall = 2
            Figure.setVelocity(15, 0)
        } else if (HitWall == 2) {
            HitWall = 3
            Figure.setVelocity(0, -15)
        } else if (HitWall == 3) {
            HitWall = 4
            Figure.setVelocity(-15, 0)
        } else if (HitWall == 4) {
            HitWall = 5
            Figure.setVelocity(0, 15)
        } else if (HitWall == 5) {
            HitWall = 0
            Figure.setVelocity(-15, 0)
        }
    } else {
        if (HitWall == 0) {
            HitWall = 1
            Figure.setVelocity(0, 25)
        } else if (HitWall == 1) {
            HitWall = 2
            Figure.setVelocity(25, 0)
        } else if (HitWall == 2) {
            HitWall = 3
            Figure.setVelocity(0, -25)
        } else if (HitWall == 3) {
            HitWall = 4
            Figure.setVelocity(-25, 0)
        } else if (HitWall == 4) {
            HitWall = 5
            Figure.setVelocity(0, 25)
        } else if (HitWall == 5) {
            HitWall = 0
            Figure.setVelocity(-25, 0)
        }
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Paper, function (sprite, otherSprite) {
    mySprite9 = sprites.create(img`
        111111111111111111111111
        111111111111111111111111
        111111111111111111111111
        11111ff11111111f11ff11f1
        1111f1111ff1111f1f11f111
        1111f111f11f11ff1fff1111
        1111f111f11f1f1f1f1111f1
        11111ff11ff11fff11ff1111
        111111111111111111111111
        111111111111111111111111
        111111111111111111111111
        111111111111111111111111
        111f111111f111f1111fff11
        1f1f1f11111f1f1111fffff1
        11fff1111111f11111fffff1
        11fff111111f1f1111fffff1
        1f111f1111f111f1111fff11
        111111111111111111111111
        111f1111111f1f1111f1f1f1
        111f1111111f1f1111f1f1f1
        111f1111111f1f1111f1f1f1
        111f1111111f1f1111f1f1f1
        111111111111111111111111
        111111111111111111111111
        111111111111111111111111
        11ff11111f111f11111ff111
        11f1111111f1f11111f11111
        11ff1111111f111111f11111
        111f111111f1f11111f11111
        11ff11f11f111f11f11ff1f1
        11111f111111111f11111111
        111111111111111111111111
        `, SpriteKind.Code)
    tiles.placeOnTile(mySprite9, tiles.getTileLocation(1, 1))
    sprites.destroy(otherSprite, effects.none, 0)
})
function OnStart () {
    BeginingDoorOpen = 0
    InDoor = 0
    HitWall = 0
    scene.setBackgroundColor(14)
    RobloxPlayer = sprites.create(img`
        . 5 f 5 f 5 . 
        5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 
        . 5 5 5 5 5 . 
        `, SpriteKind.Player)
    Figure = sprites.create(img`
        . d d d d d . 
        d 2 1 2 1 2 d 
        d 2 2 2 2 2 d 
        d 1 2 2 2 1 d 
        d 2 2 2 2 2 d 
        d 2 1 2 1 2 d 
        . d d d d d . 
        `, SpriteKind.Enemy)
    mySprite = sprites.create(img`
        . . . . . . . . 6 . . . . . . . 
        . . . . . . . 6 8 6 . . . . . . 
        . . . . . . . . 6 . . . . . . . 
        . . . . . . . . . . 7 7 7 7 7 7 
        . . . . . . . . . . 7 7 7 7 7 7 
        . . . . . . 9 . . . 7 7 7 7 7 7 
        . . . . . 9 1 9 . . 7 7 7 7 7 7 
        . . . . . . 9 . . . 7 7 7 7 7 7 
        . . . . . . . . . . 7 7 7 7 7 7 
        . . . . . . . . . . 7 7 7 7 7 7 
        . . . . . . . . . . 7 7 7 7 7 7 
        . . . . . 1 . . . . 7 7 7 7 7 7 
        . . . . 1 9 1 . . . 7 7 7 7 7 7 
        . . . . . 1 . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Book)
    mySprite3 = sprites.create(img`
        . . . . . . . 6 . . . . . . . . 
        . . . . . . 6 8 6 . . . . . . . 
        . . . . . . . 6 . . . . . . . . 
        4 4 4 4 4 4 . . . . . . . . . . 
        4 4 4 4 4 4 . . . . . . . . . . 
        4 4 4 4 4 4 . . . 9 . . . . . . 
        4 4 4 4 4 4 . . 9 1 9 . . . . . 
        4 4 4 4 4 4 . . . 9 . . . . . . 
        4 4 4 4 4 4 . . . . . . . . . . 
        4 4 4 4 4 4 . . . . . . . . . . 
        4 4 4 4 4 4 . . . . . . . . . . 
        4 4 4 4 4 4 . . . . 1 . . . . . 
        4 4 4 4 4 4 . . . 1 9 1 . . . . 
        . . . . . . . . . . 1 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Book2)
    mySprite5 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 1 . . . . . . . . . . . . 
        . . 1 9 1 . . . . 9 . . . . . . 
        . . . 1 . . . . 9 1 9 . . . . . 
        . . . . . . . . . 9 . . . . 6 . 
        . . . . . . . . . . . . . 6 8 6 
        . . . . . . . . . . . . . . 6 . 
        . . . 9 9 9 9 9 9 9 9 9 9 . . . 
        . . . 9 9 9 9 9 9 9 9 9 9 . . . 
        . . . 9 9 9 9 9 9 9 9 9 9 . . . 
        . . . 9 9 9 9 9 9 9 9 9 9 . . . 
        . . . 9 9 9 9 9 9 9 9 9 9 . . . 
        . . . 9 9 9 9 9 9 9 9 9 9 . . . 
        `, SpriteKind.Book3)
    mySprite7 = sprites.create(img`
        e e e 6 6 6 e e e e 6 6 6 e e e 
        e e e 6 6 6 e e e e 6 6 6 e e e 
        e e e 6 6 6 e e e e 6 6 6 e e e 
        e e e 6 6 6 e e e e 6 6 6 e e e 
        e e e 6 6 6 e e e e 6 6 6 e e e 
        . . . . . . b b b b . . . . . . 
        . . . . . . b . . b . . . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . . . 7 6 7 6 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Door)
    mySprite8 = sprites.create(img`
        1 1 1 1 1 1 1 1 1 1 
        1 f f f f f f f f 1 
        1 1 1 1 1 1 1 1 1 1 
        1 f f f 1 1 f f 1 1 
        1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 f 1 1 1 1 1 
        1 f 1 1 1 1 1 f 1 1 
        1 1 1 1 1 f 1 1 1 1 
        1 1 f 1 1 1 1 1 f 1 
        1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 
        1 f f f f f f f f 1 
        1 1 1 1 1 1 1 1 1 1 
        `, SpriteKind.Paper)
    mySprite10 = sprites.create(img`
        f f 6 6 f f f c c f f f 6 6 f f 
        e e 6 6 e e e c c e e e 6 6 e e 
        e e 6 6 e e e c c e e e 6 6 e e 
        e e 6 6 e e e c c e e e 6 6 e e 
        e e 6 6 e e e c c e e e 6 6 e e 
        e e 6 6 e e e c c e e e 6 6 e e 
        . . . . . . b . . b . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.BeginingDoor)
    mySprite14 = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.FigureSence)
    mySprite15 = sprites.create(img`
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        `, SpriteKind.FigureNotSence)
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . 9 . . . . . . . 
        . . . . . . . 9 1 9 . . . . . . 
        . . . . . . . . 9 . . . . . . . 
        . . . . . . . . . . 7 7 7 7 7 7 
        . . . . . . . . . . 7 7 7 7 7 7 
        . . . . . . 1 . . . 7 7 7 7 7 7 
        . . . . . 1 9 1 . . 7 7 7 7 7 7 
        . . . . . . 1 . . . 7 7 7 7 7 7 
        . . . . . . . . . . 7 7 7 7 7 7 
        . . . . . . . . . . 7 7 7 7 7 7 
        . . . . . . . . . . 7 7 7 7 7 7 
        . . . . . 1 . . . . 7 7 7 7 7 7 
        . . . . 1 9 1 . . . 7 7 7 7 7 7 
        . . . . . 1 . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . 1 . . . . . . . 
        . . . . . . . 1 9 1 . . . . . . 
        . . . . . . . . 1 . . . . . . . 
        . . . . . . . . . . 7 7 7 7 7 7 
        . . . . . . . . . . 7 7 7 7 7 7 
        . . . . . . 1 . . . 7 7 7 7 7 7 
        . . . . . 1 9 1 . . 7 7 7 7 7 7 
        . . . . . . 1 . . . 7 7 7 7 7 7 
        . . . . . . . . . . 7 7 7 7 7 7 
        . . . . . . . . . . 7 7 7 7 7 7 
        . . . . . . . . . . 7 7 7 7 7 7 
        . . . . . 9 . . . . 7 7 7 7 7 7 
        . . . . 9 1 9 . . . 7 7 7 7 7 7 
        . . . . . 9 . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . 1 . . . . . . . 
        . . . . . . . 1 9 1 . . . . . . 
        . . . . . . . . 1 . . . . . . . 
        . . . . . . . . . . 7 7 7 7 7 7 
        . . . . . . . . . . 7 7 7 7 7 7 
        . . . . . . 9 . . . 7 7 7 7 7 7 
        . . . . . 9 1 9 . . 7 7 7 7 7 7 
        . . . . . . 9 . . . 7 7 7 7 7 7 
        . . . . . . . . . . 7 7 7 7 7 7 
        . . . . . . . . . . 7 7 7 7 7 7 
        . . . . . . . . . . 7 7 7 7 7 7 
        . . . . . 1 . . . . 7 7 7 7 7 7 
        . . . . 1 9 1 . . . 7 7 7 7 7 7 
        . . . . . 1 . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    true
    )
    animation.runImageAnimation(
    mySprite3,
    [img`
        . . . . . . . 9 . . . . . . . . 
        . . . . . . 9 1 9 . . . . . . . 
        . . . . . . . 9 . . . . . . . . 
        4 4 4 4 4 4 . . . . . . . . . . 
        4 4 4 4 4 4 . . . . . . . . . . 
        4 4 4 4 4 4 . . . 1 . . . . . . 
        4 4 4 4 4 4 . . 1 9 1 . . . . . 
        4 4 4 4 4 4 . . . 1 . . . . . . 
        4 4 4 4 4 4 . . . . . . . . . . 
        4 4 4 4 4 4 . . . . . . . . . . 
        4 4 4 4 4 4 . . . . . . . . . . 
        4 4 4 4 4 4 . . . . 1 . . . . . 
        4 4 4 4 4 4 . . . 1 9 1 . . . . 
        . . . . . . . . . . 1 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . 1 . . . . . . . . 
        . . . . . . 1 9 1 . . . . . . . 
        . . . . . . . 1 . . . . . . . . 
        4 4 4 4 4 4 . . . . . . . . . . 
        4 4 4 4 4 4 . . . . . . . . . . 
        4 4 4 4 4 4 . . . 1 . . . . . . 
        4 4 4 4 4 4 . . 1 9 1 . . . . . 
        4 4 4 4 4 4 . . . 1 . . . . . . 
        4 4 4 4 4 4 . . . . . . . . . . 
        4 4 4 4 4 4 . . . . . . . . . . 
        4 4 4 4 4 4 . . . . . . . . . . 
        4 4 4 4 4 4 . . . . 9 . . . . . 
        4 4 4 4 4 4 . . . 9 1 9 . . . . 
        . . . . . . . . . . 9 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . 1 . . . . . . . . 
        . . . . . . 1 9 1 . . . . . . . 
        . . . . . . . 1 . . . . . . . . 
        4 4 4 4 4 4 . . . . . . . . . . 
        4 4 4 4 4 4 . . . . . . . . . . 
        4 4 4 4 4 4 . . . 9 . . . . . . 
        4 4 4 4 4 4 . . 9 1 9 . . . . . 
        4 4 4 4 4 4 . . . 9 . . . . . . 
        4 4 4 4 4 4 . . . . . . . . . . 
        4 4 4 4 4 4 . . . . . . . . . . 
        4 4 4 4 4 4 . . . . . . . . . . 
        4 4 4 4 4 4 . . . . 1 . . . . . 
        4 4 4 4 4 4 . . . 1 9 1 . . . . 
        . . . . . . . . . . 1 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    true
    )
    tiles.setCurrentTilemap(tilemap`level1`)
    scene.centerCameraAt(7, 7.5)
    controller.moveSprite(RobloxPlayer, 50, 50)
    tiles.placeOnTile(RobloxPlayer, tiles.getTileLocation(4, 8))
    tiles.placeOnTile(Figure, tiles.getTileLocation(5, 4))
    tiles.placeOnTile(mySprite, tiles.getTileLocation(5, 2))
    tiles.placeOnTile(mySprite3, tiles.getTileLocation(7, 3))
    tiles.placeOnTile(mySprite5, tiles.getTileLocation(3, 4))
    tiles.placeOnTile(mySprite7, tiles.getTileLocation(4, 0))
    tiles.placeOnTile(mySprite8, tiles.getTileLocation(2, 3))
    tiles.placeOnTile(mySprite10, tiles.getTileLocation(4, 7))
    mySprite14.follow(Figure)
    mySprite15.follow(Figure)
}
function OutofDoor () {
    if (InDoor == 1) {
        InDoor = 0
        HitWall = 0
        RobloxPlayer.setImage(img`
            . 5 f 5 f 5 . 
            5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 
            . 5 5 5 5 5 . 
            `)
        Figure.setImage(img`
            . d d d d d . 
            d 2 1 2 1 2 d 
            d 2 2 2 2 2 d 
            d 1 2 2 2 1 d 
            d 2 2 2 2 2 d 
            d 2 1 2 1 2 d 
            . d d d d d . 
            `)
        tiles.placeOnTile(Figure, tiles.getTileLocation(5, 4))
        tiles.placeOnTile(RobloxPlayer, tiles.getTileLocation(5, 0))
        Figure.setVelocity(-15, 0)
        mySprite = sprites.create(img`
            . . . . . . . . 6 . . . . . . . 
            . . . . . . . 6 8 6 . . . . . . 
            . . . . . . . . 6 . . . . . . . 
            . . . . . . . . . . 7 7 7 7 7 7 
            . . . . . . . . . . 7 7 7 7 7 7 
            . . . . . . 9 . . . 7 7 7 7 7 7 
            . . . . . 9 1 9 . . 7 7 7 7 7 7 
            . . . . . . 9 . . . 7 7 7 7 7 7 
            . . . . . . . . . . 7 7 7 7 7 7 
            . . . . . . . . . . 7 7 7 7 7 7 
            . . . . . . . . . . 7 7 7 7 7 7 
            . . . . . 1 . . . . 7 7 7 7 7 7 
            . . . . 1 9 1 . . . 7 7 7 7 7 7 
            . . . . . 1 . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Book)
        mySprite3 = sprites.create(img`
            . . . . . . . 6 . . . . . . . . 
            . . . . . . 6 8 6 . . . . . . . 
            . . . . . . . 6 . . . . . . . . 
            4 4 4 4 4 4 . . . . . . . . . . 
            4 4 4 4 4 4 . . . . . . . . . . 
            4 4 4 4 4 4 . . . 9 . . . . . . 
            4 4 4 4 4 4 . . 9 1 9 . . . . . 
            4 4 4 4 4 4 . . . 9 . . . . . . 
            4 4 4 4 4 4 . . . . . . . . . . 
            4 4 4 4 4 4 . . . . . . . . . . 
            4 4 4 4 4 4 . . . . . . . . . . 
            4 4 4 4 4 4 . . . . 1 . . . . . 
            4 4 4 4 4 4 . . . 1 9 1 . . . . 
            . . . . . . . . . . 1 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Book2)
        mySprite5 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . 1 . . . . . . . . . . . . 
            . . 1 9 1 . . . . 9 . . . . . . 
            . . . 1 . . . . 9 1 9 . . . . . 
            . . . . . . . . . 9 . . . . 6 . 
            . . . . . . . . . . . . . 6 8 6 
            . . . . . . . . . . . . . . 6 . 
            . . . 9 9 9 9 9 9 9 9 9 9 . . . 
            . . . 9 9 9 9 9 9 9 9 9 9 . . . 
            . . . 9 9 9 9 9 9 9 9 9 9 . . . 
            . . . 9 9 9 9 9 9 9 9 9 9 . . . 
            . . . 9 9 9 9 9 9 9 9 9 9 . . . 
            . . . 9 9 9 9 9 9 9 9 9 9 . . . 
            `, SpriteKind.Book3)
        mySprite7 = sprites.create(img`
            e e e 6 6 6 e e e e 6 6 6 e e e 
            e e e 6 6 6 e e e e 6 6 6 e e e 
            e e e 6 6 6 e e e e 6 6 6 e e e 
            e e e 6 6 6 e e e e 6 6 6 e e e 
            e e e 6 6 6 e e e e 6 6 6 e e e 
            . . . . . . b b b b . . . . . . 
            . . . . . . b . . b . . . . . . 
            . . . . . . 8 8 8 8 . . . . . . 
            . . . . . . 7 6 7 6 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Door)
        mySprite8 = sprites.create(img`
            1 1 1 1 1 1 1 1 1 1 
            1 f f f f f f f f 1 
            1 1 1 1 1 1 1 1 1 1 
            1 f f f 1 1 f f 1 1 
            1 1 1 1 1 1 1 1 1 1 
            1 1 1 1 f 1 1 1 1 1 
            1 f 1 1 1 1 1 f 1 1 
            1 1 1 1 1 f 1 1 1 1 
            1 1 f 1 1 1 1 1 f 1 
            1 1 1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 1 1 
            1 f f f f f f f f 1 
            1 1 1 1 1 1 1 1 1 1 
            `, SpriteKind.Paper)
        scene.setBackgroundImage(img`
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            `)
        tiles.setCurrentTilemap(tilemap`level1`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(5, 2))
        tiles.placeOnTile(mySprite3, tiles.getTileLocation(7, 3))
        tiles.placeOnTile(mySprite5, tiles.getTileLocation(3, 4))
        tiles.placeOnTile(mySprite7, tiles.getTileLocation(4, 0))
        tiles.placeOnTile(mySprite8, tiles.getTileLocation(2, 3))
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Book, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.none, 500)
    mySprite2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . 1 1 1 . . . . . . 1 1 1 . . 
        . 1 1 1 1 1 . 1 1 1 . . . 1 . . 
        . 1 1 1 1 1 . . . . . . 1 1 . . 
        . 1 1 1 1 1 . 1 1 1 . . . 1 . . 
        . . 1 1 1 . . . . . . 1 1 1 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Number)
    tiles.placeOnTile(mySprite2, tiles.getTileLocation(0, 6))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    tiles.setCurrentTilemap(tilemap`level2`)
    sprites.destroy(sprite)
    sprites.destroy(otherSprite)
    sprites.destroy(mySprite)
    sprites.destroy(mySprite2)
    sprites.destroy(mySprite4)
    sprites.destroy(mySprite6)
    scene.setBackgroundImage(img`
        fffffffffffffffffffffffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffffffffffffffffffffffffffffffff
        fffffffffffffffffffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffffffffffffffffffffffffffffff
        ffffffffffffffffffffddddddddddddddddddddddddddddddddddddd11111111111111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddfffffffffffffffffffffffffffff
        ffffffffffffffffffddddddddddddddddddddddddddddddddd11111111111111111111111111111111111111ddddddddddddddddddddddddddddddddddddddddddddfffffffffffffffffffffffffff
        ffffffffffffffffddddddddddddddddddddddddddddddd1111111111111111111111111111111111111111111111ddddddddddddddddddddddddddddddddddddddddddfffffffffffffffffffffffff
        ffffffffffffffddddddddddddddddddddddddddddddd11111111111111112111111111111111112221111111111111ddddddddddddddddddddddddddddddddddddddddddfffffffffffffffffffffff
        fffffffffffffddddddddddddddddddddddddddddd11111111111111112222111111111111122222111111111111111111ddddddddddddddddddddddddddddddddddddddddffffffffffffffffffffff
        ffffffffffffddddddddddddddddddddddddddd11111121111111111112222111111111122222222111111111111111111111ddddddddddddddddddddddddddddddddddddddfffffffffffffffffffff
        ffffffffffffdddddddddddddddddddddddd11111111122111111111122222221111122222222222111111111111111111111111dddddddddddddddddddddddddddddddddddfffffffffffffffffffff
        ffffffffffddddddddddddddddddddddddd1111111111222221111111222222222222222222222221111111111111111111111111ddddddddddddddddddddddddddddddddddddfffffffffffffffffff
        fffffffffddddddddddddddddddddddd1111111111111222222111112222222222222222222222221111111111111111122221111111ddddddddddddddddddddddddddddddddddffffffffffffffffff
        fffffffdddddddddddddddddddddddd111111111111112222222211122222222222222222222222222111111111222222222111111111dddddddddddddddddddddddddddddddddddffffffffffffffff
        ffffffddddddddddddddddddddddd1111111111111111222222221112222222222222222222222222222222222222222222211111111111ddddddddddddddddddddddddddddddddddfffffffffffffff
        ffffffdddddddddddddddddddddd111111111111111112222222222222222222222222222222222222222222222222222222111111111111dddddddddddddddddddddddddddddddddfffffffffffffff
        fffffdddddddddddddddddddd111122222211111111112222222222222222222222222222222222222222222222222222222222222221111111dddddddddddddddddddddddddddddddffffffffffffff
        fffddddddddddddddddddddd11111222222222111111122222222222222222222222222222222222222222222222222222222222221111111111ddddddddddddddddddddddddddddddddffffffffffff
        ffdddddddddddddddddddddd11111222222222221111122222222222222222222222222222222222222222222222222222222222211111111111dddddddddddddddddddddddddddddddddfffffffffff
        ffdddddddddddddddddddddd11111222222222221111122222222222222222222222222222222222222222222222222222222222211111111111dddddddddddddddddddddddddddddddddfffffffffff
        ffddddddddddddddddddddd1111112222222222222222222222222222222222222222222222222222222222222222222222222222111111111111ddddddddddddddddddddddddddddddddfffffffffff
        fdddddddddddddddddddd11111111222222222222222222222222222222222222222222222222222222222222222222222222222111111111111111dddddddddddddddddddddddddddddddffffffffff
        fddddddddddddddddddd1111111112222222222222222222222222222222222222222222222222222222222222222222222222111111111111111111ddddddddddddddddddddddddddddddffffffffff
        dddddddddddddddddd11111111111222222222222222222222222222222222222222222222222222222222222222222222222211222222222222211111ddddddddddddddddddddddddddddddffffffff
        dddddddddddddddddd11111111111112222222222222222222222222222222222222222222222222222222222222222222222222222222222222111111ddddddddddddddddddddddddddddddffffffff
        ddddddddddddddddd1111111111111122222222222222222222222222222222222222222222222222222222222222222222222222222222222211111111ddddddddddddddddddddddddddddddfffffff
        dddddddddddddddd111112211111111222222222222222222222222222222222222222222222222222222222222222222222222222222222211111111111dddddddddddddddddddddddddddddfffffff
        dddddddddddddddd111112222111111222222222222222222222222222222222222222222222222222222222222222222222222222222222111111111111dddddddddddddddddddddddddddddddfffff
        dddddddddddddd1111111222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222211111111111111dddddddddddddddddddddddddddddfffff
        dddddddddddddd1111111222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222111111ddddddddddddddddddddddddddddddffff
        ddddddddddddd111111112222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222221111111dddddddddddddddddddddddddddddffff
        ddddddddddddd111111112222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222221111111ddddddddddddddddddddddddddddddfff
        dddddddddddd11111111122222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222111111111dddddddddddddddddddddddddddddfff
        dddddddddddd11111111122222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222211111111111dddddddddddddddddddddddddddddfff
        dddddddddd111122221112222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222221111111111111dddddddddddddddddddddddddddddf
        dddddddddd111122222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222211111111111111dddddddddddddddddddddddddddddf
        dddddddddd111122222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222211dddddddddddddddddddddddddddddf
        ddddddddd11111222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222221111ddddddddddddddddddddddddddddf
        ddddddddd11111222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222221111ddddddddddddddddddddddddddddd
        ddddddddd11111222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222221111ddddddddddddddddddddddddddddd
        ddddddddd11111222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222221111ddddddddddddddddddddddddddddd
        ddddddddd11111222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222221111ddddddddddddddddddddddddddddd
        ddddddd111112222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222221111111ddddddddddddddddddddddddddd
        ddddddd111112222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222111111111ddddddddddddddddddddddddddd
        ddddddd111111222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222111111111ddddddddddddddddddddddddddd
        ddddddd111111222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222111111111ddddddddddddddddddddddddddd
        ddddddd111111122222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222221111111111ddddddddddddddddddddddddddd
        ddddddd111111111222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222221111111111ddddddddddddddddddddddddddd
        ddddddd111111111222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222111111ddddddddddddddddddddddddddd
        ddddddd111111111222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222111111ddddddddddddddddddddddddddd
        ddddddd111111222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222111111111ddddddddddddddddddddddddddd
        ddddddd111222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222221111111111ddddddddddddddddddddddddddd
        ddddddd111112222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222221111111111ddddddddddddddddddddddddddd
        ddddddd111111222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222111111111ddddddddddddddddddddddddddd
        ddddddd111111222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222221111111ddddddddddddddddddddddddddd
        ddddddd111111122222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222221111111ddddddddddddddddddddddddddd
        ddddddd111111122222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222111111ddddddddddddddddddddddddddd
        ddddddd111111122222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222111111ddddddddddddddddddddddddddd
        ddddddd111111122222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222111111ddddddddddddddddddddddddddd
        ddddddd111111122222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222211111ddddddddddddddddddddddddddd
        ddddddd111111222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222211111ddddddddddddddddddddddddddd
        ddddddd111111222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222211111ddddddddddddddddddddddddddd
        ddddddddd11111222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222211111111ddddddddddddddddddddddddddddd
        ddddddddd11111112222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222211111111ddddddddddddddddddddddddddddd
        ddddddddd11111111222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222211111111ddddddddddddddddddddddddddddd
        ddddddddd11111111222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222211111111ddddddddddddddddddddddddddddd
        dddddddddd111111122222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222221111111dddddddddddddddddddddddddddddd
        dddddddddd111111222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222221111111dddddddddddddddddddddddddddddd
        dddddddddd111122222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222221111111dddddddddddddddddddddddddddddd
        dddddddddddd11222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222211111dddddddddddddddddddddddddddddddd
        dddddddddddd11111122222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222211111dddddddddddddddddddddddddddddddd
        ddddddddddddd111111111111222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222221111ddddddddddddddddddddddddddddddddf
        ddddddddddddd111111111111222222222222222222222222222222222222222222222222222222222222222222222222222222222222222211111111111111ddddddddddddddddddddddddddddddddf
        dddddddddddddd1111111111122222222222222222222222222222222222222222222222222222222222222222222222222222222222222222211111111111dddddddddddddddddddddddddddddddddf
        dddddddddddddd1111111111122222222222222222222222222222222222222222222222222222222222222222222222222222222222222222211111111111dddddddddddddddddddddddddddddddddf
        dddddddddddddddd111111111222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222111111111dddddddddddddddddddddddddddddddddfff
        dddddddddddddddd111111112222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222111111111dddddddddddddddddddddddddddddddddfff
        ddddddddddddddddd1111111222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222211111111ddddddddddddddddddddddddddddddddddfff
        dddddddddddddddddd11111122222222222222222222222222222222222222222222222222222222222222222222222222222222222222222221111111ddddddddddddddddddddddddddddddddddffff
        dddddddddddddddddd11111111111222222222222222222222222222222222222222222222222222222222222222222222222222222222222221111111ddddddddddddddddddddddddddddddddddffff
        dddddddddddddddddddd1111111111111122222222222222222222222222222222222222222222222222222222222222222222222222222222211111dddddddddddddddddddddddddddddddddddfffff
        ddddddddddddddddddddd11111111111112222222222222222222222222222222222222222222222222222222222222222222222222222222221111ddddddddddddddddddddddddddddddddddddfffff
        ddddddddddddddddddddd11111111111112222222222222222222222222222222222222222222222222222222222222222222222222222222221111ddddddddddddddddddddddddddddddddddddfffff
        ddddddddddddddddddddddd1111111111122222222222222222222222222222222222222222222222222222222222222222221111111111222211ddddddddddddddddddddddddddddddddddddfffffff
        dddddddddddddddddddddddd11111111112222222222222222222222222222222222222222222222222222222222222222222111111111111111dddddddddddddddddddddddddddddddddddddfffffff
        dddddddddddddddddddddddd11111111112222222222222222222222222222222222222222222222222222222222222222222111111111111111ddddddddddddddddddddddddddddddddddddffffffff
        ddddddddddddddddddddddddd111111111222222222222222222222222222222222222222222222222222222222222222222211111111111111dddddddddddddddddddddddddddddddddddddffffffff
        fddddddddddddddddddddddddddd111111222222222222222222222222222222222222222222222222222222222222222222211111111111ddddddddddddddddddddddddddddddddddddddffffffffff
        fdddddddddddddddddddddddddddd1111122221111222222222222222222222222222222222222222222222222222222222221111111111dddddddddddddddddddddddddddddddddddddddffffffffff
        ffddddddddddddddddddddddddddddd111111111222222211111122222222222222222222222222222222222222222222222211111111ddddddddddddddddddddddddddddddddddddddddfffffffffff
        ffdddddddddddddddddddddddddddddd1111111111111111111112222222222222222222222222222222222222222222222221111111dddddddddddddddddddddddddddddddddddddddddfffffffffff
        fffdddddddddddddddddddddddddddddddd1111111111111111111222222222222222222222222222222222222111112222221111dddddddddddddddddddddddddddddddddddddddddddffffffffffff
        fffffddddddddddddddddddddddddddddddd11111111111111111122222222222222222222222222222222222211111111112111ddddddddddddddddddddddddddddddddddddddddddffffffffffffff
        ffffffddddddddddddddddddddddddddddddddd111111111111111222211122222222222222222222222222222111111111111dddddddddddddddddddddddddddddddddddddddddddfffffffffffffff
        ffffffdddddddddddddddddddddddddddddddddddd11111111111122221111222222222222221111222222222211111111dddddddddddddddddddddddddddddddddddddddddddddddfffffffffffffff
        fffffffdddddddddddddddddddddddddddddddddddddd11111111122211111112222222222221111111222222211111dddddddddddddddddddddddddddddddddddddddddddddddddffffffffffffffff
        fffffffffdddddddddddddddddddddddddddddddddddddd1111111222111111111122222222111111111111222111dddddddddddddddddddddddddddddddddddddddddddddddddffffffffffffffffff
        ffffffffffddddddddddddddddddddddddddddddddddddddddd111221111111111111222222111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddfffffffffffffffffff
        ffffffffffffddddddddddddddddddddddddddddddddddddddddd111d11111111111111122211111111dddddd1dddddddddddddddddddddddddddddddddddddddddddddddddfffffffffffffffffffff
        ffffffffffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffffffffffffffffff
        fffffffffffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffffffffffffffffffffff
        ffffffffffffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffffffffffffffffffff
        ffffffffffffffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffffffffffffffffffffff
        ffffffffffffffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffffffffffffffffffffff
        ffffffffffffffffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffffffffffffffffffffffff
        ffffffffffffffffffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffffffffffffffffffffffffff
        fffffffffffffffffffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffffffffffffffffffffffffffffff
        fffffffffffffffffffffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffdddddddddddddddddddddddddddddddddddddddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddddddddddddddddddddddddddddddddddddddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddddddddddddddddddddddddddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        `)
    pause(2000)
    scene.setBackgroundImage(img`
        8888888888888888888888888888888898888888888888888888888888888888888888888888888899999888888888888888888888888888888888888888888888888899999999999888888888888888
        8888888888888888888888888888888998888888888888888888888888888888888888888888899999999888888888888888888888888888888888888888888888999999999999999888888888888888
        9888888888888888888888988888889998888888988888888888888888988888888888888889999999999988888888888888888888888888888888888888888889999999999999999988888888888888
        9988888888888898888888998888899999888889998888888888888889998888888889988999999999999999888888888888888888888888888888888888999999999999999999999998888888888888
        9988888888888999888888998888899999988889999988888888888899999888888899999999999999999999988888888888888888888888999988888899999999999999999999999998888888888889
        9988888888888999988889999888899999998889999998888888889999999988888999999999999999999999998888888888888888888889999999888999999999999999999999999999988888999999
        9988888888888999999889999999999999999889999999988888889999999998888999999999999999999999999888999888888888888899999999998999999999999999999999999999999999999999
        9988888888888999999889999999999999999999999999999888899999999999999999999999999999999999999989999988888888888999999999999999999999999999999999999999999999999999
        9998888888888999999999999999999999999999999999999998899999999999999999999999999999999999999999999998888888889999999999999999999999999999999999999999999999999999
        9998888888889999999999999999999999999999999999999999999999999999999999999999999999999999999999999999888888999999999999999999999999999999999999999999999999999999
        9998888888889999999999999999999999999999999999999999999999999999999999999999999999999999999999999999988899999999999999999999999999999999999999999999999999999999
        9998888888899999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999888888899999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999888888999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999988888999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999988888999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999998889999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999889999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999989999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999919999119999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999989999999999999999999999999999999999999999999999919999199999999999999999999999999999999991999999999999999999999999999999999999999999999999999999999999999
        9999999889999999999999999999999999999999999999999999999991991199999999999999999991999999999999999999999999199999999999999999999999999999999999999999999999999999
        9999999889999999999999999999999999999999999999999999999991991199111119999999999991999991999999999991119999199999999999999999999999999999999999999999999999999999
        9999998889999999999999999999999999999999999999999999999999191999119991199919999991999991999999999991919999199999999999999999999999999999999999999999999999999999
        9999988889999999999999999999999999999999999999999999999999191999199991199991999919999991999999991991119999199999999999999999999999999999999999999999999999999999
        9999988889999999999999999999999999999999999999999999999999911991999911999991999199991111111199991991999999199999999999999999999999999999999999999999999999999999
        9999888888999999999999999999999999999999999999999999999999911991111199999999119199919991191199991991999999919999999999999999999999999999999999999999999999999999
        9999888888999999999999999999999999999999999999999999999999199999999999999999991999919991199999991999119191119999999999999999999999999999999999999999999999999999
        9999888888999999999999999999999999999999999999999999999999199999999999999999999999919991999999991999991191911999999999999999999999989999999999999999999999999999
        9999888888999999999999999999999999999999999999999999999991999999999999999999999999911111999999991999999991111999999999999999999999988899999999999999999999999999
        9998888888999999999999999999999999999999999999911999999911999999999999999999999999999999999999999999999999999999999999999999999999888889999999999999999999999999
        9998888888899999999999999999999999999999999999911999999919999999999999999999999999999999999999999999999999999999999999999999999999888888999999999999999999999999
        9998888888899999999999999999999999999999999999911199999999999999999999999999999999999999999999999999999999999999999999999999999998888888999999999999999999999999
        9998888888899999999999999999999999999999999999919199999999999999999999999999999999999999999999999999999999999999999999999999999998888888899999999999999999999999
        9988888888899999999999999999999999999999999999911119999999999999999999991999999999999999999999999999999999999999999999999999999998888888889999999999999999999999
        9988888888889999999999999999999999999999999991111119999999999999999999991999999999999999999999999199999999999999999999999999999998888888888999999999999999999998
        9888888888889999999999999999999999999989999999991999999999999999999999119199999999999999999999991199999999999999999999999999999988888888888999999999999999999998
        8888888888889999999999999999999999999889999999991991199999999999119999199199999999999999999919911999999999991999999999999999999988888888888999999999999999999988
        8888888888889999999999999999999999999889999999991991111999999919119999199199999991199999999991911999999999991999999999999999999888888888888899999999999999999988
        8888888888888999999999999999999999999888999999991991999199999991191991999199111911111999999991119999999999991999999999999999999888888888888899999999999999999988
        8888888888888999999999999999999999999888999999991919999199999999199191999191991919991999999999119111119919991999999999999999999888888888888899999999999999999988
        8888888888888899999999999999999999998888899999991919999199999999999111999119991919919999999999111199911911119999999999999999998888888888888899999999999999999888
        8888888888888889999999999999999999998888899999999911111999999999999999999919999911199998999999191999991999999999999999999999998888888888888899999999999999999888
        8888888888888889999999999999999999998888899999999999999999999999999999999919999999999998999991191199919999999999999999999999998888888888888889999999999999999888
        8888888888888888999999999999999999998888889999999999999999999999999999999919999999999998899991999111199899999999999999999999998888888888888889999999999999998888
        8888888888888888999999999999999999998888889999999999999999999999999999999999999999999988899991999999999899999999999999999999998888888888888889999999999999998888
        8888888888888888899999999999999999998888889999999999999999999999899999999999999999999988889999999999999899999999999999999999988888888888888889999999999999988888
        8888888888888888889999999999999999998888889999999999999999999999889999999999999999999988889999999999999889999999999999999999988888888888888888999999999999988888
        8888888888888888888999999999999999998888888999999999999999991198889199999999999999999988888999999999999889999999999999999999888888888888888888989999999999988888
        8888888888888888888999999998999999998888888999999199999111119198888199199999999999999988888999999999999888999999999999999999888888888888888888889999999999888888
        8888888888888888888999999998999999998888888999999199999199199198888199199999991111119988888899999999999888999999999999999999888888888888888888888999999999888888
        8888888888888888888999999998899999998888888899991999999111991998888199199999991999999888188889999999999888999999999999999898888888888888888888888899999999888888
        8888888888888888888999999998889999998888888899991999999999991998888189919999991999999888888111999919999111899999999999999898888888888888888888888899999999888888
        8888888888888888888999999988889999998888888899991111199999999988888189919999991111999888888111999919911988199999999999999898888888888888888888888889999999888888
        8888888888888888888999999988888999998888888899999999999999999988888188919999991999999888188111819919119988811111999999998888888888888888888888888888999998888888
        8888888888888888888999999988888899998888888899999999999999999988888188919999991999999888188881819199188988111991999999988888888888888888888888888888899888888888
        8888888888888888888999999988888899998888888899999999999999999888888888819999991999998888188881811198188981889111999999988888888888888888888888888888888888888888
        8888888888888888888999999888888889998888888889999999899999999888888888819999991199988888188881888898188981888999999999888888888888888888888888888888888888888888
        8888888888888888888999999888888888998888888889999998889999998888888888819999991199988888888881888898188981888999999998888888888888888888888888888888888888888888
        8888888888888888888999999888888888888888888889999998889999998888888888889999999999888888888181888898888881888999999998888888888888888888888888888888888888888888
        8888888888888888888999999888888888888888888889999998888999998888888888889999999998888888888118888888888888111199999998888888888888888888888888888888888888888888
        8888888888888888888899999888888888888888888889999988888999988888888888888999999998888888888888888888888888888199191191888888888888888888888888888888888888888888
        8888888888888888888899999888888888888888888888999888888889988888888888888999999988888888888888888888888888888899999988888888888888888888888888888888888888888888
        8888888888888888888899999888888888888888888888999888888888888888888888888999999888888888888888888888888888888889999988888888888888888888888888888888888888888888
        8888888888888888888899999888888888888888888888998888888888888888888888888999999888888888888888888888888888888889999988888888888888888888888888888888888888888888
        8888888888888888888889998888888888888888888888988888888888888888888888888999998888888888888888888888888888888889999888888888888888888888888888888888888888888888
        8888888888888888888889998888888888888888888888888888888888888888888888888899988888888888888888888888888888888888999888888888888888888888888888888888888888888888
        8888888888888888888888998888888888888888888888888888888888888888888888888899988888888888888888888888888888888888999888888888888888888888888888888888888888888888
        8888888888888888888888998888888888888888888888888888888888888888888888888889988888888888888888888888888888888888998888888888888888888888888888888888888888888888
        8888888888888888888888998888888888888888888888888888888888888888888888888888888888888888888888888888888888888888898888888888888888888888888888888888888888888888
        8888888888888888888888898888888888888888888888888888888888888888888888888888888888888888888888888888888888888888898888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        `)
})
let mySprite2: Sprite = null
let mySprite15: Sprite = null
let mySprite14: Sprite = null
let mySprite9: Sprite = null
let HitWall = 0
let mySprite6: Sprite = null
let CrouchDown = 0
let mySprite10: Sprite = null
let BeginingDoorOpen = 0
let mySprite4: Sprite = null
let mySprite13: Sprite = null
let mySprite12: Sprite = null
let mySprite11: Sprite = null
let RobloxPlayer: Sprite = null
let mySprite8: Sprite = null
let mySprite7: Sprite = null
let mySprite5: Sprite = null
let mySprite3: Sprite = null
let mySprite: Sprite = null
let Figure: Sprite = null
let InDoor = 0
OnStart()
