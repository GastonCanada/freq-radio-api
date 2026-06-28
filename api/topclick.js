export default async function handler(req, res) {
  try {
    const limit = req.query.limit || 5;

    const response = await fetch(
      `https://de1.api.radio-browser.info/json/stations/topclick/${limit}`
    );

    if (!response.ok) {
      throw new Error("Radio Browser API error");
    }

    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      error: "topclick error",
      details: error.message
    });
  }
}