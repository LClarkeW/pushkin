const workers = require('pushkin-worker');
const pWorker = workers.pushkinWorker;
const defaultHandler = workers.defaultHandler;

const options = {
	amqpAddress: process.env.AMQP_ADDRESS || 'amqp://localhost',
	readQueue: 'Noisy_Channel_quiz_dbread',
	writeQueue: 'Noisy_Channel_quiz_dbwrite',
	taskQueue: 'Noisy_Channel_quiz_taskworker',
};

const connection = {
	host: process.env.DB_URL,
	user: process.env.DB_USER,
	password: process.env.DB_PASS,
	database: process.env.DB_NAME,
};

console.log(connection)

const worker = new pWorker(options);
worker.init()
	.then(() => {
		worker.handle('test', data => {
			console.log(`handling test method got data: ${data}`);
			return `successfully got ${data}`;
		});
		worker.useHandler(defaultHandler, connection, 'Noisy_Channel', false);
		worker.start();
	})
	.catch(err => {
		console.error(`failed to initialize worker: ${err}`);
	});
