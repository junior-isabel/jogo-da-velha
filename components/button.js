

const _button = (value, index, play) => {

    const btn = document.createElement('button');
    btn.type = "button";
    btn.textContent = value;
    btn.className = value;
    btn.addEventListener('click', () => play(index))
    return btn;
}

