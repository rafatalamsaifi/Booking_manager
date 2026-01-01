import { Request, Response } from "express";
import { Booking } from "../models/Booking";
import { CreateBookingBody } from "../interfaces/types";

export const createBooking = async (req: Request, res: Response) => {
  try {
    const { name, email, date } = req.body as CreateBookingBody;

    const booking = await Booking.create({
      name,
      email,
      date,
    });

    return res.status(201).json({
      message: "Booking created successfully",
      data: booking,
    });
  } catch (error) {
    console.error("Create booking error:", error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

export const getBookings = async (_req: Request, res: Response) => {
  try {
    const bookings = await Booking.findAll({
      order: [["id", "DESC"]],
      attributes: ["id", "name", "email", "date", "createdAt"],
    });

    return res.status(200).json({
      data: bookings,
    });
  } catch (error) {
    console.error("Fetch bookings error:", error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};