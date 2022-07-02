export const postFeedBack = (subject, body) => {
  // fetch(`https://http://localhost:3001/deleteList`, {
  let bodyObject = { subject: subject, body: body };
  fetch(`https://richiehayden-portfolio-backend.herokuapp.com/feedback`, {
    credentials: "include",
    method: "post",
    headers: {
      "Content-Type": "application/json",
      charset: "UTF-8",
    },
    body: JSON.stringify(bodyObject),
  })
    .then((response) => response.json())
    .then((result) => {
      alert(result.message);
    });
};
