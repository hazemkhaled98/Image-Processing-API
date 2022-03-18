import supertest from 'supertest';
import app from '../index';

const request = supertest(app);
describe('Test endpoint responses', () => {
	it('gets the main endpoint and returns OK', async () => {
		const response = await request.get('/');
		expect(response.status).toBe(200);
	});
	it('gets the api endpoint with no query and returns bad request', async () => {
		const response = await request.get('/api');
		expect(response.status).toBe(400);
	});
});
