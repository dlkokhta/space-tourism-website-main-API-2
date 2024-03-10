import mongoose from "mongoose";
import { CrewTypes } from "types/crewTypes";
import { v4 as uuid } from "uuid";

const ImageSchema = new mongoose.Schema({
  png: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
  webp: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
});

const crewSchema = new mongoose.Schema<CrewTypes>({
  name: {
    type: mongoose.Schema.Types.String,
    required: true,
  },

  images: {
    type: ImageSchema,
    required: true,
  },
  rule: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
  bio: {
    type: mongoose.Schema.Types.String,
    required: true,
  },

  id: {
    type: mongoose.Schema.Types.String,
    required: true,
    default: uuid,
  },
});

const Crew = mongoose.model("Crew", crewSchema);
export default Crew;
