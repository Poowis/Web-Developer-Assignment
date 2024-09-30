export const getTrips = async (req, res, next) => {
  try {
    const { keyword } = req.query;

    const response = await fetch(process.env.JSON_SERVER);
    let trips = await response.json();

    if (keyword) {
      trips = trips.filter((item) => {
        return (
          item.title.includes(keyword) ||
          item.description.includes(keyword) ||
          item.tags.includes(keyword)
        );
      });
    }

    return res.status(response.status).json(trips);
  } catch (error) {
    return res.status(500).send("trips not available");
  }
};
