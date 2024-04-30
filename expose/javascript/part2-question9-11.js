function discountPrice(prices, discount) {
  const discounted = [];
  const length = prices.length;
  for (let i = 0; i < length; i++) {
    const dp = prices[i] * (1 - discount); //dp: discount price
    discounted.push(dp);
  }
  // console.log(i);
  console.log(length);
  // console.log(fp);
  return discounted;
}
console.log(discountPrice([100, 200, 300], 0.5));
