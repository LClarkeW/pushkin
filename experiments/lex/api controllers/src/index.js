import pushkin from 'pushkin-api';

const db_read_queue = 'lex_quiz_dbread'; // simple endpoints
const db_write_queue = 'lex_quiz_dbwrite'; // simple save endpoints (durable/persistent)
const task_queue = 'lex_quiz_taskworker'; // for stuff that might need preprocessing

const myController = new pushkin.ControllerBuilder();
myController.setDefaultPasses(db_read_queue, db_write_queue, task_queue);

module.exports = myController;