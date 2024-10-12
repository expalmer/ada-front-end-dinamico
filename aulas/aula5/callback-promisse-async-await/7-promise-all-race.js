const users = ["palmer", "ju", "natalia"];
const money = {
  palmer: 100,
  ju: 50000,
  natalia: 0,
};

const getMoney = (user, callback) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const value = money[user];
      if (!value) {
        reject("Não tenho esse dado ai");
        return;
      }

      resolve(false, value);
    }, 2000);
  });
};

const getUser = (index) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const value = users[index];
      if (!value) {
        reject("Deu ruim não tenho esse cara aq");
        return;
      }
      resolve(value);
    }, 3000);
  });
};

const myFunc = async () => {
  console.log(1);
  try {
    // Aqui queremos que as 3 funções sejam executadas ao mesmo tempo
    // const user1 = await getUser(0);
    // console.log({ user1 });
    // const user2 = await getUser(1);
    // console.log({ user2 });
    // const user3 = await getUser(2);
    // console.log({ user3 });
    const res = await Promise.all([getUser(0), getUser(1), getUser(2)]);
    console.log({ res });
  } catch (error) {
    console.log("ERRO", { error });
  }
};
myFunc();

const myFunc2 = async () => {
  // Aqui é um exemplo de promise.race
  try {
    const res = await Promise.race([getUser(0), getUser(1), getUser(2)]);
    // Aqui só vai retornar o primeiro que terminar
    console.log({ res });
  } catch (error) {
    console.log("ERRO", { error });
  }
};
