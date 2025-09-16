import { createBooking, getAllBookings } from "../services/booking.service.js";

export const getAllBookingServicesController = async (req, res, next) => {
    try {
        const result = await getAllBookings();
        res.status(200).json({
            status: "Successfully Fetched All Booking Services",
            data: result
        })
    } catch (error) {
        next(error);
    }
}

export const createBookingController = async (req, res, next) => {
    const bookingData = req.body;

    if (!bookingData) return res.status(400).json({
        status: "Failed To Create Booking Service",
        message: "Booking data is required"
    });

    try {
        const result = await createBooking(bookingData);
        res.status(200).json({
            status: "Successfully Created Booking Service",
            data: result
        })
    } catch (error) {
        next(error);
    }
}