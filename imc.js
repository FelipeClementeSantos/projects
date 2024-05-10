const calcular = document.getElementById('calcular'); //puxa no html(document) o id


function imc () {
    const nome = document.getElementById('nome').value; //necessário o value para pegar o tipo de dado para validação.
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');//precisamos apenas do resultado, não um valor especifico.

    if (nome !== '' && altura !== '' && peso !== '') { 
        
        const valorIMC = (peso / (altura * altura)).toFixed(2);

        let classificacao = ''

        if (valorIMC < 18.5){
            classificacao = 'abaixo do peso.';
        } else if (valorIMC < 25) {
            classificacao = 'com peso ideal. Parabéns!';
        } else if (valorIMC < 30) {
            classificacao = 'levemente acima do peso.';
        } else if (valorIMC < 35) {
            classificacao = 'obesidade grau I.';
        } else if (valorIMC < 40) {
            classificacao = 'obesidade grau II'
        } else {
            classificacao = 'obesidade grau III. Cuidado!';
        }

        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`;

    } else [
        resultado.textContent = 'Preencha todos os campos!'
    ]

}

calcular.addEventListener('click', imc);
