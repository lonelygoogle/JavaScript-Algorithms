var maxProfit = function(prices) {
    let min = prices[0],
        profit = 0;
    for (i=1; i< prices.length; i++) {
        if (prices[i] > prices [i-1]) {
            profit = Math.max(profit, prices[i] - min)
        } else{
            min = Math.min(min, prices[i])
        }
    }
    return profit
};

// let arr = [7,1,3,4,6,4]
let arr = [6,7,5,4,3,2]
console.log(maxProfit(arr))