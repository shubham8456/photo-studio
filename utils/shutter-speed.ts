/**
 * Converts a decimal exposure time into a photographer-friendly shutter speed string.
 * @param exposureTime - The decimal value from EXIF (e.g., 0.008 or 2.0)
 * @returns A formatted string (e.g., "1/125s" or "2s")
 */

export const calculateShutterSpeed = (exposureTime: number | undefined): string => {
  if (!exposureTime) return "";

  if (exposureTime >= 1) {
    // Round to 1 decimal place if it's not a whole number (e.g., "1.3s")
    return `${Number.isInteger(exposureTime) ? exposureTime : exposureTime.toFixed(1)}s`;
  }

  // If the exposure is less than 1 second (e.g., 0.008)
  // We calculate the reciprocal: 1 / 0.008 = 125
  const reciprocal = 1 / exposureTime;

  // Round to the nearest whole number for standard fraction display
  return `1/${Math.round(reciprocal)}s`;
};
