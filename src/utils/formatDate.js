/**
 * Format a date string for display
 * @param {string} dateStr - date string like "April 2026"
 * @returns {string}
 */
export function formatDate(dateStr) {
  if (!dateStr) return '';
  return dateStr;
}

/**
 * Get relative time from a date string
 * @param {string} dateStr
 * @returns {string}
 */
export function getRelativeTime(dateStr) {
  try {
    const date = new Date(dateStr);
    const now = new Date();
    const diffMs = now - date;
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    if (diffDays < 30) return `${diffDays} days ago`;
    if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
    return `${Math.floor(diffDays / 365)} years ago`;
  } catch {
    return dateStr;
  }
}
