import { NextApiRequest, NextApiResponse } from 'next';

// https://nextjs.org/learn/basics/api-routes/api-routes-details
export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ text: 'Hello' });
};
