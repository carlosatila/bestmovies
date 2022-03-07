import type { NextApiRequest, NextApiResponse } from 'next'
import api from '../../service/api'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { data } = await api.get('/discover/movie');
  res.status(200).json(data)
}