const characters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const symbols = ['~', '`', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+', '=', '{', '[', '}', ']', ',', '|', ':', ';', '<', '>', '.', '?', '/'];

const generate = document.getElementById('generate');
const password_1 = document.getElementById('password_1');
const password_2 = document.getElementById('password_2');

generate.addEventListener('click', () => {
    const length = parseInt(document.getElementById('length').value);
    const useSymbol = document.getElementById('symbol');
    const useDigit = document.getElementById('digit');

    let characters_to_use = [];
    characters_to_use = [...characters];

    if (useSymbol.checked) {
        characters_to_use.push(...symbols);
    }

    if (useDigit.checked) {
        characters_to_use.push(...digits);
    }

    password_1.textContent = generate_password(characters_to_use, length);
    password_2.textContent = generate_password(characters_to_use, length);
});

function generate_password(characters_to_use, length) {
    let password = '';
    for (let i = 1; i <= length; i++) {
        password += characters_to_use[Math.floor(Math.random() * characters_to_use.length)];
    }
    return password;
}
