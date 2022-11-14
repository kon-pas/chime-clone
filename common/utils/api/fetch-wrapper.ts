type getSignature = (options: {
  url: string;
  auth?: string | undefined;
}) => Promise<Response>;

export const get: getSignature = ({ url, auth }) =>
  fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json; charset=utf8",
      ...(auth && { Authorization: `Bearer ${auth}` }),
    },
  });

type postSignature = (options: {
  url: string;
  body: string;
  auth?: string | undefined;
}) => Promise<Response>;

export const post: postSignature = ({ url, body, auth }) =>
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf8",
      ...(auth && { Authorization: `Bearer ${auth}` }),
    },
    body,
  });

type putSignature = (options: {
  url: string;
  body: string;
  auth?: string | undefined;
}) => Promise<Response>;

export const put: putSignature = ({ url, body, auth }) =>
  fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json; charset=utf8",
      ...(auth && { Authorization: `Bearer ${auth}` }),
    },
    body,
  });
