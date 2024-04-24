controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    characterAnimations.loopFrames(
    Princess,
    assets.animation`Princes up`,
    Move_Speed,
    characterAnimations.rule(Predicate.MovingUp)
    )
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    wood_spatula = sprites.create(wspatimages[0], SpriteKind.Projectile)
    wood_spatula.setPosition(Princess.x, Princess.y)
    wood_spatula.setVelocity(0, -150)
    animate = true
    WisNew = true
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Princess.vy == 0 && Platform1 == 1) {
        Princess.vy = -300
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.brick, function (sprite, location) {
    info.setLife(0)
    Coins = 0
})
controller.anyButton.onEvent(ControllerButtonEvent.Released, function () {
    if (Steveexist == true && Platform1 == 0 && Copysteve == 1) {
        Steve = sprites.create(assets.image`Steve`, SpriteKind.Enemy)
        STEVELIFE = 2
        Steve.fx = 90
        Steve.follow(Princess, 50)
        steveloc = randint(1, 5)
        Copysteve = 0
        if (steveloc == 1) {
            Steve.setPosition(5, randint(0, 120))
        } else if (steveloc == 2) {
            Steve.setPosition(randint(0, 160), 0)
        } else if (steveloc == 3) {
            Steve.setPosition(160, randint(0, 120))
        } else if (steveloc == 4) {
            Steve.setPosition(randint(0, 160), 0)
        } else if (steveloc == 5) {
            Steve.setPosition(randint(0, 160), randint(0, 120))
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
    if (slip == true) {
        Princess.fx = 90
    }
})
function swapimage1 () {
    if (wood_spatula.image == wspatimages[0]) {
        wood_spatula.setImage(wspatimages[1])
    } else if (wood_spatula.image == wspatimages[1]) {
        wood_spatula.setImage(wspatimages[2])
    } else if (wood_spatula.image == wspatimages[2]) {
        wood_spatula.setImage(wspatimages[2])
    } else if (wood_spatula.image == wspatimages[3]) {
        wood_spatula.setImage(wspatimages[0])
    }
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.darkGroundNorthWest1, function (sprite, location) {
    L3()
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.darkGroundCenter, function (sprite, location) {
    L2()
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    characterAnimations.loopFrames(
    Princess,
    assets.animation`Princess rite`,
    Move_Speed,
    characterAnimations.rule(Predicate.MovingRight)
    )
    if (slip == true) {
        Princess.fx = 90
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    pause(0.0)
    if (WisNew == false) {
        sprites.destroy(otherSprite)
    }
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
    assets.animation`Princess nomove`,
    Move_Speed,
    characterAnimations.rule(Predicate.MovingDown)
    )
})
function L2 () {
    scene.setBackgroundImage(assets.image`plat`)
    tiles.loadMap(tiles.createMap(tilemap`platf`))
    Platform1 = 1
    scene.cameraFollowSprite(Princess)
    Princess.setPosition(14, 92)
    game.showLongText("Welcome to level 2! This is a platformer realm, which means you have to press A to jump.", DialogLayout.Bottom)
    controller.moveSprite(Princess, 100, 0)
    Princess.ay = 500
    Princess.setScale(2, ScaleAnchor.Middle)
}
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tileDarkGrass2, function (sprite, location) {
    Health_Down = true
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tileGrass2, function (sprite, location) {
	
})
function Upgrade1 () {
    game.showLongText("Do you want to upgrade your princess? You will lose 50 coins, but gain 1 point if you choose to upgrade.", DialogLayout.Bottom)
    if (controller.A.isPressed()) {
        info.changeScoreBy(1)
        Move_Speed = 79
        game.showLongText("You are now faster!", DialogLayout.Bottom)
    } else {
        timer.after(10000, function () {
            game.showLongText("Guess you don't want to help yourself in the long run!", DialogLayout.Bottom)
        })
    }
}
function L3 () {
    music.stopAllSounds()
    Copysteve = 1
    slip = true
    music.play(music.stringPlayable("C C G C C G C C ", 300), music.PlaybackMode.LoopingInBackground)
    controller.moveSprite(Princess, 100, 100)
    Princess.ay = 0
    Platform1 = 0
    scene.cameraFollowSprite(Princess)
    tiles.loadMap(tiles.createMap(tilemap`level11`))
    game.showLongText("Welcome to the Winter Realm! In this realm and beyond an enemy (or enemies!) will spawn. Now you will have the skills to get ready for Berlin! Press B to launch spatulas.", DialogLayout.Bottom)
    wspatimages = [
    ,
    ,
    ,
    
    ]
    Steveexist = true
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    stevdown = 1
    if (STEVELIFE == 0) {
        sprites.destroy(otherSprite, effects.fire, 499)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    Health_Down = true
})
let steveloc = 0
let Steve: Sprite = null
let WisNew = false
let wspatimages: Image[] = []
let wood_spatula: Sprite = null
let Platform1 = 0
let Coins = 0
let Move_Speed = 0
let Health_Down = false
let animate = false
let Princess: Sprite = null
let Steveexist = false
let slip = false
let Copysteve = 0
let STEVELIFE = 0
let stevdown = 0
stevdown = 0
STEVELIFE = 0
Copysteve = 0
slip = false
Steveexist = false
story.printDialog("It is 1628. While strolling across the plains of Geschwindigkeit, you find a little girl with a crown and a spatula.", 90, 90, 150, 150, 1, 15, story.TextSpeed.Normal)
story.printDialog("When talking to the girl, you find out that her name is Sophia Amelia Geschia, the heir to the Kingdom of Geschwindigkeit, and that her spatula is her weapon.", 90, 90, 150, 150, 1, 15, story.TextSpeed.Normal)
pause(2000)
story.printDialog("You must help her defeat the Dragon of Geschwindigkeit in this mission.", 90, 90, 150, 150, 1, 15, story.TextSpeed.Normal)
characterAnimations.loopFrames(
Princess,
assets.animation`Princess nomove`,
100,
characterAnimations.rule(Predicate.NotMoving)
)
tiles.setCurrentTilemap(tilemap`level0`)
animate = false
Princess = sprites.create(assets.image`Princess`, SpriteKind.Player)
tiles.placeOnTile(Princess, tiles.getTileLocation(129, 130))
Princess.scale += 2
music.play(music.createSong(assets.song`intro`), music.PlaybackMode.LoopingInBackground)
info.setLife(20)
info.setScore(0)
Health_Down = false
Move_Speed = 100
Coins = 500
Platform1 = 0
scene.cameraFollowSprite(Princess)
controller.moveSprite(Princess, 100, 100)
game.showLongText("Use the buttons to move her! Find the portal to teleport to the next realm.", DialogLayout.Bottom)
timer.after(60000, function () {
    Upgrade1()
})
pause(2000)
game.onUpdate(function () {
    if (slip == true) {
        if (controller.right.isPressed() && !(controller.left.isPressed())) {
            Princess.fx = 0
            if (Princess.vx < 100) {
                Princess.vx += 5
            } else {
                Princess.vy = 100
            }
        } else if (controller.left.isPressed() && !(controller.right.isPressed())) {
            Princess.fx = 0
            if (Princess.vx > -100) {
                Princess.vx += -5
            } else {
                Princess.vy = -100
            }
        }
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
forever(function () {
    if (Platform1 == 1) {
        controller.moveSprite(Princess, 100, 0)
    } else {
        controller.moveSprite(Princess, 100, 100)
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
    if (animate == true && wood_spatula.y < Princess.y - 50) {
        wood_spatula.follow(Princess)
        WisNew = false
    }
})
