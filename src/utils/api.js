const baseUrl = "https://gatovid.herokuapp.com";


function serverRequest(path, requestOptions) {
  return fetch(baseUrl + path, requestOptions)
    .then((response) => {
      if (!response.ok) {
        throw response;
      } else {
        return response.json();
      }
    })
    .catch((response) => {
      switch (response.status) {
        case 400:
          console.log('Error 400');
          return response.json();
        case 401:
          console.log('Token caducado');

          break;
        default:
          console.log('Error:' + response.status);
          break;
      }
    });
}

export async function loginUser({ email, password }) {
  let data = new URLSearchParams();
  data.append(`email`, email);
  data.append(`password`, password);

  const requestOptions = {
    method: "POST",
    body: data,
  };

  const path = "/data/login";

  return serverRequest(path, requestOptions);
}

export async function logoutUser({ token }) {
  const requestOptions = {
    method: "POST",
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  const path = "/data/logout";

  return serverRequest(path, requestOptions);
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

  const path = "/data/signup";

  return serverRequest(path, requestOptions);
}

export async function deleteUser({ token }) {
  const requestOptions = {
    method: "POST",
    headers: {
      Authorization: "Bearer " + token,
    },
  };

  const path = "/data/remove_user";

  return serverRequest(path, requestOptions);
}

export async function getUserData({ token }) {
  const requestOptions = {
    method: "POST",
    headers: { Authorization: "Bearer " + token },
  };

  const path = "/data/user_data";

  return serverRequest(path, requestOptions);
}

export async function modifyUser({ token, data }) {
  const requestOptions = {
    method: "POST",
    headers: { Authorization: "Bearer " + token },
    body: data,
  };

  const path = "/data/modify_user";

  return serverRequest(path, requestOptions);
}

export async function getUserStats({ username }) {
  let data = new URLSearchParams();
  data.append(`name`, username);
  
  const requestOptions = {
    method: "POST",
    body: data,
  };

  path = "/data/user_stats";

  return serverRequest(path, requestOptions);
}
