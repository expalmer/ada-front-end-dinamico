const users = ["palmer", "ju", "natalia"];
const money = {
  palmer: 100,
  ju: 50000,
  natalia: 0,
};

const getMoney = (user) => {
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
  try {
    console.log("Começou");
    const user = await getUser(0);
    console.log({ user });
    const money = await getMoney(user);
    console.log({ money });
    console.log("Terminou");
  } catch (error) {
    // Se der erro, cai aqui
    console.log("ERRO", { error });
  }
};
myFunc();
