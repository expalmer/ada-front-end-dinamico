// aqui uma função que soma dois números
const soma = (a, b) => {
  return a + b;
};

const resultado = soma(1, 2);

// de forma síncrona
console.log({ resultado });

const somaAsync = (a, b, callback) => {
  setTimeout(() => {
    const resultado = a + b;
    callback(resultado);
  }, 2000);
  return undefined;
};

const callback = (resultado) => {
  // Aqui é o que vai acontecer quando a função assíncrona terminar
  console.log({ resultado });
};

const resultadoAsync = somaAsync(1, 2, callback);
console.log({ resultadoAsync }); // undefined porque a função não retorna nada
