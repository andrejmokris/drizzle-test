import { NextFunction, Request, Response } from 'express';
import * as userRepository from '../repositories/userRepository';
import { ConflictError, NotFoundError, UnauthorizedError, ValidationError } from '../utils/errors';
import signUpScheme from '../schemas/signUpScheme';
import { comparePasswords, createPasswordResetToken, generateToken, hashPassword } from '../utils/crypto';
import z from 'zod';
import loginScheme from '../schemas/loginScheme';

export const getUsers = async (req: Request, res: Response) => {};

export const signUp = async (req: Request, res: Response, next: NextFunction) => {
  const userData = req as z.infer<typeof signUpScheme>;

  if (await userRepository.findByEmail(userData.body.email)) {
    next(new ConflictError('User already exists'));
    return;
  }

  const hashedPassword = await hashPassword(userData.body.password);

  try {
    const user = await userRepository.create(userData.body.full_name, userData.body.email, hashedPassword);
    res.json(user);
  } catch (error) {
    next(error);
  }
};

export const logIn = async (req: Request, res: Response, next: NextFunction) => {
  const userData = req as z.infer<typeof loginScheme>;

  const user = await userRepository.findByEmail(userData.body.email);

  if (!user || !(await comparePasswords(userData.body.password, user.password))) {
    next(new UnauthorizedError('Invalid credentials'));
    return;
  }

  res.json({
    token: generateToken(user.id)
  });
};

export const resetPassword = async (req: Request, res: Response, next: NextFunction) => {
  const email = req.body.email;

  if (!email) {
    next(new ValidationError('Invalid request body'));
    return;
  }

  const user = await userRepository.findByEmail(email);

  if (!user) {
    next(new NotFoundError('Invalid email address'));
    return;
  }

  const token = createPasswordResetToken();

  const data = await userRepository.resetPassword(token, user.id);

  res.json(data);
};
