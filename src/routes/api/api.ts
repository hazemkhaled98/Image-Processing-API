import express from 'express';
import path from 'path';
import validator from '../../util/validator';
import processor from '../../util/sharp';

const apiRouter = express.Router();

//The router uses meddilewares for validating input and do the processing before sending the response.
apiRouter.get(
	'/',
	validator,
	processor,
	(req: express.Request, res: express.Response) => {
		const cachePath = path.join(
			__dirname,
			'..',
			'..',
			'assets',
			'cache',
			res.locals.cacheName
		);
		//check if The server is sending an already cached image or created a new one
		//to set the status code
		const code = res.locals.isCached ? 200 : 201;
		res.status(code).sendFile(cachePath);
	}
);

export default apiRouter;
