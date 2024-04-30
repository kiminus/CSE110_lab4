function discountPrice(prices, discount) {
  var discounted = [];
  var fp = 0;
  for (var i = 0; i < prices.length; i++) {
    var dp = prices[i] * (1 - discount); //dp: discount price
    fp = Math.round(dp * 100) / 100;
    discounted.push(fp);
  }
  //console.log(i);
  //console.log(dp);
  //console.log(fp);
  return discounted;
}
console.log(discountPrice([100, 200, 300], 0.5));
