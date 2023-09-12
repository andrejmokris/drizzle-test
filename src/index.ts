import express from 'express';
import router from './routes/usersRoutes';
import postsRouter from './routes/postsRoutes';
import errorMiddleware from './middleware/errorMiddleware';

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Use your routes
app.use('/api/users', router);
app.use('/api/posts', postsRouter);

app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
