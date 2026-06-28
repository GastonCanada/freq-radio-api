export default async function handler(req, res) {
    const limit = req.query.limit || "30";
  
    const url = `https://all.api.radio-browser.info/json/stations/search?limit=${limit}`;
  
    const response = await fetch(url);
    const data = await response.json();
  
    res.status(200).json(data);
  }