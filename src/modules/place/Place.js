import { model, Schema } from "mongoose";

const PlaceSchema = new Schema(
  {
    road: String,
    suburb: String,
    city: String,
    county: String,
    state_district: String,
    state: String,
    postcode: String,
    country: String,
    country_code: String,
    number: Number,
    obs: String,
    location: {
      type: {
        type: String,
        enum: ["Point"],
        required: true,
      },
      coordinates: {
        type: [Number],
        required: true,
      },
    },
  },
  { timestamps: true }
);

export default model("Place", PlaceSchema);
