// routes/usersRoutes.ts
import { Router } from "express";
import * as postController from '../controllers/postController';
import { validate } from "../middleware/schemaMiddleware";
import loginScheme from "../schemas/loginScheme";

const router = Router();

// router.use(authMiddleware);

router.get("/", validate(loginScheme) ,postController.getPosts);
router.get("/:id", postController.getPostById);

export default router;
