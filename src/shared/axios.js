import axios from "axios";

const base = {
  server_https: process.env.REACT_APP_HTTPS_URI,
};

const instance = axios.create({
  baseURL: base.server_https,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(
  function (config) {
    const auth = localStorage.getItem("access_token");
    if (auth) config.headers.common["Authorization"] = `Bearer ${auth}`;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response && error.response.data.statusCode) {
      switch (error.response.data.statusCode) {
        case 400:
        case 401:
        case 402:
        case 500:
          alert(error.response.data.message);
          break;
        default:
          return;
      }
    }
    return Promise.reject(error);
  }
);

export const apis = {
  //sign_up
  sign_up: (formData) => {
    return instance.post(`/auth/signup`, formData);
  },
  //sign_in
  sign_in: (formData) => {
    return instance.post(`/auth/signin`, formData);
  },
  // todo : CRUD
  create_todo: (todo) => {
    return instance.post("/todos", todo);
  },
  get_todos: () => instance.get("/todos"),
  update_todo: (id, todo, isCompleted) => {
    return instance.put(`/todos/${id}`, { todo, isCompleted });
  },
  delete_todo: (id) => instance.delete(`/todos/${id}`),
};
