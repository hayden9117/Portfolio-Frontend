export const deleteProduct = (url) => {
  fetch(`https://richiehayden-portfolio-backend.herokuapp.com/deleteList`, {
    // fetch(`http://localhost:3001/deleteList`, {
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
