import { NextFunction, Response, Request } from "express";

const errorMiddleware = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  res.status(statusCode).json({
    errorMessage: err.message,
  });
};

export default errorMiddleware;
