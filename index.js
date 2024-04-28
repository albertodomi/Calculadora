// Selecionando elementos do DOM
const display = document.getElementById('display');
const buttons = document.getElementById('calculator-buttons');

// Adicionando ouvinte de evento de clique aos botões
buttons.addEventListener('click', function(event) {
    const clickedButton = event.target;

    // Se o botão clicado não for um botão, saia da função
    if (!clickedButton.matches('button')) {
        return;
    }

    // Obtendo o valor do botão clicado
    const buttonValue = clickedButton.textContent;

    // Atualizando o display de acordo com o botão clicado
    if (buttonValue === '=') {
        // Realizando o cálculo
        try {
            const result = eval(display.textContent);
            display.textContent = result;
        } catch (error) {
            display.textContent = 'Erro';
        }
    } else if (buttonValue === 'CE') {
        // Limpar a entrada atual
        display.textContent = '';
    } else if (buttonValue === 'C') {
        // Limpar toda a calculadora
        display.textContent = '';
    } else if (buttonValue === '«') {
        // Apagar o último caractere
        display.textContent = display.textContent.slice(0, -1);
    } else {
        // Adicionar o valor do botão ao display
        display.textContent += buttonValue;
    }
});
