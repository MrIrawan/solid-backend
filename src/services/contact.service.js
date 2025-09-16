import { supabase } from "../config/supabase.js";
import { contactSchema } from "../models/contact.model.js";

export const getAllContacts = async () => {
    const { data, error } = await supabase
        .from("contact_form")
        .select("*")

    if (error) throw new Error(error.message);

    return data;
}

export const createContact = async (contactData) => {
    const contact = contactSchema.safeParse(contactData);

    if (!contact.success) throw new Error(contact.error.issues);

    const { data, error } = await supabase
        .from("contact_form")
        .insert(contact.data);

    if (error) throw new Error(error.message);

    return data;
}