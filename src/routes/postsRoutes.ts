// routes/usersRoutes.ts
import { Router } from 'express';
import * as postController from '../controllers/postController';
import authMiddleware from '../middleware/authMiddleware';

const postsRouter = Router();

postsRouter.use(authMiddleware);

postsRouter.get('/', postController.getPosts);
postsRouter.get('/:id', postController.getPostById);

export default postsRouter;
