import type { NextApiRequest, NextApiResponse } from 'next'
import api from '../../../service/api'
import routes from '../../../modules/movies/routes';

export default async function movieHandler(req: NextApiRequest, res: NextApiResponse) {
  const { search } = req.query;

  const params = {
    query: search,
  }

  const { data } = await api.get(routes.SEARCH, { params });
  res.status(200).json(data)
}