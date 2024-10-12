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

getUser(0)
  .then((value) => {
    console.log({ value });
    return getMoney(value);
  })
  .then((money) => {
    console.log({ money });
  })
  .catch((err) => {
    console.log({ err });
  });
