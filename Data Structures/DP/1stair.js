// https://leetcode.com/problems/climbing-stairs/

// Leet code submission
var moveNsteps = function(n, count, sum, memo) {
  // left node = +1 stair
  // right node = +2 stair
  if(memo[sum]) {
    count[0]+=memo[sum];
    return 0;
  } else {
    if(sum==n) count[0]++;
    else if(sum>n) return 0;
    else if(sum<n) {
      moveNsteps(n, count, sum + 1, memo);
      moveNsteps(n, count, sum + 2, memo);
      if(!memo[sum]) memo[sum] = count[0];
    }
  }
}

var climbStairs = function (n) {
  var count = [0];
  var memo = new Array(100);
  moveNsteps(n, count, 0, memo)
  console.log('count = ', count[0]);
  console.log('memo = ', memo);
  return count[0];
};

climbStairs(2)
climbStairs(3)
climbStairs(3)
