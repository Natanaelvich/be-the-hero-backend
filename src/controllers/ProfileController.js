import connection from '../database';

export default {
  async index(req, res) {
    const { ong_id } = req.headers;

    const incidents = await connection('incidents')
      .select('*')
      .where('ong_id', ong_id);

    return res.json(incidents);
  },
};
