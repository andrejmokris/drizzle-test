import { Request, Response } from "express";

export const getUsers = (req: Request, res: Response) => {
  res.send("getUsers");
};

export const getUserById = (req: Request, res: Response) => {
  res.send("getUserById");
};
