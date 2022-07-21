function filterObj({ objectToFilter: obj, filterValue }) {
  const filtered = {};

  for (const prop in obj) {
    if (obj[prop].location.toLowerCase() === filterValue.toLowerCase()) {
      filtered[prop] = obj[prop];
    }
  }

  return filtered;
}

export function filterDestinations({ city, destinationsDB, res }) {
  // TODO if there is a city query parameter, filter destination by the city
  if (city !== undefined) {
    const filteredDests = filterObj({
      objectToFilter: destinationsDB,
      filterValue: city,
    });
    return res.send(filteredDests);
  }

  // TODO otherwise just send the whole database
  return res.send(destinationsDB);
}
