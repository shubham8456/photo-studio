/**
 * Formats an ISO string into a human-friendly date.
 * Shows time only if it's not midnight.
 */

export const formatDate = (isoString: string): string => {
  const date = new Date(isoString);
  
  // Check if time is exactly 00:00
  const hasTime = date.getUTCHours() !== 0 || date.getUTCMinutes() !== 0;

  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
    ...(hasTime && { hour: '2-digit', minute: '2-digit' })
  };

  return new Intl.DateTimeFormat('en-US', options).format(date);
};
