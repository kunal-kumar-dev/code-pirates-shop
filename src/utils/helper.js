/**
 * Formats a number into Indian Currency (INR).
 * Assumes a fixed conversion rate of $1 = ₹85 for demo purposes.
 * * @param {number} amountInUSD - The price from the API
 * @returns {string} - Formatted string (e.g., "₹1,299")
 */
export const formatPrice = (amountInUSD) => {
  if (!amountInUSD) return "₹0";
  
  const exchangeRate = 85;
  const priceInINR = amountInUSD * exchangeRate;

  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0, // No decimals for cleaner look
  }).format(priceInINR);
};