import { Router } from "express";
import { createBooking, getBookings } from "../controllers/booking.controller";
import { bookingSchema } from "../booking.validation";
import { validate } from "../middlewares/validation";

const router = Router();

router.post("/", validate(bookingSchema), createBooking);
router.get("/", getBookings);

export default router;