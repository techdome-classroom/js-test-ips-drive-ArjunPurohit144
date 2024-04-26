function smallestMissingPositiveInteger(nums) {
  let n = nums.length;
  let present = new Array(n+1);

  for(let i = 0 ; i<n+1; i++){
    present[i]= false;
  }

  for(let i = 0 ; i<n; i++){

    if(nums[i]>0 && nums[i]<=n){
      present[nums[i]]= true;
    }
  }

  for(let i= 1; i<=n; i++){
    if(!present[i]){
      return i;
    }
  }

  return n+1;

    // Implement the function smallest_missing_positive_integer
  
  }
  let nums =[1, 2, 0];
  console.log(smallestMissingPositiveInteger(nums));
  module.exports = smallestMissingPositiveInteger;

