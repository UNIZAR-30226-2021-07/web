export async function loginUser({ email, password }) {
  let data = new URLSearchParams();
  data.append(`email`, email);
  data.append(`password`, password);

  const requestOptions = {
    method: "POST",
    body: data,
  };

  return fetch("https://gatovid.herokuapp.com/data/login", requestOptions)
    .then((data) => data.json())
    .catch((error) => {
      console.error("Error:", error);
    });
}

export async function logoutUser({ token }) {
  const requestOptions = {
    method: "POST",
    headers: {
      Authorization: "Bearer " + token,
    },
  };

  return fetch("https://gatovid.herokuapp.com/data/logout", requestOptions)
    .then((data) => data.json())
    .catch((error) => {
      console.error("Error:", error);
    });
}

export async function signUpUser({ name, email, password }) {
  let data = new URLSearchParams();
  data.append(`name`, name);
  data.append(`email`, email);
  data.append(`password`, password);

  const requestOptions = {
    method: "POST",
    body: data,
  };

  return fetch("https://gatovid.herokuapp.com/data/signup", requestOptions)
    .then((data) => data.json())
    .catch((error) => {
      console.error("Error:", error);
    });
}

export async function deleteUser({ token }) {

  const requestOptions = {
    method: "POST",
    headers: {
      Authorization: "Bearer " + token,
    },
  };

  return fetch("https://gatovid.herokuapp.com/data/remove_user", requestOptions)
    .then((data) => data.json())
    .catch((error) => {
      console.error("Error:", error);
    });
}

export async function getUserData({ token }) {
  const requestOptions = {
    method: "POST",
    headers: { Authorization: "Bearer " + token },
  };

  return fetch("https://gatovid.herokuapp.com/data/user_data", requestOptions)
    .then((data) => data.json())
    .catch((error) => {
      console.error("Error:", error);
    });
}

export async function getUserStats({ username }) {
  return fetch("https://gatovid.herokuapp.com/data/user_stats?name=" + username)
    .then((data) => data.json())
    .catch((error) => {
      console.error("Error:", error);
    });
}
