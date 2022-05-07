// Gera numero aleatorio 
function gerarNumerosEntre(min, max) {
    //se o valor de mim for maior 
    //que max faz a inverção dos valores
    if(min > max) {
        [max, min] = [min, max];
    }

    //retorna numero gerado atraves da chamad a de promise
    return new Promise(resolve => {
        const fator = max - min + 1;
        //calcular valor aleatorio com base no que foi passado por parametro
        const aleatorio = parseInt(Math.random() * fator) + min; 
        resolve(aleatorio);
    });
}

gerarNumerosEntre(10, 30)
    .then(num => num * 10)
    .then(numX10 => `O Número gerado foi ${numX10}`)
    .then(console.log);