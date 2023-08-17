export const geoApiOptions = {
  method: "GET",
  url: "https://wft-geo-db.p.rapidapi.com/v1/geo/",
  headers: {
    // API looks somewhat to format below
    // To get your own, navigate to https://rapidapi.com/wirefreethought/api/geodb-cities/ - either log in or sing up - choose free plan "HARD LIMIT", get your API key via ENDPOINTS TAB
    "X-RapidAPI-Key": "***********************************************",
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};

export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";
