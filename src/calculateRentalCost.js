/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const baseCost = 40;
  const discount = 3;
  const additionalDiscount = 20;
  const totalCost = days * baseCost;
  const discountAmount = days >= discount;
  const additionalDiscountAmont = days >= 7;
  const finalCost =
    totalCost -
    (discountAmount ? discount * baseCost : 0) -
    (additionalDiscountAmont ? additionalDiscount : 0);

  if (days === 1) {
    return 50;
  }

  if (days === 2) {
    return 80;
  }

  if (days >= 3 && days <= 6) {
    return 100 + (days - 3) * 40;
  }

  if (days >= 7) {
    return days * 40 - 50;
  }

  if (days < 0) {
    return 0;
  }
  return finalCost; // write code here
}

module.exports = calculateRentalCost;
