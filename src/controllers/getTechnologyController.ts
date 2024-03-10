import Technology from "../models/technologySchema.js";
import { Request, Response } from "express";

export const getTechnologyController = async (req: Request, res: Response) => {
  const { name } = req.params;
  console.log("name", name);

  try {
    const technology = await Technology.findOne({ name: name });
    console.log("technology", technology);
    res.send(technology);
  } catch (error) {
    console.log(error);
  }
};
export default getTechnologyController;
