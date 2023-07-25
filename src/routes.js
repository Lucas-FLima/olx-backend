import express from 'express';
import * as AuthController from './controllers/AuthController.js';
import * as UserController from './controllers/UserController.js';
import * as AdsController from './controllers/AdsController.js';


const router = express.Router();

router.get('/ping', (req, res) => {
    res.json({ pong: true });
})

router.get('/states', UserController.getStates);

router.post('/user/signin', AuthController.signIn);
router.post('/user/signup', AuthController.signUp);

router.get('/user/me', UserController.info);
router.put('/user/me', UserController.editAction);

router.get('/categories', AdsController.getCategories);
router.post('/ad/add', AdsController.addAction);
router.get('/ad/list', AdsController.getList);
router.get('/ad/item', AdsController.getItem);
router.post('/ad/:id', AdsController.editAction);

export default router;
