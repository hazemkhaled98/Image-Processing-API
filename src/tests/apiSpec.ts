import supertest from 'supertest';
import app from '../index';

const request = supertest(app);

describe('Test api endpoint responses', () => {
	it('Returns Not Found when the image does not exist', async () => {
		const response = await request.get(
			'/api?name=xyz.jpg&width=500&height=500'
		);
		expect(response.status).toBe(404);
	});
	it('Returns bad request when width is not valid', async () => {
		const response = await request.get(
			'/api?name=ronaldo.jpg&width=&height=500'
		);
		expect(response.status).toBe(400);
	});
	it('Returns bad request when width is not valid', async () => {
		const response = await request.get(
			'/api?name=ronaldo.jpg&width=0&height=500'
		);
		expect(response.status).toBe(400);
	});
	it('Returns bad request when height is not valid', async () => {
		const response = await request.get('/api?name=ronaldo.jpg&width=500');
		expect(response.status).toBe(400);
	});
	it('Returns bad request when height is not valid', async () => {
		const response = await request.get(
			'/api?name=ronaldo.jpg&width=500&height=0'
		);
		expect(response.status).toBe(400);
	});
	it('Returns 200 OK when inputs are valid and the image was cached', async () => {
		const response = await request.get(
			'/api?name=ronaldo.jpg&width=500&height=500'
		);
		expect(response.status).toBe(200);
	});
	it('Returns 201 Created when inputs are valid and the image was created', async () => {
		const response = await request.get(
			`/api?name=ronaldo.jpg&width=${Math.floor(
				Math.random() * 1000
			)}&height=${Math.floor(Math.random() * 1000)}`
		);
		expect(response.status).toBe(201);
	});
});
