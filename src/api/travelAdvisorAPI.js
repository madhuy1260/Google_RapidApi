/* eslint-disable comma-dangle */
/* eslint-disable consistent-return */
/* eslint-disable quotes */
import axios from "axios";

// eslint-disable-next-line consistent-return
export const getPlacesData = async (type, sw, ne) => {
  try {
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          bl_latitude: sw.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
          tr_latitude: ne.lat,
        },
        headers: {
          "x-RapidAPI-Key":
            "3b210d74abmshe7621fe7f84bcabp1744c4jsn9b92d48e7cc8",
          "x-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
        },
      }
    );

    return data;
  } catch (error) {
    // console.log(error);
  }
};

export const getWeatherData = async (lat, lng) => {
  try {
    if (lat && lng) {
      const { data } = await axios.get(
        "https://community-open-weather-map.p.rapidapi.com/find",
        {
          params: { lat, lon: lng },
          headers: {
            "x-RapidAPI-Key":
              "3b210d74abmshe7621fe7f84bcabp1744c4jsn9b92d48e7cc8",
            "x-RapidAPI-Host": "community-open-weather-map.p.rapidapi.com",
          },
        }
      );

      return data;
    }
  } catch (error) {
    // console.log(error);
  }
};
