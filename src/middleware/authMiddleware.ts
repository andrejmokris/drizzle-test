import { UnauthorizedError, ValidationError } from '../utils/errors';
import { verifyToken } from '../utils/crypto';

const authMiddleware = (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1];

      const id = verifyToken(token);
      req.user = Number(id);
      next();
    } catch (error) {
      next(new UnauthorizedError());
    }
  } else {
    res.status(400);
    next(new ValidationError('Token not found'));
  }
};

export default authMiddleware;
