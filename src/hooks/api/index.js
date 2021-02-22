import baseUrl from "./baseUrl";

export const auth = {
  get signup() {
    return (body) =>
      fetch(`${baseUrl}/signup`, {
        method: "post",
        headers: new Headers({ "Content-Type": "application/json" }),
        body: JSON.stringify(body),
      });
  },
  get login() {
    return (body) =>
      fetch(`${baseUrl}/login`, {
        method: "post",
        headers: new Headers({
          "Content-Type": "application/json",
        }),
        body: JSON.stringify(body),
      });
  },
  get logout() {
    return (username) =>
      fetch(`${baseUrl}/logout`, {
        method: "post",
        headers: new Headers({ "Content-Type": "application/json" }),
        body: JSON.stringify(username),
      });
  },
};

const headers = {
  get get() {
    return (token) =>
      new Headers({
        Authorization: `Bearer ${token}`,
      });
  },
  get post() {
    return (token) =>
      new Headers({
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      });
  },
  get patch() {
    return (token) =>
      new Headers({
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      });
  },
  get delete() {
    return (token) =>
      new Headers({
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      });
  },
};

export const actions = {
  get get() {
    return (token) =>
      fetch(`${baseUrl}/actions`, {
        headers: headers.get(token),
      });
  },
  get create() {
    return (token, body) =>
      fetch(`${baseUrl}/actions`, {
        method: "post",
        headers: headers.post(token),
        body: JSON.stringify(body),
      });
  },
  get updateById() {
    return (token, id) =>
      fetch(`${baseUrl}/actions/${id}`, {
        method: "patch",
        headers: headers.patch(token),
      });
  },
  get deleteById() {
    return (token, id) =>
      fetch(`${baseUrl}/actions/${id}`, {
        method: "delete",
        headers: headers.delete(token),
      });
  },
};

export const braindumps = {
  get get() {
    return (token) =>
      fetch(`${baseUrl}/braindumps`, {
        headers: headers.get(token),
      });
  },
  get create() {
    return (token, body) =>
      fetch(`${baseUrl}/braindumps`, {
        method: "post",
        headers: headers.post(token),
        body: JSON.stringify(body),
      });
  },

  get deleteById() {
    return (token, id) =>
      fetch(`${baseUrl}/braindumps/${id}`, {
        method: "delete",
        headers: headers.delete(token),
      });
  },
};

export const inbaskets = {
  get get() {
    return (token) =>
      fetch(`${baseUrl}/inbaskets`, {
        headers: headers.get(token),
      });
  },
  get create() {
    return (token, body) =>
      fetch(`${baseUrl}/inbaskets`, {
        method: "post",
        headers: headers.post(token),
        body: JSON.stringify(body),
      });
  },
  get deleteById() {
    return (token, id) =>
      fetch(`${baseUrl}/inbaskets/${id}`, {
        method: "delete",
        headers: headers.delete(token),
      });
  },
};

export const projects = {
  get get() {
    return (token) =>
      fetch(`${baseUrl}/projects`, {
        headers: headers.get(token),
      });
  },
  get create() {
    return (token, body) =>
      fetch(`${baseUrl}/projects`, {
        method: "post",
        headers: headers.post(token),
        body: JSON.stringify(body),
      });
  },
  get updateById() {
    return (token, body, id) =>
      fetch(`${baseUrl}/projects/${id}`, {
        method: "patch",
        headers: headers.patch(token),
        body: JSON.stringify(body),
      });
  },
  get deleteById() {
    return (token, id) =>
      fetch(`${baseUrl}/projects/${id}`, {
        method: "delete",
        headers: headers.delete(token),
      });
  },
};

export const reviews = {
  get get() {
    return (token) =>
      fetch(`${baseUrl}/reviews`, {
        headers: headers.get(token),
      });
  },
  get create() {
    return (token, body) =>
      fetch(`${baseUrl}/reviews`, {
        method: "post",
        headers: headers.post(token),
        body: JSON.stringify(body),
      });
  },
  get updateById() {
    return (token, body, id) =>
      fetch(`${baseUrl}/reviews/${id}`, {
        method: "patch",
        headers: headers.patch(token),
        body: JSON.stringify(body),
      });
  },
  get deleteById() {
    return (token, id) =>
      fetch(`${baseUrl}/reviews/${id}`, {
        method: "delete",
        headers: headers.delete(token),
      });
  },
};

export const references = {
  get get() {
    return (token) =>
      fetch(`${baseUrl}/references`, {
        headers: headers.get(token),
      });
  },
  get create() {
    return (token, body) =>
      fetch(`${baseUrl}/references`, {
        method: "post",
        headers: headers.post(token),
        body: JSON.stringify(body),
      });
  },
  get updateById() {
    return (token, id) =>
      fetch(`${baseUrl}/references/${id}`, {
        method: "patch",
        headers: headers.patch(token),
      });
  },
  get deleteById() {
    return (token, id) =>
      fetch(`${baseUrl}/references/${id}`, {
        method: "delete",
        headers: headers.delete(token),
      });
  },
};

export const incubates = {
  get get() {
    return (token) =>
      fetch(`${baseUrl}/incubates`, {
        headers: headers.get(token),
      });
  },
  get create() {
    return (token, body) =>
      fetch(`${baseUrl}/incubates`, {
        method: "post",
        headers: headers.post(token),
        body: JSON.stringify(body),
      });
  },
  get updateById() {
    return (token, body, id) =>
      fetch(`${baseUrl}/incubates/${id}`, {
        method: "patch",
        headers: headers.patch(token),
        body: JSON.stringify(body),
      });
  },
  get deleteById() {
    return (token, id) =>
      fetch(`${baseUrl}/incubates/${id}`, {
        method: "delete",
        headers: headers.delete(token),
      });
  },
};
