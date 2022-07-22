// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import { Client } from "@xmtp/xmtp-js";
import * as fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  fs.readdirSync('.').forEach(file => {
    console.log(file);
  });
  const p = path.resolve('./scratch');
  console.log(p);
  console.log(fs.stat('/var'))
  console.log(fs.stat('/var/task'))
  console.log(fs.stat('/var/task/scratch'))
  // fs.mkdirSync(p, { recursive: true })
  
  res.status(200).json({ name: 'test' })
}
