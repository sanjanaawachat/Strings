// Find the Winner ----------------------------------------------
var Game_Winner = (S) => 
{
  let countA = S.match(/[a]/gi).length;
  let countD = S.match(/[d]/gi).length;

  if (countA>countD){
    return "Aditya";
  }else if(countD>countA){
    return "Danish";
  }else if(countD===countA){
    return "Draw";
  }

}