export default function QueryProcessor(query: string): string {

  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }
  if (query.toLowerCase().includes("what is your andrew id?")){
    return("My Andrew ID is rsulaima.");
  }

  

  if (query.toLowerCase().includes("largest")){
    let nums = query.split(':')[1].split(',');
    nums[nums.length-1] = nums[nums.length-1].split('?')[0];
    let numbers = nums.map(Number);
    const max = Math.max(...numbers);
    return(String(max));
  }
  if (query.toLowerCase().includes("plus") && query.toLowerCase().includes("?")){
    let nums = query.split(" ")
    console.log(nums)
    let  f = parseInt(nums[2])
    let y =nums[4].split("?")
    let f2 = parseInt(y[0])
    let h = String(f + f2)
    return(h);
  }


  if (query.toLowerCase().includes("multiplied") && query.toLowerCase().includes("?")){
    let nums = query.split(" ")
    let  f = parseInt(nums[2])
    let y =nums[5].split("?")
    let f2 = parseInt(y[0])
    let h = String(f * f2)
    return(h);
  }
  return "";
}
