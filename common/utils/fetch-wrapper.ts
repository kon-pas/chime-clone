type getSignature = (options: { url: string }) => Promise<Response>;

export const get: getSignature = ({ url }) =>
  fetch(url, {
    method: "GET",
    headers: { "Content-Type": "application/json; charset=utf8" },
  });