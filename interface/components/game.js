
const game = {};
game.goal = "X";
game.store = new Array(9);
game.store.fill('');
game.cell = 9;
game.play = (index) => {
    game.store[index] = game.goal;

    console.log(game.store[index])
    game.f5();
    game.goal = game.goal === "X"? "O": "X";
}

game.start = () => {
    for (let i = 0; i < game.store.length; i++)
        game.container.appendChild(button(game.store[i], i, game.play))
}

game.f5 = () => {
    game.container.innerHTML ="";
    game.start();
}
game.container = (container) => {
    game.container = container;
}

game.container(document.getElementsByClassName('table')[0]);

game.start();
//game.play(0, 'X');
console.log(game);