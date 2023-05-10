

export const resolveWinningTheGame = (arr: Array<{trig: string}>) => {
    switch(true){
        case (arr[0].trig !== 'empty' && (arr[0].trig === arr[1].trig ) && (arr[0].trig === arr[2].trig)):
            return {won: true, msg: `The ${arr[0].trig} Won the Game`};
        case (arr[3].trig !== 'empty' && (arr[3].trig === arr[4].trig ) && (arr[3].trig === arr[5].trig)):
            return {won: true, msg: `The ${arr[3].trig} Won the Game`};
        case (arr[6].trig !== 'empty' && (arr[6].trig === arr[7].trig ) && (arr[6].trig === arr[8].trig)):
            return {won: true, msg: `The ${arr[6].trig} Won the Game`};
        case (arr[2].trig !== 'empty' && (arr[2].trig === arr[4].trig ) && (arr[2].trig === arr[7].trig)):
            return {won: true, msg: `The ${arr[2].trig} Won the Game`};
        case (arr[0].trig !== 'empty' && (arr[0].trig === arr[4].trig ) && (arr[0].trig === arr[8].trig)):
            return {won: true, msg: `The ${arr[0].trig} Won the Game`};
        case (arr[1].trig !== 'empty' && (arr[1].trig === arr[4].trig ) && (arr[1].trig === arr[7].trig)):
            return {won: true, msg: `The ${arr[1].trig} Won the Game`};
        case (arr[0].trig !== 'empty' && (arr[0].trig === arr[3].trig ) && (arr[0].trig === arr[6].trig)):
            return {won: true, msg: `The ${arr[0].trig} Won the Game`};
        case (arr[2].trig !== 'empty' && (arr[2].trig === arr[5].trig ) && (arr[2].trig === arr[8].trig)):
            return {won: true, msg: `The ${arr[2].trig} Won the Game`};
        default:
            return {won: false, msg: ""};
    }
}
