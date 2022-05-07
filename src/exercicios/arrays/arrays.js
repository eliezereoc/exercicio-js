//****  Arrays ***************

const exemploArraysDelete = () => {
  const nomes = ["Maria", "João", "Ana", "Patricia", "Pablo"];
  const novo = [...nomes]; //espalha um array em outro array

  console.log("Nomes completo: ", nomes);
  delete nomes[2]; //deleta elemento 2
  console.log("Nomes, delete elemento 2: ", nomes);
  console.log("Novo, com spread: ", novo);
};

const exemploArraysPop = () => {
  const nomes = ["Maria", "João", "Ana", "Patricia", "Pablo"];

  //remove e retorna o ultimo elemento
  const removido_no_fim = nomes.pop();
  console.log("Nomes remove ultimo elemento: ", nomes);
  console.log("Elemento removido_no_fim: ", removido_no_fim);
};

const exemploArraysShif = () => {
  const nomes = ["Maria", "João", "Ana", "Patricia", "Pablo"];

  //remove e retorna o primeiro elemento, desloca os indices do array
  const removido_no_inicio = nomes.shift();
  console.log("Nomes remove primeiro elemento: ", nomes);
  console.log("Elemento removido_no_inicio: ", removido_no_inicio);
};

const exemploArraysPush = () => {
  const nomes = ["Maria", "João", "Ana", "Patricia", "Pablo"];

  //push
  nomes.push("Luana");
  console.log("Adiciona elemento no fim do array: ", nomes);
};

const exemploArraysUnShift = () => {
  const nomes = ["Maria", "João", "Ana", "Patricia", "Pablo"];

  //unshift, desloca indice
  nomes.unshift("Antonio");
  console.log("Adiciona elemento no inicio do array: ", nomes);
};

const exemploArraysSlice = () => {
  const nomes = ["Maria", "João", "Ana", "Patricia", "Pablo"];

  //slaice
  const novoNomeOne = nomes.slice(0, 2);
  console.log("Mantem indices 0 e 1: ", novoNomeOne);

  //O -1 remo o ultimo indice, se -2 o penultimo...
  const novoNomeTwo = nomes.slice(1, -1);
  console.log("Mantem indices 1 ao 3.: ", novoNomeTwo);
};

const exemploArraysConverteString = () => {
  const nomes = ["Maria", "João", "Ana", "Patricia", "Pablo"];

  //Converte string em array
  const myNameOne = "Eliezer de Oliveira Cardoso";
  const myNameTwo = myNameOne.split(" ");
  console.log(myNameTwo);

  //Converte array em string
  const myNameThree = myNameTwo.join(" ");
  console.log(myNameThree);
};

const exemploArraysConcat = () => {
  const array1 = [1, 2, 3, 4, 5];
  const array2 = [6, 7, 8, 9, 10];

  const array3 = array1.concat(array2, "Lucas");
  console.log("Com função concat.: ", array3);
};

const exemploArraysSpread = () => {
  const array1 = [1, 2, 3, 4, 5];
  const array2 = [6, 7, 8, 9, 10];

  //Utilizando spread
  const array4 = [...array1, ...array2];
  console.log("Com spread operator: ", array4);

  //Adicionado string
  const array5 = [...array1, "Valéria", ...array2];
  console.log("Com spread operator: ", array5);

  //Adicionando um array literal
  const array6 = [...array1, "Eliezer", ...array2, ...[11, 12, 13, 14, 15]];
  console.log("Com spread operator: ", array6);
};

const exemploSplice = () => {
  const nomes = ["Maria", "Lucas", "Joana", "Valeria", "João"];

  console.log("Array nomes completo: ", nomes);

  //nomes.splice(2, 1)
  //*************|  |---> Quantidade de elemento a serem removidos
  //*************|------> A partir de qual elemento irá começar a remover os elementos

  const removidoUm = nomes.splice(2, 1);
  console.log("Removido: ", removidoUm);
  console.log("RArray nomes alterdo: ", nomes);

  /***********************************************************/

  const removidoDois = nomes.splice(-2, Number.MAX_VALUE);
  console.log("Removido: ", removidoDois);
  console.log("RArray nomes alterdo: ", nomes);

  /***********************************************************/
  //Adiciona Valeria no indice 1 e não remove nenhum
  nomes.splice(2, 0, "Valéria");
  console.log("RArray nomes alterdo - 1 : ", nomes);

  //Remove Valeria do indice 2
  nomes.splice(2, 1);
  console.log("RArray nomes alterdo - 2: ", nomes);

  //Adiciona Valeria no indice 1, assim Lucas que estava no indice 1
  //é deslocado para o proximo indice
  nomes.splice(1, 0, "Valéria");
  console.log("RArray nomes alterdo - 3: ", nomes);

  //Remove Maria do indice 0 e adiciona Beatriz
  nomes.splice(0, 1, "Beatriz");
  console.log("RArray nomes alterdo - 3: ", nomes);

  //Exclui elementos dos indice 0 e 1 e adiona Valeria no indice 0.
  //Assim Lucas que estava no indice 2 vem para o indice 1
  nomes.splice(0, 2, "Valéria");
  console.log("RArray nomes alterdo - 3: ", nomes);
  for (const index in nomes) {
    console.log("Indice:", index, " - Nome: ", nomes[index]);
  }
};

