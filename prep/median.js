function calculateMedian(list) {
  const length = list.length;

  if (length === 0) {
    throw new Error("Cannot calculate median of empty array");
  }

  const middleIndex = Math.floor(length / 2);

  // Odd length: middle element
  if (length % 2 === 1) {
    return list[middleIndex];
  }

  // Even length: average of the two middle elements
  const lowerMiddle = list[middleIndex - 1];
  const upperMiddle = list[middleIndex];
  return (lowerMiddle + upperMiddle) / 2;
}

module.exports = calculateMedian;