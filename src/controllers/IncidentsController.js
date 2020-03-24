import connection from '../database';

export default {
  async index(req, res) {
    const incidents = await connection('incidents').select('*');

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

  async destroy(req, res) {
    const { id } = req.params;

    const { ong_id } = req.headers;

    const incident = await connection('incidents')
      .select('ong_id')
      .where('id', id)
      .first();

    if (incident.ong_id !== ong_id) {
      return res.status(401).json({ error: 'unauthourized' });
    }

    await connection('incidents')
      .where('id', id)
      .delete();

    return res.status(204).send();
  },
};
