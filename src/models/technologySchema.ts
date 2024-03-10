import mongoose from "mongoose";
import { TechnologyTypes } from "types/technologyTypes";
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

const technologySchema = new mongoose.Schema<TechnologyTypes>({
  name: {
    type: mongoose.Schema.Types.String,
    required: true,
  },

  images: {
    type: ImageSchema,
    required: true,
  },

  description: {
    type: mongoose.Schema.Types.String,
    required: true,
  },

  id: {
    type: mongoose.Schema.Types.String,
    required: true,
    default: uuid,
  },
});

const Crew = mongoose.model("technology", technologySchema);
export default Crew;
