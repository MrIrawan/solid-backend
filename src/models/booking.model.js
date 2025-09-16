import * as z from "zod";

export const bookingSchema = z.object({
    full_name: z.string("full name is required").min(3),
    email_address: z.email("email is required").min(3),
    company_name: z.string("company name is required").min(3, "company name must be at least 3 characters long"),
    booking_service: z.string("booking service is required").min(3, "booking service must be at least 3 characters long"),
})