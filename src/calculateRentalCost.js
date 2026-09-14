/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const costPerDay = 40;
  let totalRentalCost = costPerDay * days;

  if (days >= 7) {
    totalRentalCost -= 50;
  } else if (days >= 3) {
    totalRentalCost -= 20;
  }

  return totalRentalCost;
}

module.exports = calculateRentalCost;
