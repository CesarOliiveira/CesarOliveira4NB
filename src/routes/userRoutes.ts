import { Router } from 'express';
import { getUsers, addUser, getUserById } from '../controllers/userController';

const router = Router();

router.get('/users', getUsers);
router.post('/users', addUser);
router.get('/users/:id', getUserById);

export default router;