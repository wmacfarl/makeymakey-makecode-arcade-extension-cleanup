//% weight=100 color=#2BB473 icon="\uf11c"
namespace MakeyMakey {
    export enum MakeyMakeyKey {
        //% block="UP ARROW"
        UP = keymap.KeyCode.UpArrow,
        //% block="DOWN ARROW"
        DOWN = keymap.KeyCode.DownArrow,
        //% block="LEFT ARROW"
        LEFT = keymap.KeyCode.LeftArrow,
        //% block="RIGHT ARROW"
        RIGHT = keymap.KeyCode.RightArrow,
        //% block="SPACE"
        SPACE = keymap.KeyCode.Space,
        //% block="LEFT CLICK"
        LEFT_CLICK = keymap.KeyCode.MouseLeftButton,
        //% block="RIGHT CLICK"
        RIGHT_CLICK = keymap.KeyCode.MouseRightButton,
        //% block="W"
        W = keymap.KeyCode.W,
        //% block="A"
        A = keymap.KeyCode.A,
        //% block="S"
        S = keymap.KeyCode.S,
        //% block="D"
        D = keymap.KeyCode.D,
        //% block="F"
        F = keymap.KeyCode.F,
        //% block="G"
        G = keymap.KeyCode.G
    }

    function MakeyMakeyKeyToKeyCode(makeyMakeyKey: MakeyMakeyKey) {
        switch (makeyMakeyKey) {
            case (MakeyMakeyKey.UP):
                return keymap.KeyCode.UpArrow
            case (MakeyMakeyKey.DOWN):
                return keymap.KeyCode.DownArrow
            case (MakeyMakeyKey.LEFT):
                return keymap.KeyCode.LeftArrow
            case (MakeyMakeyKey.RIGHT):
                return keymap.KeyCode.RightArrow
            case (MakeyMakeyKey.SPACE):
                return keymap.KeyCode.Space
            case (MakeyMakeyKey.LEFT_CLICK):
                return keymap.KeyCode.MouseLeftButton
            case (MakeyMakeyKey.W):
                return keymap.KeyCode.W
            case (MakeyMakeyKey.A):
                return keymap.KeyCode.A
            case (MakeyMakeyKey.S):
                return keymap.KeyCode.S
            case (MakeyMakeyKey.D):
                return keymap.KeyCode.D
            case (MakeyMakeyKey.F):
                return keymap.KeyCode.F
            case (MakeyMakeyKey.G):
                return keymap.KeyCode.G
            case (MakeyMakeyKey.RIGHT_CLICK):
                return keymap.KeyCode.MouseRightButton
        }
        return null
    }

    export enum PlayerNumber {
        //% block="player 1"
        ONE = 1,
        //% block="player 2"
        TWO = 2,
        //% block="player 3"
        THREE = 3,
        //% block="player 4"
        FOUR = 4
    }
    //% blockId=set_simulator_keymap_for_player
    //% block="set simulator keys for $playerNumber \n UP $buttonUp \n DOWN $buttonDown \n LEFT $buttonLeft \n RIGHT $buttonRight \n A $buttonA \n B $buttonB"    
    export function setSimulatorKeymap(
        playerNumber: PlayerNumber = 1,
        buttonUp: MakeyMakeyKey = MakeyMakeyKey.UP,
        buttonDown: MakeyMakeyKey = MakeyMakeyKey.DOWN,
        buttonLeft: MakeyMakeyKey = MakeyMakeyKey.LEFT,
        buttonRight: MakeyMakeyKey = MakeyMakeyKey.RIGHT,
        buttonA: MakeyMakeyKey = MakeyMakeyKey.SPACE,
        buttonB: MakeyMakeyKey = MakeyMakeyKey.LEFT_CLICK) {
        keymap.setPlayerKeys(
            playerNumber,
            MakeyMakeyKeyToKeyCode(buttonUp),
            MakeyMakeyKeyToKeyCode(buttonDown),
            MakeyMakeyKeyToKeyCode(buttonLeft),
            MakeyMakeyKeyToKeyCode(buttonRight),
            MakeyMakeyKeyToKeyCode(buttonA),
            MakeyMakeyKeyToKeyCode(buttonB)
        )
    }



    //% blockId=set_simulator_keymap_to_makey_makey_defaults
    //% block="use makey makey default keys"
    export function setMakeyMakeyDefaults() {
        setSimulatorKeymap(1,
            MakeyMakeyKey.UP,
            MakeyMakeyKey.DOWN,
            MakeyMakeyKey.LEFT,
            MakeyMakeyKey.RIGHT,
            MakeyMakeyKey.LEFT_CLICK,
            MakeyMakeyKey.SPACE
        )
        setSimulatorKeymap(2,
            MakeyMakeyKey.W,
            MakeyMakeyKey.A,
            MakeyMakeyKey.S,
            MakeyMakeyKey.D,
            MakeyMakeyKey.G,
            MakeyMakeyKey.F
        )
    }
}