function calculateMedian(list) {
  const middleIndex = Math.floor(list.length / 2);
  return list[middleIndex];
}

module.exports = calculateMedian;