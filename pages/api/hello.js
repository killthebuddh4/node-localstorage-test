// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import { Client } from "@xmtp/xmtp-js";
import * as fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  fs.readdirSync('.').forEach(file => {
    console.log(file);
  });
  fs.mkdirSync(path.resolve('./scratch'), { recursive: true })
  
  res.status(200).json({ name: 'test' })
}
