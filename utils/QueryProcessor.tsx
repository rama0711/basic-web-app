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
    console.log("received")
    let nums = query.split(':')[1].split(',');
    nums[nums.length-1] = nums[nums.length-1].split('?')[0];
    let numbers = nums.map(Number);
    console.log(numbers);
    const max = Math.max(...numbers);
    return(String(max));
  }

  return "";
}
