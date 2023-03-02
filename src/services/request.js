function Request(url, data = false, method = "GET") {
  return new Promise(async (resolve, reject) => {
    const options = {
      method,
    };

    if (
      data &&
      (method === "POST" || method === "PATCH" || method === "DELETE")
    ) {
      options.body = JSON.stringify(data);
    }

    const response = await fetch(url, options);
    const result = await response.json();

    if (response.ok && response.status === 200) {
      resolve(result);
    } else {
      reject(result);
    }
  });
}

export const getter = (url) => Request(url);
export const poster = (url, data) => Request(url, data, "POST");
export const patcher = (url, data) => Request(url, data, "PATCH");
export const deleter = (url, data) => Request(url, data, "DELETE");
