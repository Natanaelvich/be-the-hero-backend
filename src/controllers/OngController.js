import connection from '../database';
import encrypt from '../utils/encrypt';

export default {
  async index(req, res) {
    const ongs = await connection('ongs').select(
      'id',
      'name',
      'email',
      'whatsapp',
      'city',
      'uf'
    );

    return res.json(ongs);
  },

  async store(req, res) {
    const { name, email, whatsapp, city, uf } = req.body;

    const id = encrypt();

    await connection('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf,
    });

    return res.json({ id });
  },
};
