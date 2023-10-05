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

  if (query.toLowerCase().includes("what is your name?")){
    return("rsulaima");
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
  let nums = query.split(" ")
  console.log(nums)
  return "";
}
