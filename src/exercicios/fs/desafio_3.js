const fs = require('fs');
const path = require('path');

function lerArquivo(caminho) {
    return new Promise(resolve => {
        fs.readFile(caminho, function(_, conteudo) {
            resolve(conteudo.toString());
        }); 
        // console.log('Depois de ler arquivo');
    });
}

const caminho = path.join(__dirname, 'dados.txt');

lerArquivo(caminho)
    .then(conteudo => conteudo.split('\n'))
    .then(linhas => linhas.join(','))
    .then(conteudo => `O valor final é: ${conteudo}`)
    .then(console.log);

// lerArquivo(caminho)
//     .then(conteudo => conteudo.split('\n'))
//     .then(linhas => console.log(linhas.length));

// lerArquivo(caminho)
//     .then(conteudo => conteudo.split('\n'))
//     .then(linhas => console.log(linhas[2]));

// lerArquivo(caminho)
//     .then(conteudo => console.log(conteudo));