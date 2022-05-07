function esperarPor(tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(() => resolve(), tempo)        
    })
}
// esperarPor(1000)
//     .then(() => console.log('Executando promise 1...'))
//     .then(esperarPor)
//     .then(() => console.log('Executando promise 2...'))
//     .then(esperarPor)
//     .then(() => console.log('Executando promise 3...'))

function retornaValor(){
    return new Promise(resolve => {
        setTimeout(() => resolve(10), 5000);
    })
}

async function executar(){
    console.time('Tempo execução');
    let valor = await retornaValor();    
    await esperarPor(1000);
    console.log(`Async/Await ${valor}...`);
    await esperarPor(1000);
    console.log(`Async/Await ${valor + 1}...`);
    await esperarPor(1000);
    console.log(`Async/Await ${valor + 2}...`);
    console.timeLog('Tempo execução');

    return valor + 4;
}


executar().then(console.log) ;
