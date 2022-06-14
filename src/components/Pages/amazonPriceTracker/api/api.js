export const deleteProduct = (id, url) => {
  // fetch(`https://https://richiehayden-portfolio-backend.herokuapp/deleteList`, {
  fetch(`https://richiehayden-portfolio-backend.herokuapp/deleteList`, {
    credentials: "include",
    method: "delete",
    headers: {
      "Content-Type": "application/json",
      charset: "UTF-8",
    },
    body: JSON.stringify({ id: id, url: url }),
  })
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
    });
};

export const GetAmazonData = async (res) => {
  return await fetch(
    `https://richiehayden-portfolio-backend.herokuapp/getAmazonData`,
    {
      // fetch(`https://richiehayden-portfolio-backend.herokuapp/getAmazonData`, {
      credentials: "include",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        charset: "UTF-8",
      },
    }
  ).then((response) => response.json());
};

export const GetProductTimeData = async (token) => {
  const obj = {
    userID: token,
  };
  return await fetch(
    "https://richiehayden-portfolio-backend.herokuapp/getProductWeek",
    {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        charset: "UTF-8",
      },
      body: JSON.stringify(obj),
    }
  )
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
  // fetch(`https://richiehayden-portfolio-backend.herokuapp/AmazonData`, {
  return fetch(`https://richiehayden-portfolio-backend.herokuapp/AmazonData`, {
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
