
const { body, validationResult } = require('express-validator');

exports.validateItem = [
  body('name').notEmpty().withMessage('Name is required'),
  body('description').optional().isString().withMessage('Description must be a string'),
];

exports.checkValidationResult = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};
