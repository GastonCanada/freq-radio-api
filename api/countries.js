export default async function handler(req, res) {
    try {
      const response = await fetch(
        "https://all.api.radio-browser.info/json/countries"
      );
  
      const data = await response.json();
  
      res.status(200).json(data);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "countries error" });
    }
  }