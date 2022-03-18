import express from 'express';
import apiRouter from './api/api';

const router = express.Router();

router.get('/', (req: express.Request, res: express.Response) => {
	res.status(200).send('Enter the params in the URL above..');
});

router.use('/api', apiRouter);

export default router;
