const users = ["palmer", "ju", "natalia"];

const getUser = (index, callback) => {
  setTimeout(() => {
    const value = users[index];
    if (!value) {
      // Aqui estamos passando um erro como primeiro parâmetro
      callback("Deu ruim não tenho esse cara aqui", null);
      return;
    }

    // Aqui estamos passando null como erro porque não deu erro
    callback(false, value);
  }, 3000);
  return;
};

// Colocamos uma convenção de que o primeiro parâmetro é o erro
getUser(0, (error, user) => {
  if (error) {
    console.error(error);
    return;
  }
  console.log("-->", user);
});
