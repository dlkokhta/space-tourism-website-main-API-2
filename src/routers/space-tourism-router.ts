import express from "express";
import getDestinationController from "../controllers/getDestinationController.js";
import getCrewController from "../controllers/getCrewController.js";
import getTechnologyController from "../controllers/getTechnologyController.js";

const spaceRouter = express.Router();

spaceRouter.get("/destinations/:name", getDestinationController);
spaceRouter.get("/crews/:name", getCrewController);
spaceRouter.get("/technologies/:name", getTechnologyController);

export default spaceRouter;
