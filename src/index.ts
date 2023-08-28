import express from "express";
import usersRoutes from "./routes/usersRoutes";
import postRoutes from "./routes/postsRoutes";
import errorMiddleware from "./middleware/errorMiddeware";

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/users", usersRoutes);
app.use("/api/posts", postRoutes);

app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
