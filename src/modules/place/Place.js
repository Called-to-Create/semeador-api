import { model, Schema } from "mongoose";

const AddressSchema = new Schema({
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
});

const MailSchema = new Schema({
  date: Date,
  postman: {
    type: String,
    trim: true,
    required: true,
  },
});

const PlaceSchema = new Schema(
  {
    projectId: {
      type: String,
      required: true,
    },
    createdFor: {
      type: String,
      trim: true,
      required: true,
    },
    address: {
      type: AddressSchema,
      required: true,
    },
    envelopes: [MailSchema],
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
