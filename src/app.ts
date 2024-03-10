import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connect from "./config/mongo.js";
import spaceRouter from "./routers/space-tourism-router.js";
import swaggerMiddleware from "./middlewares/swagger-middleware.js";

const app = express();
dotenv.config();
connect();
app.use(bodyParser.json());
app.use(cors());

app.use("/api", spaceRouter);

app.use("/", ...swaggerMiddleware());

app.listen(process.env.PORT || 3000);
