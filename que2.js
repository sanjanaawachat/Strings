// Count the Heads -------------------------------------------
var Count_Occ = (s) => 
{
    let count = 1;
  let str = "";
  let result = "";
  for(let i=0;i<s.length;i++){
    for(let j=i+1;j<s.length;j++){
      if(s[i]===s[j]){
        count++
      }
    }
    if(count>1){
      str=s[i];
      result = result+" "+s[i]+count;
      s=s.replace(str," ");
      s=s.split(str).join("");

    }
    count=1
  }
  return result.split(" ").sort().join("")

};


