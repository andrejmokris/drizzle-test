import { Request, Response } from "express";
import z from "zod";
import loginScheme from "../schemas/loginScheme";

export const getPosts = (req: Request, res: Response) => {
  const data = req.body as z.infer<typeof loginScheme>;
  res.send("getPosts");
};

export const getPostById = (req: Request, res: Response) => {
  res.send("getPostById");
};
