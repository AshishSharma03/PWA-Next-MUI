// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import dbConnect from "../../lib/dbConnect"
export default async function handler(req, res) {
  await dbConnect();
  res.status(200).json({ name: 'John Doe' })
}
