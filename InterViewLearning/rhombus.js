var countSegments = function(s) {
    console.log(s.trim().split('/+S'));
    return s.trim().split('/+S').length;
};

console.log(countSegments("  Hello, my    name is John   ")); // 5


var climbStairs = function(n) {
    if(n == 1) return 1;
    if(n == 2) return 2;
    if(n == 3) return 3;
    return climbStairs(n-1) + climbStairs(n-2);
};

console.log(climbStairs(4));

var singleDuplicate = function(nums) {
    return nums.find((item) => nums.indexOf(item) === nums.lastIndexOf(item))
}

console.log(singleDuplicate([2,2,1,3,3]));