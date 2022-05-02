import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { ApiModule } from '../../src/api.module';

describe('GymsModule (e2e)', () => {
  const gql = String.raw; // for highlighting
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [ApiModule],
    }).compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  describe('getGym', () => {
    it('...', async () => {
      // Given
      const gyms = [];

      // When
      const { body } = await request(app.getHttpServer())
        .post('/graphql')
        .send({
          query: gql`
            query getGym($id: Int!) {
              getGym(id: $id) {
                id
              }
            }
          `,
          variables: {
            id: 1,
          },
        })
        .expect(200);

      // Then
      expect(body.data.getGyms).toEqual(gyms);
    });
  });
});
