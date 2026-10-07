/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  if (days === 2) {
    return 80;
  }

  if (days >= 3 && days <= 6) {
    return 100 + (days - 3) * 40;
  }

  if (days >= 7) {
    return 230 + (days - 7) * 30;
  }

  if (days < 0) {
    return 0;
  } // write code here
}

module.exports = calculateRentalCost;
