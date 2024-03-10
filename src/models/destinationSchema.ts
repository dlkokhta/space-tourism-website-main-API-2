import mongoose from "mongoose";
import { DestinationTypes } from "../types/destinationTypes";
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

const destinationSchema = new mongoose.Schema<DestinationTypes>({
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
  distance: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
  travel: {
    type: mongoose.Schema.Types.String,
    required: true,
  },

  id: {
    type: mongoose.Schema.Types.String,
    required: true,
    default: uuid,
  },
});

const Destination = mongoose.model("Destination", destinationSchema);
export default Destination;
