import Joi from "joi";

export const bookingSchema = Joi.object({
  name: Joi.string()
    .min(2)
    .max(100)
    .required()
    .messages({
      "string.empty": "Name is required",
      "string.min": "Name should be at least 2 characters",
      "string.max": "Name should not exceed 100 characters",
    }),

  email: Joi.string()
    .email()
    .required()
    .messages({
      "string.empty": "Email is required",
      "string.email": "Please enter a valid email address",
    }),

  date: Joi.date()
    .iso()
    .required()
    .messages({
      "date.base": "Date must be a valid date",
      "date.format": "Date must be in YYYY-MM-DD format",
      "any.required": "Date is required",
    }),
});
