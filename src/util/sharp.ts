import express from 'express';
import path from 'path';
import fs from 'fs';
import sharp from 'sharp';

const processor = (
	req: express.Request,
	res: express.Response,
	next: express.NextFunction
): void => {
	//the cached image name will be filename_width_height
	res.locals.cacheName = `${res.locals.name.split('.')[0]}_${
		res.locals.width
	}_${res.locals.height}.jpg`;
	//get the path to the cached image
	const cachePath = path.join(
		__dirname,
		'..',
		'assets',
		'cache',
		res.locals.cacheName
	);
	//try to find the cached image first
	fs.access(cachePath, (err) => {
		//means that no cached image was found and the image needs to be processed
		if (err) {
			//boolean to help set the status code
			res.locals.isCached = false;
			sharp(res.locals.filePath)
				.resize(res.locals.width, res.locals.height)
				//location to which the cached image will be saved
				.toFile(cachePath)
				.then(() => next())
				.catch((e) => {
					res.status(501).send(
						'Something went wrong while processsing!'
					);
					throw `Error: ${e}`;
				});
			//means that image was already processed based on the input and a cached version is present
			//No processing needed
		} else {
			res.locals.isCached = true;
			next();
		}
	});
};

export default processor;
