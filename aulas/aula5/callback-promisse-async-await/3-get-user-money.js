const users = ["palmer", "ju", "natalia"];
const money = {
  palmer: 100,
  ju: 50000,
  natalia: 0,
};

const getMoney = (user, callback) => {
  setTimeout(() => {
    const value = money[user];
    if (!value) {
      callback("Não tenho esse dado ai");
      return;
    }

    callback(false, value);
  }, 2000);
};

const getUser = (index, callback) => {
  setTimeout(() => {
    const value = users[index];
    if (!value) {
      callback("Deu ruim não tenho esse cara aq");
      return;
    }

    callback(false, value);
  }, 3000);
  return;
};

getUser(0, (error, user) => {
  if (error) {
    console.error(error);
    return;
  }
  console.log(`${user} -> tem quanto na conta ?`);
  getMoney(user, (err, money) => {
    if (err) {
      console.error("deu ruim");
      return;
    }
  });
});
