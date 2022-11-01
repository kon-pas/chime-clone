type getSignature = (options: { url: string }) => Promise<Response>;

export const get: getSignature = ({ url }) =>
  fetch(url, {
    method: "GET",
    headers: { "Content-Type": "application/json; charset=utf8" },
  });

type postSignature = (options: {
  url: string;
  body: string;
}) => Promise<Response>;

export const post: postSignature = ({ url, body }) =>
  fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf8" },
    body,
  });
