// routes/usersRoutes.ts
import { Router } from 'express';
import * as usersController from '../controllers/userController';
import { validate } from '../middleware/schemaMiddleware';
import signUpScheme from '../schemas/signUpScheme';
import loginScheme from '../schemas/loginScheme';

const router = Router();

router.get('/', usersController.getUsers);
router.post('/signup', validate(signUpScheme), usersController.signUp);
router.post('/', validate(loginScheme), usersController.logIn);
router.post('/reset', usersController.resetPassword);

export default router;
