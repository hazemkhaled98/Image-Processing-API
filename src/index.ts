import express from 'express';
import router from './routes';

const app = express();
const port = 3000;

app.use('/', router);

app.listen(port, () => {
	// eslint-disable-next-line no-console
	console.log(`Server is running on port: ${port}`);
});

export default app;
