import connection from '../database';

export default {
  async store(req, res) {
    const { id } = req.body;

    const ong = await connection('ongs')
      .select('name')
      .where('id', id)
      .first();

    if (!ong) {
      return res.status(400).json({ error: 'no ong found whth this id' });
    }

    return res.json(ong);
  },
};
