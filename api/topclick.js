export default async function handler(req, res) {
    try {
      const limit = req.query.limit || "30";
  
      const url = `https://all.api.radio-browser.info/json/stations/topclick?limit=${limit}`;
  
      const response = await fetch(url);
      const data = await response.json();
  
      res.status(200).json(data);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "topclick error" });
    }
  }