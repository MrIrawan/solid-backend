import * as z from "zod";

export const contactSchema = z.object({
    full_name: z.string("full name is required").min(3, "full name must be at least 3 characters long"),
    email: z.email("email is required").min(3, "email must be at least 3 characters long"),
    company_name: z.string().min(3, "company name must be at least 3 characters long").optional(),
    subject_message: z.string().min(15, "message must be at least 15 characters long").optional(),
    message: z.string().min(15, "message must be at least 15 characters long")
})