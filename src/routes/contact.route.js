import { Router } from "express";
import { getAllContactsController, createContactController } from "../controllers/contact.controller.js";

export const contactRouter = Router();

contactRouter.get("/contacts", getAllContactsController);
contactRouter.post("/create/contact", createContactController);