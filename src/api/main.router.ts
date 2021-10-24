import express from 'express';
import contactsRouter from './routes/contacts.router';

let router = express.Router();

router.use('/contacts', contactsRouter);
export default router;