// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import { Client } from "@xmtp/xmtp-js";

if (typeof localStorage === "undefined" || localStorage === null) {
  var LocalStorage = require('node-localstorage').LocalStorage;
  global.localStorage = new LocalStorage('/tmp/scratch');
}

export default function handler(req, res) {
  res.status(200).json({ name: 'wait still works?' })
}
