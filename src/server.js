import express from "express"
import cors from "cors"
import bodyParser from "body-parser";

const app = express();
const PORT = 8000;

import { bookingRouter } from "./routes/booking.route.js";
import { contactRouter } from "./routes/contact.route.js";

app.use(cors());
app.use(bodyParser.json());

app.use("/api", bookingRouter);
app.use("/api", contactRouter);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});