import express from 'express';
import usersRouter from './routes/users.router';

let router = express.Router();

router.use('/users', usersRouter);
export default router;