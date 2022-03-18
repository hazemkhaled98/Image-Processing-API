import express from 'express';
import fs from 'fs';
import path from 'path';

const validator = (
	req: express.Request,
	res: express.Response,
	next: express.NextFunction
): void => {
	//res.locals are available in the scope between the request and the resposnse
	//setting the var once makes it available to use through all middlewares till sending the response
	res.locals.name = req.query.name as string;
	res.locals.width = Number(req.query.width);
	res.locals.height = Number(req.query.height);
	try {
		//path module will try to get the path of the image based on the name in the query
		res.locals.filePath = path.join(
			__dirname,
			'..',
			'assets',
			'images',
			res.locals.name
		); //../assets/images/filename
	} catch (error) {
		//means no query was entered
		//the user makes a request to /api
		res.status(400).send('Please enter the image name');
		throw 'No filename query...';
	}
	//using file system module to get the image based on the filePath
	fs.access(res.locals.filePath, (err) => {
		if (err) {
			//means the image name that was not entered does not exist in the images folder
			res.status(404).send('Image does not exsit!');
		} else if (
			//checking if the width and height are valid input
			isNaN(res.locals.width) ||
			isNaN(res.locals.height) ||
			res.locals.width <= 0 ||
			res.locals.height <= 0
		) {
			res.status(400).send(`Please enter a valid width and height.`);
		} else {
			//All input are valid and ready to begin the processing
			next();
		}
	});
};

export default validator;
