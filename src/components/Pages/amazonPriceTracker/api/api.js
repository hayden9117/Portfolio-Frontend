export const deleteProduct = (url) => {
  // fetch(`https://richiehayden-portfolio-backend.herokuapp.com/deleteList`, {
  fetch(`https://richiehayden-portfolio-backend.herokuapp.com/deleteList`, {
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
  return await fetch(
    `https://richiehayden-portfolio-backend.herokuapp.com/getAmazonData`,
    {
      // fetch(`http://localhost:3001/getAmazonData`, {
      credentials: "include",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        charset: "UTF-8",
      },
    }
  ).then((response) => response.json());
};

export const GetProductTimeData = async () => {
  return await fetch(
    "https://richiehayden-portfolio-backend.herokuapp.com/getProductWeek",
    {
      credentials: "include",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        charset: "UTF-8",
      },
    }
  ).then((response) => response.json());
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
  return fetch(
    `https://richiehayden-portfolio-backend.herokuapp.com/AmazonData`,
    {
      credentials: "include",
      method: "post",
      headers: {
        "Content-Type": "application/json",
        charset: "UTF-8",
      },
      body: JSON.stringify(obj),
    }
  )
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
    })
    .catch(function () {
      console.log("post incomplete");
    });
};
