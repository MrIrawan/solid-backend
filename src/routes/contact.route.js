import { Router } from "express";
import { getAllContactsController, createContactController } from "../controllers/contact.controller.js";

export const contactRouter = Router();

contactRouter.get("/admin/all", getAllContactsController);
contactRouter.post("/create", createContactController);