import { Router } from "express";
import { getAllBookingServicesController, createBookingController } from "../controllers/booking.controller.js";

export const bookingRouter = Router();

bookingRouter.get("/bookings", getAllBookingServicesController);
bookingRouter.post("/create/booking", createBookingController);