import connection from '../database';

export default {
  async index(req, res) {
    const { ong_id } = req.headers;

    const incidents = await connection('incidents')
      .select('*')
      .where('ong_id', ong_id);

    return res.json(incidents);
  },

  async store(req, res) {
    const { title, description, value } = req.body;

    const { ong_id } = req.headers;

    const incident = await connection('incidents').insert({
      title,
      description,
      value,
      ong_id,
    });

    return res.json(incident);
  },
};
