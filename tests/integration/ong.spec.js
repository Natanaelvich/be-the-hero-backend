import request from 'supertest';
import app from '../../src/app';
import connection from '../../src/database';

describe('ong', () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(() => {
    connection.destroy();
  });

  it('should be able to create a new ong', async () => {
    const response = await request(app)
      .post('/ongs')
      .send({
        name: 'ELI',
        email: 'eli@org.com',
        whatsapp: 12345678912,
        city: 'timbiras',
        uf: 'MA',
      });

    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(8);

    console.log(response.body);
  });
});
