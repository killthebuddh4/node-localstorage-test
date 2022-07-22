// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Client } from "@xmtp/xmtp-js";

export default function handler(req, res) {
  res.status(200).json({ name: 'test' })
}
