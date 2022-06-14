export const getJobs = async () => {
  return await fetch(
    "https://services.onetcenter.org/ws/mnm/careers/?client=personal_project3&sort=name&start=1&end=938",
    {
      method: "GET",
      mode: "cors",
      credentials: "omit",

      headers: {
        Accept: "application/json",
      },
    }
  ).then((res) => res.json());
};

export const getJob = async () => {
  return await fetch(
    "https://services.onetcenter.org/ws/mnm/careers/?client=personal_project3&sort=name&start=1&end=40",
    {
      method: "GET",
      mode: "cors",
      credentials: "omit",

      headers: {
        Accept: "application/json",
      },
    }
  ).then((res) => res.json());
};
