import { getAllContacts, createContact } from "../services/contact.service.js";

export const getAllContactsController = async (req, res, next) => {
    const { email, password } = req.admin;

    if (!email || !password) return res.status(401).json({
        status: "Failed To Fetch All Contacts",
        message: "Unauthorized user"
    });

    try {
        const result = await getAllContacts({ email, password });
        res.status(200).json({
            status: "Successfully Fetched All Contacts",
            data: result
        })
    } catch (error) {
        next(error);
    }
}