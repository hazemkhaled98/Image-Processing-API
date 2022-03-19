import path from 'path';
import sharp from 'sharp';

describe('Tests the sharp processing function', () => {
	it('Returns a processed image when all inputs are valid', () => {
		const filePath = path.join(
			__dirname,
			'..',
			'assets',
			'images',
			'ronaldo.jpg'
		);
		const cachePath = path.join(
			__dirname,
			'..',
			'assets',
			'images',
			'ronaldo_800_800.jpg'
		);
		sharp(filePath).resize(800, 800).toFile(cachePath);
		expect(cachePath).toBeTruthy();
	});
});
