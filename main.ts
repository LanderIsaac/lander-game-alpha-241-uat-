namespace SpriteKind {
    export const Bossrock = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    characterAnimations.loopFrames(
    Princess,
    assets.animation`Princes up`,
    Move_Speed,
    characterAnimations.rule(Predicate.MovingUp)
    )
})
function L$ () {
    music.stopAllSounds()
    Steveexist = false
    Platform1 = 1
    tiles.loadMap(tiles.createMap(tilemap`level3`))
    scene.setBackgroundImage(assets.image`Dfvnjfdvnmfcdesjmnrftgsjhbdrguireghiehigshio npboidngb8osrodgjeniofwjkughjjghnugrsgn j3uithi34joy45`)
    music.play(music.createSong(assets.song`l4`), music.PlaybackMode.LoopingInBackground)
    wood_spatula = sprites.create(assets.image`Stone spatula`, SpriteKind.Projectile)
    wspatimages = [
    img`
        . . . . . . . . . . . . . . 
        . . . . b b b b b . . . . . 
        . . . . b . b . b . . . . . 
        . . . . b . b . b . . . . . 
        . . . . b . b . b . . . . . 
        . . . . b b b b b . . . . . 
        . . . . . . b . . . . . . . 
        . . . . . . b . . . . . . . 
        . . . . . . b . . . . . . . 
        . . . . . . b . . . . . . . 
        . . . . . . b . . . . . . . 
        . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . 
        `,
    img`
        . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . 
        . . . . . b b b b b . . . . 
        . . . . . b . . . b . . . . 
        . . . . . b b b b b b b b b 
        . . . . . b . . . b . . . . 
        . . . . . b b b b b . . . . 
        . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . 
        `,
    img`
        . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . 
        . . . . . . b . . . . . . . 
        . . . . . . b . . . . . . . 
        . . . . . . b . . . . . . . 
        . . . . . . b . . . . . . . 
        . . . . b b b b b . . . . . 
        . . . . b . b . b . . . . . 
        . . . . b . b . b . . . . . 
        . . . . b . b . b . . . . . 
        . . . . b b b b b . . . . . 
        . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . 
        `,
    img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . b b b b b b . . . . . . 
        . . . . b . . . . b . . . . . . 
        b b b b b b b b b b . . . . . . 
        . . . . b . . . . b . . . . . . 
        . . . . b b b b b b . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `
    ]
    Ghee = true
    timer.after(500, function () {
        That_giant_undefeatable_rock_of_density = sprites.create(assets.image`Mr boldre`, SpriteKind.Bossrock)
    })
    That_giant_undefeatable_rock_of_density.setPosition(62, 0)
    timer.after(3600, function () {
        That_giant_undefeatable_rock_of_density.vy = 300
    })
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    wood_spatula = sprites.create(wspatimages[0], SpriteKind.Projectile)
    wood_spatula.setPosition(Princess.x, Princess.y)
    wood_spatula.setVelocity(0, -150)
    animate = true
    WisNew = true
})
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Ghee == true && Platform1 == 1 && Njkgfkjgfjhgfjbhgfjbhn == true) {
        for (let value of tiles.getTilesByType(tileUtil.arrow15)) {
            Kalaliba = sprites.create(assets.image`Kalaliba Flug`, SpriteKind.Enemy)
            tiles.placeOnRandomTile(Kalaliba, tileUtil.arrow15)
            Kalaliba.setBounceOnWall(true)
            Kalaliba.follow(Princess, 100)
            STEVELIFE = 2
            Njkgfkjgfjhgfjbhgfjbhn = false
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tileDarkGrass1, function (sprite, location) {
    Health_Down = true
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Princess.vy == 0 && Platform1 == 1) {
        Princess.vy = -300
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    sprites.destroy(sprite)
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.brick, function (sprite, location) {
    info.setLife(0)
    Coins = 0
})
controller.anyButton.onEvent(ControllerButtonEvent.Released, function () {
    if (Steveexist == true && Platform1 == 0 && Copysteve == 1) {
        for (let value of tiles.getTilesByType(sprites.builtin.forestTiles0)) {
            Steve0 = sprites.create(assets.image`Steve Flug`, SpriteKind.Enemy)
            tiles.placeOnRandomTile(Steve0, sprites.builtin.forestTiles0)
            Steve0.setBounceOnWall(true)
            Steve0.follow(Princess, 50)
            STEVELIFE = 2
            Copysteve = 0
            tiles.setTileAt(value, sprites.builtin.oceanDepths0)
        }
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    characterAnimations.loopFrames(
    Princess,
    assets.animation`Princess left`,
    Move_Speed,
    characterAnimations.rule(Predicate.MovingLeft)
    )
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.shrub, function (sprite, location) {
    L$()
})
function swapimage1 () {
    if (wood_spatula.image == wspatimages[0]) {
        wood_spatula.setImage(wspatimages[1])
    } else if (wood_spatula.image == wspatimages[1]) {
        wood_spatula.setImage(wspatimages[2])
    } else if (wood_spatula.image == wspatimages[2]) {
        wood_spatula.setImage(wspatimages[2])
        music.play(music.createSoundEffect(WaveShape.Noise, 5000, 1, 229, 197, 181, SoundExpressionEffect.Tremolo, InterpolationCurve.Logarithmic), music.PlaybackMode.UntilDone)
    } else if (wood_spatula.image == wspatimages[3]) {
        wood_spatula.setImage(wspatimages[0])
    }
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.darkGroundNorthWest1, function (sprite, location) {
    L3()
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.darkGroundCenter, function (sprite, location) {
	
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    characterAnimations.loopFrames(
    Princess,
    assets.animation`Princess rite`,
    Move_Speed,
    characterAnimations.rule(Predicate.MovingRight)
    )
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tilePath5, function (sprite, location) {
    if (Move_Speed == 100) {
        Move_Speed = 90
    } else if (Move_Speed == 79) {
        Move_Speed = 72
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    characterAnimations.loopFrames(
    Princess,
    assets.animation`Princess dovn`,
    Move_Speed,
    characterAnimations.rule(Predicate.MovingDown)
    )
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tileDarkGrass2, function (sprite, location) {
    Health_Down = true
})
function L3 () {
    Platform1 = 0
    music.stopAllSounds()
    Copysteve = 1
    music.play(music.stringPlayable("C C G C C G C C ", 300), music.PlaybackMode.LoopingInBackground)
    scene.cameraFollowSprite(Princess)
    tiles.loadMap(tiles.createMap(tilemap`level11`))
    game.showLongText("Welcome to the Winter Realm! In this realm and beyond an enemy (or enemies!) will spawn. Now you will have the skills to get ready for Berlin! Press B to launch spatulas.", DialogLayout.Bottom)
    wspatimages = [
    img`
        . . . . . . . . . . . . . . 
        . . . . e e e e e . . . . . 
        . . . . e . e . e . . . . . 
        . . . . e . e . e . . . . . 
        . . . . e . e . e . . . . . 
        . . . . e e e e e . . . . . 
        . . . . . . e . . . . . . . 
        . . . . . . e . . . . . . . 
        . . . . . . e . . . . . . . 
        . . . . . . e . . . . . . . 
        . . . . . . e . . . . . . . 
        . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . 
        `,
    img`
        . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . 
        . . . . . e e e e e . . . . 
        . . . . . e . . . e . . . . 
        . . . . . e e e e e e e e e 
        . . . . . e . . . e . . . . 
        . . . . . e e e e e . . . . 
        . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . 
        `,
    img`
        . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . 
        . . . . . . e . . . . . . . 
        . . . . . . e . . . . . . . 
        . . . . . . e . . . . . . . 
        . . . . . . e . . . . . . . 
        . . . . e e e e e . . . . . 
        . . . . e . e . e . . . . . 
        . . . . e . e . e . . . . . 
        . . . . e . e . e . . . . . 
        . . . . e e e e e . . . . . 
        . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . 
        `,
    img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . e e e e e e . . . . . . 
        . . . . e . . . . e . . . . . . 
        e e e e e e e e e e . . . . . . 
        . . . . e . . . . e . . . . . . 
        . . . . e e e e e e . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `
    ]
    Steveexist = true
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (Platform1 == 0) {
        stevdown = 1
        if (STEVELIFE == 0) {
            sprites.destroy(otherSprite, effects.fire, 499)
        }
    } else {
        Uihrftijhkufvjhngfvtjhbgfrjnrfgtjngrftjngtkjnihyji = 1
        if (Knjhfgdtvmngknjhrtgkmjrtgkmjhrkgrtgrtkmdklrkmghirtgjigrkgrtyjitkmigthgh_g_jtgbhmiortgj4rt50i4390i45i90huyi86y5ki9uyjh == 0) {
            sprites.destroy(otherSprite, effects.fire, 499)
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Bossrock, function (sprite, otherSprite) {
    Rocdown = true
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    Health_Down = true
})
let Spatuldovn = 0
let Rocdown = false
let Knjhfgdtvmngknjhrtgkmjrtgkmjhrkgrtgrtkmdklrkmghirtgjigrkgrtyjitkmigthgh_g_jtgbhmiortgj4rt50i4390i45i90huyi86y5ki9uyjh = 0
let Uihrftijhkufvjhngfvtjhbgfrjnrfgtjngrftjngtkjnihyji = 0
let Steve0: Sprite = null
let Kalaliba: Sprite = null
let WisNew = false
let That_giant_undefeatable_rock_of_density: Sprite = null
let Ghee = false
let wspatimages: Image[] = []
let wood_spatula: Sprite = null
let Steveexist = false
let Platform1 = 0
let Coins = 0
let Move_Speed = 0
let Health_Down = false
let Princess: Sprite = null
let animate = false
let Copysteve = 0
let STEVELIFE = 0
let stevdown = 0
let Njkgfkjgfjhgfjbhgfjbhn = false
L3()
let Down = 0
let Up = 0
let Left = 0
let Rite = 0
Njkgfkjgfjhgfjbhgfjbhn = true
stevdown = 0
STEVELIFE = 0
Copysteve = 0
animate = false
Princess = sprites.create(assets.image`Princess`, SpriteKind.Player)
tiles.placeOnTile(Princess, tiles.getTileLocation(129, 130))
Princess.scale += 2
info.setLife(20)
info.setScore(0)
Health_Down = false
Move_Speed = 100
Coins = 500
Platform1 = 0
scene.cameraFollowSprite(Princess)
controller.moveSprite(Princess, 100, 100)
Steveexist = false
game.onUpdateInterval(2000, function () {
    if (Uihrftijhkufvjhngfvtjhbgfrjnrfgtjngrftjngtkjnihyji == 1) {
        Knjhfgdtvmngknjhrtgkmjrtgkmjhrkgrtgrtkmdklrkmghirtgjigrkgrtyjitkmigthgh_g_jtgbhmiortgj4rt50i4390i45i90huyi86y5ki9uyjh += -1
        Uihrftijhkufvjhngfvtjhbgfrjnrfgtjngrftjngtkjnihyji = 0
    }
})
game.onUpdateInterval(2000, function () {
    if (stevdown == 1) {
        STEVELIFE += -1
        stevdown = 0
    }
})
game.onUpdateInterval(1000, function () {
    if (Health_Down) {
        info.changeLifeBy(-1)
    }
    if (info.life() == 0 || Coins == 0) {
        game.gameOver(false)
    }
    Health_Down = false
})
game.onUpdateInterval(1000, function () {
    if (Rocdown) {
        info.changeLifeBy(-15)
    }
    Rocdown = false
})
forever(function () {
    if (Platform1 == 1) {
        controller.moveSprite(Princess, 100, 0)
        Princess.ay = 500
    } else {
        controller.moveSprite(Princess, 100, 100)
        Princess.ay = 0
    }
})
forever(function () {
    scene.cameraFollowSprite(Princess)
})
forever(function () {
    game.setGameOverScoringType(game.ScoringType.HighScore)
    timer.after(86400000, function () {
        blockSettings.clear()
    })
})
game.onUpdateInterval(100, function () {
    if (animate == true) {
        swapimage1()
    }
    if (animate == true) {
        Spatuldovn = 1
        WisNew = false
    }
})
