export const deleteProduct = (url) => {
  // fetch(`https://http://localhost:3001.com/deleteList`, {
  fetch(`http://localhost:3001.com/deleteList`, {
    credentials: "include",
    method: "delete",
    headers: {
      "Content-Type": "application/json",
      charset: "UTF-8",
    },
    body: JSON.stringify({ url: url }),
  })
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
    });
};

export const GetAmazonData = async (res) => {
  return await fetch(`http://localhost:3001.herokuapp.com/getAmazonData`, {
    // fetch(`http://localhost:3001/getAmazonData`, {
    credentials: "include",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      charset: "UTF-8",
    },
  }).then((response) => response.json());
};

export const GetProductTimeData = async (token) => {
  const obj = {
    userID: token,
  };
  return await fetch("http://localhost:3001/getProductWeek", {
    credentials: "include",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      charset: "UTF-8",
    },
    body: JSON.stringify(obj),
  })
    .then((response) => response.json())
    .catch(function () {
      console.log("post incomplete");
    });
};

export const postUrl = async (url, token) => {
  console.log(token);
  const obj = {
    userID: token.token.token,
    url: url,
    itemPrice: "temp",
    productname: "temp",
  };
  // fetch(`https://richiehayden-portfolio-backend.herokuapp.com/AmazonData`, {
  return fetch(`http://localhost:3001/AmazonData`, {
    credentials: "include",
    method: "post",
    headers: {
      "Content-Type": "application/json",
      charset: "UTF-8",
    },
    body: JSON.stringify(obj),
  })
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      return true;
    })
    .catch(function () {
      console.log("post incomplete");
    });
};
