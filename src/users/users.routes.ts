import {Router} from 'express';
import * as UserController from './users.controller';

const router = Router();

router.route('')
.get(UserController.readUsers)
.post(UserController.createUser);

router.route('/:userId')
    .get(UserController.readUserById)
    .put(UserController.updateUser)
    .delete(UserController.deleteUser);

export default router;