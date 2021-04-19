const baseUrl = "https://gatovid.herokuapp.com";

export async function loginUser({ email, password }) {
  let data = new URLSearchParams();
  data.append(`email`, email);
  data.append(`password`, password);

  const requestOptions = {
    method: "POST",
    body: data,
  };

  return fetch(baseUrl + "/data/login", requestOptions)
    .then((response) => {
      if (!response.ok) {
        throw response.status;
      }
      return response.json();
    })
    .catch((error) => {
      switch (error) {
        case 400:
          console.log('Error 400');
          break;
        case 401:
          console.log('Token caducado');
          break;
        default:
          console.log('Error:' + error);
          break;
      }
    });
}

export async function logoutUser({ token }) {
  const requestOptions = {
    method: "POST",
    headers: {
      Authorization: "Bearer " + token,
    },
  };

  return fetch(baseUrl + "/data/logout", requestOptions)
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

  return fetch(baseUrl + "/data/signup", requestOptions)
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

  return fetch(baseUrl + "/data/remove_user", requestOptions)
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

  return fetch(
    "https://gatovid.herokuapp.com/data/user_data",
    requestOptions
  ).then((data) => {
    if (data.status !== 200) throw data.status;
    else return data.json();
  });
}

export async function modifyUser({ token, data }) {
  const requestOptions = {
    method: "POST",
    headers: { Authorization: "Bearer " + token },
    body: data,
  };

  return fetch(
    "https://gatovid.herokuapp.com/data/modify_user",
    requestOptions
  ).then((data) => {
    if (data.status !== 200) throw data.status;
    else return data.json();
  });
}

export async function getUserStats({ username }) {
  return fetch(baseUrl + "/data/user_stats?name=" + username)
    .then((data) => data.json())
    .catch((error) => {
      console.error("Error:", error);
    });
}
