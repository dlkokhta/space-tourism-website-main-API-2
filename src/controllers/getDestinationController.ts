import Destination from "../models/destinationSchema.js";
import { Request, Response } from "express";

export const getDestinationController = async (req: Request, res: Response) => {
  const { name } = req.params;
  console.log("name", name);

  try {
    const destination = await Destination.findOne({ name: name });
    console.log("destination", destination);
    res.send(destination);
  } catch (error) {
    console.log(error);
  }
};
export default getDestinationController;
