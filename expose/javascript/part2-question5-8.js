function discountPrice(prices, discount) {
  let discounted = [];
  let fp = 0;
  for (let i = 0; i < prices.length; i++) {
    let dp = prices[i] * (1 - discount); //dp: discount price
    fp = Math.round(dp * 100) / 100;
    discounted.push(fp);
  }
  // console.log(i);
  // console.log(dp);
  // console.log(fp);
  return discounted;
}
console.log(discountPrice([100, 200, 300], 0.5));
