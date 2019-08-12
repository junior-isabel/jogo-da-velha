
const _message = (type, message) => {
    let elm;
    switch (type) {

        case 1:
            elm = document.getElementById('message-errors');
            elm.textContent = message;
            elm.className = "error-denied";
            return elm;
        case 2:
            elm = document.getElementById('message-success');
            elm.textContent = message;
            elm.className = "message-success";
            return elm;
            case 3:
                elm = document.getElementById('goal');
                elm.textContent = message;
                return elm;
        default:
            return null;
    }
}