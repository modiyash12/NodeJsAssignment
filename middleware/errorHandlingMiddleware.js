const errorHandlerMiddleware = (req, res, next) => {
    res?.status(500).json({ error: 'Internal Server Error' });
    next()
  };

  module.exports = errorHandlerMiddleware;