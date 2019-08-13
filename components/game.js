
const game = {};
game.goal = "X";
game.on = false;
game.win = { key: false, status: 'GANHOU' };
game.store = new Array(9);
game.store.fill('');
game.cell = 9;
game.play = (index) => {
    if (game.on === false) {
        alert('game desligado');
        return null;
    }
    if (game.isValid(index) && game.win.key === false) {
        game.store[index] = game.goal;
        game.isWin();
        if (game.win.key === false) game.nextGoal();
        else {
            if (game.win.status === 'GANHOU')
                _message(2, `Ganhou o jagador ${game.goal}, parabéns para você campeão`);
            else if (game.win.status === "EMPATE")
                _message(2, `EMPATE`);
        }
        _message(1, '');
    } else {
        if (game.win.key === false)
            _message(1, `jogada invalida pelo jogador ${game.goal}, procura jogar num campo vazio`)
        else
            _message(1, `Para continuar a jogar o players devem iniciar um novo jogo`)
    }

    game.f5();
}

game.start = () => {
    if (game.on === false) return null;
    _message(3, `player ${game.goal}`);
    for (let i = 0; i < game.store.length; i++)
        game.container.appendChild(_button(game.store[i], i, game.play))
}
game.ligar = () => {
    if (game.on === true) return;
    game.on = true;
    game.f5();
}

game.isValid = (index) => game.store[index] === '';
game.nextGoal = () => game.goal = game.goal === "X" ? "O" : "X";
game.isWin = () => {
    let store = game.store;
    game.win.key = true;
    if (store[0] === store[1] && store[1] === store[2] && store[0] !== '') {

        store[0] = 'W';
        store[1] = "I";
        store[2] = "N";
    } else if (store[3] === store[4] && store[4] === store[5] && store[3] !== '') {

        store[3] = 'W';
        store[4] = "I";
        store[5] = "N";
    } else if (store[6] === store[7] && store[7] === store[8] && store[6] !== '') {

        store[6] = 'W';
        store[7] = "I";
        store[8] = "N";
    } else if (store[0] === store[3] && store[3] === store[6] && store[0] !== '') {
        store[0] = 'W';
        store[3] = "I";
        store[6] = "N";

    } else if (store[1] === store[4] && store[4] === store[7] && store[1] !== '') {
        store[1] = 'W';
        store[4] = "I";
        store[7] = "N";

    } else if (store[2] === store[5] && store[5] === store[8] && store[2] !== '') {
        store[2] = 'W';
        store[5] = "I";
        store[8] = "N";
    }

    else if (store[0] === store[4] && store[4] === store[8] && store[0] !== '') {
        store[0] = 'W';
        store[4] = "I";
        store[8] = "N";

    } else if (store[2] === store[4] && store[4] === store[6] && store[2] !== '') {
        store[2] = 'W';
        store[4] = "I";
        store[6] = "N";

    } else if (store[0] !== '' && store[1] !== '' && store[2] !== '' && store[3] !== '' && store[4] !== '' &&
        store[5] !== '' && store[6] !== '' && store[7] !== '' && store[8] !== '') {
        store[0] = 'E';
        store[1] = "M";
        store[2] = "P";
        store[3] = 'A';
        store[4] = "T";
        store[5] = "E";
        store[6] = '.';
        store[7] = ".";
        store[8] = "."
        game.win.status = "EMPATE";
    } else {
        game.win.key = false;
    }
}
game.f5 = () => {
    game.container.innerHTML = "";

    game.start();
}
game.container = (container) => {
    game.container = container;
}
game.reset = () => {
    game.goal = "X";
    game.win = { key: false, status: 'GANHOU' };
    game.store = new Array(9);
    game.store.fill('');
    game.cell = 9;
    game.on = false;
    _message(1, "");
    _message(2, "");
    _message(3, "");
    game.container.innerHTML = "";
}

game.container(document.getElementsByClassName('table')[0]);

