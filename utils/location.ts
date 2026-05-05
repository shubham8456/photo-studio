/*
 * Returns the city name, country name for given coordinates
 */

export const getAddressFromCoords = async (lat: number, lng: number): Promise<string> => {
  if (!lat || !lng) return "";

  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`
    );
    const data = await response.json();

    const city = data.address.city || data.address.town || data.address.village;
    const country = data.address.country;

    return city ? `${city}, ${country}` : country;
  } catch (error) {
    console.error("Geocoding failed:", error);
    return "";
  }
};
