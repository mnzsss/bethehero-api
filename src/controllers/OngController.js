import crypto from 'crypto';
import connection from '../database';

class OngController {
  async index(req, res) {
    const ongs = await connection('ongs').select('*');

    return res.json(ongs);
  }

  async store(req, res) {
    const { name, email, whatsapp, city, uf } = req.body;

    const [ongExists] = await connection('ongs').where('name', name);

    if (ongExists) {
      return res.status(400).json({ error: 'Ong already exists.' });
    }

    const id = crypto.randomBytes(4).toString('hex');

    await connection('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf,
    });

    return res.json({ id });
  }
}

export default new OngController();
