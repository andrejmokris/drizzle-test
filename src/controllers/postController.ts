import { Request, Response } from 'express';
import * as postRepository from '../repositories/postRepository';

type RequestAuth = Request & {
  user?: number;
};

export const getPosts = async (req: RequestAuth, res: Response) => {
  const data = await postRepository.findAll(req.user);
  res.json(data);
};

export const getPostById = async (req: Request, res: Response) => {
  const id = req.params.id;
  const data = await postRepository.findById(Number(id));
  res.json(data);
};
