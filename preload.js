// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.

const axios = require('axios');

window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector);
    if (element) element.innerText = text;
  };

  for (const type of ['chrome', 'node', 'electron']) {
    replaceText(`${type}-version`, process.versions[type]);
  }

  try {
    axios
      .get('https://my-json-server.typicode.com/zofqofhtltm8015/fs/user')
      .then((Response) => {
        console.log(Response.data);
      })
      .catch((Error) => {
        console.log(Error);
      });
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
});
