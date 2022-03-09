import type { NextApiRequest, NextApiResponse } from 'next'
import api from '../../../service/api'
import routes from '../../../modules/movies/routes';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const params = {
    language: 'pt-BR',
    region: 'BR',
  }

  if (req.method === 'GET') {
    const { data } = await api.get(routes.DISCOVER, { params });
    res.status(200).json(data)
  } else {
    const id = req.body;
    const { data } = await api.get(routes.DETAILS.replace(':id', id), { params });
    res.status(200).json(data)
  }
}