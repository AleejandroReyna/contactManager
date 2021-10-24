import express from 'express';
import { contacts } from '../../data/contacts.model';
let router = express.Router();

export default router;

//Peticiones segun el standar RESTfull
//Find: obtiene todos los elementos de la collecion tasks
router.get('/', async (req, res, next) => {
    try {
        let contactsElements = await contacts.find(req.query).exec();
        res.json(contactsElements);
    } catch (error) {
        next(error);
    }
});

//FindOne
router.get('/:id', async (req, res, next) => {
    try {
        let contactsElements = await contacts
            .findOne({
                _id: req.params.id,
            })
            .exec();
        res.json(contactsElements);
    } catch (error) {
        next(error);
    }
});

//Create
router.post('/', async (req, res, next) => {
    try {
        let contactsElements = await contacts.create(req.body);
        res.status(201).json(contactsElements);    
    } catch (error) {
        next(error);
    }
});

//UpdateOne
router.put('/:id', async (req, res, next) => {
    try {
        await contacts.updateOne({
            _id: req.params.id
        },req.body).exec();
        res.sendStatus(200);
            
    } catch (error) {
        next(error);
    }
});

//Delete
router.delete('/:id', async (req, res, next) => {
    try {
        await contacts.deleteOne({
            _id: req.params.id
        }).exec();
        res.sendStatus(200);
            
    } catch (error) {
        next(error);
    }
});
