/**
 * Formats an ISO string into a human-friendly date.
 * Shows time only if it's not midnight.
 */

export const formatDate = (isoString: string): string => {
  if (!isoString) return "";
  const date = new Date(isoString);
  if (isNaN(date.getTime())) return "";
  
  // Check if time is exactly 00:00
  const hasTime = date.getUTCHours() !== 0 || date.getUTCMinutes() !== 0;

  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    ...(hasTime && { hour: '2-digit', minute: '2-digit' })
  };

  return new Intl.DateTimeFormat('en-US', options).format(date);
};


// Converts ISO string to Local "YYYY-MM-DDThh:mm" for the input field
export const toBrowserDateTime = (isoString: string | undefined): string => {
  if (!isoString) return "";
  const date = new Date(isoString);
  if (isNaN(date.getTime())) return "";

  // Get the timezone offset in minutes and convert to milliseconds
  const offset = date.getTimezoneOffset() * 60000;

  // Subtract the offset to get local time, then format for the input
  const localISOTime = new Date(date.getTime() - offset).toISOString().slice(0, 16);
  return localISOTime;
};


// Converts the input's local time string back to a proper UTC ISO string
export const toISODateTime = (browserValue: string): string => {
  if (!browserValue) return new Date().toISOString();

  // This creates a Date object based on the user's local system time
  const localDate = new Date(browserValue);
  return localDate.toISOString();
};
