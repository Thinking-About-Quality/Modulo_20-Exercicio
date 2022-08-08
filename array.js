function numeroArray(nums){
    let number = nums[0]
    for (let i =1; i < nums.length; i ++){
        if(nums[i] > number){
            number= nums[i]
        }
    }
    return number
}

module.exports=numeroArray