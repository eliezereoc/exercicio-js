function gerarNumerosEntre(min, max) {
    if(min > max) {
        [max, min] = [min, max];
    }

    return new Promise(resolve => {
        resolve(7);
    });
}

gerarNumerosEntre(10, 30).then(console.log());