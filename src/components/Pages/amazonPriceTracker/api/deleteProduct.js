export const deleteProduct = (url) => {
  fetch(`http://localhost:3001/deleteList`, {
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

export const getAmazonData = () => {
  fetch("http://localhost:3001/getAmazonData", {
    credentials: "include",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      charset: "UTF-8",
    },
  })
    .then((response) => response.json())
    .then((res) => res.map((res) => res))
    .then((result) => {
      return result;
    });
};

export const getProductTimeData = () => {
  fetch("http://localhost:3001/getAmazonData", {
    credentials: "include",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      charset: "UTF-8",
    },
  })
    .then((response) => response.json())
    .then((res) => res.map((res) => res))
    .then((result) => {
      return result;
    });
};
