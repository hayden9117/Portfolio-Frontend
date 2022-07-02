export const createPage = async (obj) => {
  console.log(obj);

  return fetch(
    `https://richiehayden-portfolio-backend.herokuapp.com/createPage`,
    {
      credentials: "include",
      method: "put",
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
      return true;
    })
    .catch(function () {
      console.log("post incomplete");
    });
};
