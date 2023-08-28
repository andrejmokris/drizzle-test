const timeMiddleware = (req, res, next) => {
  console.log("Time:", Date.now());
  next();
};

export default timeMiddleware;
