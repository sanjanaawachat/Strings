// Count Characters -------------------------------------------
const countCharacters = (S) => 
{
    let arr=[];
    let countA=0;
    let countD=0;
    for(let i=0;i<S.length;i++){
      if (S[i]==="A"){
        countA+=1;
      }else if(S[i]==="D"){
        countD+=1;
      }
    }
    arr.push(countA);
    arr.push(countD);
    return arr;
};

