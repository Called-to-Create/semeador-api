import { Router } from "express";
import Place from "./Place";

const placeRoutes = Router();

placeRoutes.endpointBase = "/places";

placeRoutes.post("/mailing", async (req, res) => {
  try {
    const place = req.body;
    place.location = {
      type: "Point",
      coordinates: [place.location.lat, place.location.lng],
    };

    const newPlace = await Place.create(place);

    return res.json(newPlace);
  } catch (error) {
    return res.statusCode(500).json(error);
  }
});

export default placeRoutes;
