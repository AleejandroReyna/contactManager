import express from 'express';
import { users } from '../../data/users.model';
let router = express.Router();

export default router;

//Peticiones segun el standar RESTfull
//Find: obtiene todos los elementos de la collecion tasks
router.get('/', async (req, res, next) => {
    try {
        let usersElements = await users.find(req.query).exec();
        res.json(usersElements);
    } catch (error) {
        next(error);
    }
});

//FindOne
router.get('/:id', async (req, res, next) => {
    try {
        let userElement = await users
            .findOne({
                _id: req.params.id,
            })
            .exec();
        res.json(userElement);
    } catch (error) {
        next(error);
    }
});

//Create
router.post('/', async (req, res, next) => {
    try {
        let userElement = await users.create(req.body);
        res.status(201).json(userElement);    
    } catch (error) {
        next(error);
    }
});

//UpdateOne
router.put('/:id', async (req, res, next) => {
    try {
        await users.updateOne({
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
        await users.deleteOne({
            _id: req.params.id
        }).exec();
        res.sendStatus(200);
            
    } catch (error) {
        next(error);
    }
});
