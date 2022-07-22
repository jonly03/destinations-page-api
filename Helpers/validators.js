export function checkRequiredFields(req, res, next) {
  const { location, destination } = req.body;

  if (!isValidRequiredField(location) || !isValidRequiredField(destination)) {
    return res
      .status(400)
      .send({
        error:
          "location and destination are BOTH required and have to be valid text",
      });
  }

  next();
}

export function isValidRequiredField(field) {
  if (!field || typeof field !== "string") {
    return false;
  }

  return true;
}
