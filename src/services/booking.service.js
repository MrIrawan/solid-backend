import { supabase } from "../config/supabase.js";
import { bookingSchema } from "../models/booking.model.js";

export const getAllBookings = async () => {
    const { data, error } = await supabase
        .from("booking_form")
        .select("*")
    
    if (error) throw new Error(error.message);

    return data;
}

export const createBooking = async (bookingData) => {
    const booking = bookingSchema.safeParse(bookingData);

    if (!booking.success) throw new Error(booking.error.issues);

    const { data, error } = await supabase
        .from("booking_form")
        .insert(booking.data);

    if (error) throw new Error(error.message);

    return data;
}