//sempre retorna um arrei com a mesma quantidade ou menos de elementos
const exemploFilter = () => {
  const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

  //Ex. retorna os valores > que 10

  //com função (valor, indice, array)
  // const numerosFiltrados = numeros.filter((valor, indice, array) => {
  //   console.log("Valor:", valor, "Indice: ", indice, "Array: ", array);
  //   return valor > 10;
  // });

  const numerosFiltrados = numeros.filter((valor) => valor > 10);
  console.log("Array numeros completo:", numeros);
  console.log("Array numeros filtrado:", numerosFiltrados);

  const pessoas = [
    { nome: "Luiz", idade: 62 },
    { nome: "Marcia", idade: 18 },
    { nome: "Jose", idade: 53 },
    { nome: "Pedro", idade: 82 },
    { nome: "Paulo", idade: 25 },
    { nome: "Patricia", idade: 25 },
    { nome: "Valeria", idade: 25 },
    { nome: "Carlos", idade: 31 },
  ];

  console.log("Array completo: ", pessoas);

  //Retorne o nome que contenha 5 letras ou mais
  const pessoasMaiorNome = pessoas.filter((pessoa) => pessoa.nome.length >= 5);
  console.log("Nome com 5 letra ou mais: ", pessoasMaiorNome);

  //retorne as pessoas com mias de 50 anos
  const pessoasMaiorIdade = pessoas.filter((pessoa) => pessoa.idade > 50);
  console.log("Pessoas maiores de 50 anos", pessoasMaiorIdade);

  //retorna nomes que termina com 'a'
  const pessoasNomeTerminaA = pessoas.filter((pessoa) =>
    pessoa.nome.toLowerCase().endsWith("a")
  );
  console.log("Pessoas termina com a", pessoasNomeTerminaA);

  //retorna numeros pares
  const numPares = numeros.filter((num) => num % 2 === 0);
  console.log(numPares);

  //retorna numeros impares
  const numInpar = numeros.filter((num) => num % 2 !== 0);
  console.log(numInpar);

  //retorna numeros multiplos de 8
  const numMul8 = numeros.filter((num) => num % 8 === 0);
  console.log(numMul8);
};

const exemploMap = () => {
  //duplica o valor de cada indice
  const numeros = [5, 50, 80, 1, 2, 3, 8, 7, 11, 15, 22, 27];
  const numerosEmDobre = numeros.map((valor) => valor * 2);
  console.log(numerosEmDobre);

  const pessoas = [
    { nome: "Luiz", idade: 62 },
    { nome: "Marcia", idade: 18 },
    { nome: "Jose", idade: 53 },
    { nome: "Pedro", idade: 82 },
    { nome: "Paulo", idade: 25 },
    { nome: "Patricia", idade: 25 },
    { nome: "Valeria", idade: 25 },
    { nome: "Carlos", idade: 31 },
  ];

  //Retornar array de string somente com nomes
  const nomes = pessoas.map((nomes) => nomes.nome);
  console.log(nomes);

  //Retornar objeto somente com idades
  const idades = pessoas.map((obj) => ({ idade: obj.idade }));
  console.log(idades);

  //Adicionar chave no objeto nome
  const pessoasId = pessoas.map((objPessoa) => {
    const newObjP = { ...objPessoa };

    newObjP.id = Math.floor(Math.random() * 10);
    return newObjP;
  });

  console.log(pessoasId);
};

const exemploReduce = () => {
  const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
  const pessoas = [
    { nome: "Luiz", idade: 62 },
    { nome: "Marcia", idade: 18 },
    { nome: "Jose", idade: 53 },
    { nome: "Pedro", idade: 82 },
    { nome: "Paulo", idade: 25 },
    { nome: "Patricia", idade: 25 },
    { nome: "Valeria", idade: 25 },
    { nome: "Carlos", idade: 31 },
  ];

  //soma todos os elementos do array
  const total = numeros.reduce((acumulador, valor) => (acumulador += valor));
  console.log(total);

  //retorna a pessoa mais velha
  // const maisVelha = pessoas.reduce((acumulador, valor) => {
  //   if (acumulador.idade > valor.idade) return acumulador;
  //   return valor;
  // });

  //retorna a pessoa mais velha
  const maisVelha = pessoas.reduce((acumulador, valor) =>
    acumulador.idade > valor.idade ? acumulador : valor
  );

  console.log(maisVelha);
};

const exemploCombinaFilteMapReduce = () => {
  const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

  //Pares: [ 50, 80, 2, 8, 22 ]
  //Pares em dobre: [ 100, 160, 4, 16, 44 ]

  //retorna numero pares com valor em dobro
  const numerosPares = numeros
    .filter((num) => num % 2 === 0)
    .map((num) => num * 2)
    .reduce((acumulador, valor) => (acumulador += valor));
  console.log(numerosPares);
};

const exemploForEach = () => {
  const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
  numeros.forEach((valor, indice) => console.log(valor, indice));
};

const exemploArrays = () => {
  exemploArraysConcat();
  exemploArraysSpread();
  exemploArraysDelete();
  exemploArraysPop();
  exemploArraysShif();
  exemploArraysPush();
  exemploArraysUnShift();
  exemploArraysSlice();
  exemploArraysConverteString();
  exemploSplice();
  exemploMap();
  exemploFilter();
  exemploReduce();
  exemploCombinaFilteMapReduce();
  exemploForEach();
};

export default {
  exemploArrays,
};
