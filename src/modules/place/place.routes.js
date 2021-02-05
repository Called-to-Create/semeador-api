import { Router } from "express";
import Place from "./Place";

const placeRoutes = Router();

placeRoutes.endpointBase = "/places";

placeRoutes.post("/mailing", (req, res) => {
  // TODO: validar projectId
  // TODO: duplicação de place por lat long
  const user = req.headers["user"];
  const projectId = req.headers["project_id"];

  const placeRequest = req.body;
//   console.log(placeRequest);

  const place = {
    obs: placeRequest.obs,
    projectId,
    createdFor: user,
    address: {
      road: placeRequest.road,
      suburb: placeRequest.suburb,
      city: placeRequest.city,
      county: placeRequest.county,
      state_district: placeRequest.state_district,
      state: placeRequest.state,
      postcode: placeRequest.postcode,
      country: placeRequest.country,
      country_code: placeRequest.country_code,
      number: placeRequest.number,
    },
    envelopes: [{ date: Date(), postman: user }],
  };

  place.location = {
    type: "Point",
    coordinates: [placeRequest.location.lat, placeRequest.location.lng],
  };

  Place.create(place)
    .then((newPlace) => res.status(201).json(newPlace))
    .catch((error) => res.status(500).json(error));
});

export default placeRoutes;
