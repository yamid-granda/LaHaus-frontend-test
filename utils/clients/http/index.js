const defaultBaseUrl = 'https://lh-real-estates-challenge-api.herokuapp.com/'
const baseURL = process.env.VUE_APP_BASE_URL || defaultBaseUrl;
const headers = {};

async function httpRequest({
  url, config, type = 'json',
}) {
  const response = await fetch(`${baseURL}${url}`, { headers, ...config });
  return response[type]();
}

function parseObjectToUrlParams(object) {
  return Object.entries(object).map(([key, value]) => {
    let valueToAdd = value;
    if (typeof value === 'object') valueToAdd = JSON.stringify(value);
    return `${encodeURIComponent(key)}=${encodeURIComponent(valueToAdd)}`;
  }).join('&');
}

export async function httpGet({
  url, params, config, type,
}) {
  let fetchUrl = url;
  if (params) fetchUrl += `?${parseObjectToUrlParams(params)}`;
  return httpRequest({
    url: fetchUrl, config, type,
  });
}

export async function httpPost({
  url, body, config, type,
}) {
  const postConfig = {
    method: 'POST',
    body: JSON.stringify(body),
    headers: { ...headers, 'Content-Type': 'application/json;charset=utf-8' },
    ...config,
  };
  return httpRequest({ url, config: postConfig, type });
}

export async function httpPut({
  url, body, config, type,
}) {
  const putConfig = {
    method: 'PUT',
    body: JSON.stringify(body),
    headers: { ...headers, 'Content-Type': 'application/json;charset=utf-8' },
    ...config,
  };
  return httpRequest({ url, config: putConfig, type });
}

export async function httpDelete({
  url, config, type,
}) {
  const postConfig = { method: 'DELETE', ...config };
  return httpRequest({ url, config: postConfig, type });
}
